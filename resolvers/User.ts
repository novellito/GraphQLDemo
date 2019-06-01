import { Users } from '../db';
const User = {
  cart(parent: any, args: any, ctx: any, info: any) {
    const foundUser: any = Users.find(user => user.id === parent.id);
    return foundUser.cart;
  }
};

export default User;
