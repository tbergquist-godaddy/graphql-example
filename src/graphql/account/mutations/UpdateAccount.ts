import { GraphQLNonNull } from 'graphql';
import { v4 } from 'uuid';
import { invariant } from '@ux/js';

import UpdateAccountInput, { AccountInputType } from '../types/input/UpdateAccountInput';
import UpdateAccountType, { UpdateAccountError } from '../types/output/UpdateAccount';
import { fetchAccount } from '../queries/Account';

const { ACCOUNT_API, AUTH_IDP } = process.env;

const updateAccount = (data) => {
  invariant(ACCOUNT_API != null, 'Expected ACCOUNT_API to be set, but it was not');
  invariant(AUTH_IDP != null, 'Expected AUTH_IDP to be set, but it was not');

  return fetch(`${ACCOUNT_API}/accounts/v1/accounts/my`, {
    method: 'PATCH',
    headers: {
      // this should never be done in prod, this should come from
      // the request
      'content-type': 'application/json',
      'Authorization': `sso-jwt ${AUTH_IDP}`,
      'x-ray-id': v4(),
    },
    body: JSON.stringify(data),
  });
};

type Args = {
  account: AccountInputType;
};
export default {
  type: UpdateAccountType,
  args: {
    account: {
      type: new GraphQLNonNull(UpdateAccountInput),
    },
  },
  resolve: async (_: unknown, { account }: Args) => {
    const {
      customerId,
      lastUpdatedDate,
      shopperId,
      godaddyId,
      creationDate,
      userName,
      email,
      reseller,
      wireTransferAllowed,
      status,
      twoFactorAuthPreferences,
      ...accountData
    } = await fetchAccount();
    const res = await updateAccount({ ...accountData, ...account });

    const json = await res.json();
    if ('errors' in json) {
      const error = json.errors.map(({ field, message }) => `${field}-${message}`).join(',');
      return new UpdateAccountError(error);
    }
    return fetchAccount();
  },
};
