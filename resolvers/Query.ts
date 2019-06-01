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
  items(parent: any, args: any, ctx: any, info: any) {
    return Items;
  }
};

export default Query;
