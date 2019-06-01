type Item = {
  name: string;
  price: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  cart: Item[];
};

export const Users: User[] = [
  {
    id: '1',
    name: 'chris',
    email: 'chris@example.com',
    cart: [{ name: 'jelly', price: 1.0 }]
  },
  {
    id: '2',
    name: 'john',
    email: 'john@example.com',
    cart: []
  },
  {
    id: '3',
    name: 'mike',
    email: 'mike@example.com',
    cart: []
  }
];

export const Items: Item[] = [
  { name: 'jelly', price: 1.0 },
  { name: 'glaze', price: 1.5 },
  { name: 'chocolate', price: 2 },
  { name: 'coffee', price: 1.5 },
  { name: 'smoothie', price: 2 }
];
