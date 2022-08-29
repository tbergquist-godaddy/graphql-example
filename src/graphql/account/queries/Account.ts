import { invariant } from '@ux/js';
import { v4 } from 'uuid';

import Account from '../types/output/Account';

const { ACCOUNT_API, AUTH_IDP } = process.env;

export default {
  type: Account,
  resolve: async () => {
    invariant(ACCOUNT_API != null, 'Expected ACCOUNT_API to be set, but it was not');
    invariant(AUTH_IDP != null, 'Expected AUTH_IDP to be set, but it was not');

    const res = await fetch(`${ACCOUNT_API}/accounts/v1/accounts/my`, {
      headers: {
        // this should never be done in prod, this should come from
        // the request
        'Authorization': `sso-jwt ${AUTH_IDP}`,
        'x-ray-id': v4(),
      },
    });
    const { customerId, firstName, lastName, telephone } = await res.json();

    return {
      id: customerId,
      firstName,
      lastName,
      telephone,
    };
  },
};
