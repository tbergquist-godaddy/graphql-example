import { useLazyLoadQuery, graphql } from 'react-relay';
import { AccountQuery as AccountsQueryType } from 'src/__generated__/AccountQuery.graphql';
import { Box, Container } from '@chakra-ui/react';

import AccountsHeading from './components/AccountsHeading';

import AccountDetails from '@/modules/account-details/AccountDetails';
import UpdateAccount from '@/modules/update-account/UpdateAccount';

const AccountQuery = graphql`
  query AccountQuery {
    account {
      ...AccountsHeading
      ...AccountDetails
      ...UpdateAccount
    }
  }
`;

export default function Account(): JSX.Element {
  const data = useLazyLoadQuery<AccountsQueryType>(AccountQuery, {}, { fetchPolicy: 'store-or-network' });
  if (data?.account == null) {
    return <>{'loading...'}</>;
  }
  return (
    <Container maxW="container.sm">
      <AccountsHeading dataRef={data.account} />
      <Box mt={4} display="flex" justifyContent="space-between">
        <AccountDetails dataRef={data.account} />
        <UpdateAccount dataRef={data.account} />
      </Box>
    </Container>
  );
}
