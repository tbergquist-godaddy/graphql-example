import { useLazyLoadQuery, graphql } from 'react-relay';
import { AccountQuery as AccountsQueryType } from 'src/__generated__/AccountQuery.graphql';
import { Box, Container } from '@chakra-ui/react';

import AccountsHeading from './components/AccountsHeading';

import AccountDetails from '@/modules/account-details/AccountDetails';

const AccountQuery = graphql`
  query AccountQuery {
    account {
      ...AccountsHeading
      ...AccountDetails
    }
  }
`;

export default function Account(): JSX.Element {
  const data = useLazyLoadQuery<AccountsQueryType>(AccountQuery, {}, { fetchPolicy: 'store-or-network' });
  if (data?.account == null) {
    return <>{'loading...'}</>;
  }
  return (
    <Container>
      <AccountsHeading dataRef={data.account} />
      <Box mt={4}>
        <AccountDetails dataRef={data.account} />
      </Box>
    </Container>
  );
}
