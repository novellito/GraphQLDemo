import { Users, Items } from '../db';

function foundUserIndex(id: any): number {
  const userFoundIndex = Users.findIndex(user => user.id === id);
  if (userFoundIndex === -1) {
    throw new Error('User not found!');
  }
  return userFoundIndex;
}

const Mutation = {
  addItem(parent: any, { data }: any, ctx: any, info: any) {
    const userFoundIndex = foundUserIndex(data.userId);

    const foundItem = Items.find(item => item.name === data.itemName);

    if (!foundItem) {
      throw new Error('Item not found!');
    }

    Users[userFoundIndex].cart.push(foundItem);
    return foundItem;
  },
  removeItem(parent: any, { data }: any, ctx: any, info: any) {
    const userFoundIndex = foundUserIndex(data.userId);

    const currentUsersCart = Users[userFoundIndex].cart;

    const itemToDeleteIndex = currentUsersCart.findIndex(
      item => item.name === data.itemName
    );

    if (itemToDeleteIndex === -1) {
      throw new Error('Item not found!');
    }
    const deletedItem = currentUsersCart[itemToDeleteIndex];

    Users[userFoundIndex].cart.splice(itemToDeleteIndex, 1);

    return deletedItem;
  },
  completeOrder(parent: any, { id }: any, { pubsub }: any, info: any) {
    const userFoundIndex = foundUserIndex(id);

    const currentUsersCart = Users[userFoundIndex].cart;

    const sumOfUsersCart = currentUsersCart
      .map(item => item.price)
      .reduce((total, cv) => total + cv);

    if (sumOfUsersCart > 10) {
      pubsub.publish('promo', {
        specialPromo: `${
          Users[userFoundIndex].name
        } will get $2 off his next purchase!`
      });
    }

    return `${Users[userFoundIndex].name}'s total is $${sumOfUsersCart}!`;
  }
};

export default Mutation;
