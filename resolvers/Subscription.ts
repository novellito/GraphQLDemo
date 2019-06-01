const Subscription = {
  specialPromo: {
    subscribe(parent: any, args: any, { pubsub }: any, info: any) {
      return pubsub.asyncIterator('promo');
    }
  }
};

export default Subscription;
