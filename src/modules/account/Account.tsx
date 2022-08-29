import { useLazyLoadQuery, graphql } from 'react-relay';
import { AccountQuery as AccountsQueryType } from 'src/__generated__/AccountQuery.graphql';
import { Container } from '@chakra-ui/react';

import AccountsHeading from './components/AccountsHeading';

const AccountQuery = graphql`
  query AccountQuery {
    account {
      ...AccountsHeading
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
    </Container>
  );
}