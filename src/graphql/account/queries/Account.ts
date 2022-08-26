import Account from '../types/output/Account';

export default {
  type: Account,
  resolve: (/* _: unknown, args: unknown */) => {
    return {
      id: '1',
    };
  },
};
