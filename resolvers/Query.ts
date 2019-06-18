import { Users, Items } from '../db';

const Query = {
  // Could have returned the whole Users object here
  users(parent: any, args: any, ctx: any, info: any) {
    return Users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));
  },
  user(parent: any, args: any, ctx: any, info: any) {
    const foundUser: any = Users.find(user => user.id === args.id);
    if (!foundUser) {
      throw new Error('User not found!');
    }
    return foundUser;
  },
  items(parent: any, args: any, ctx: any, info: any) {
    return Items;
  }
};

export default Query;
