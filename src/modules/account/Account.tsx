import { useLazyLoadQuery, graphql } from 'react-relay';

const AccountQuery = graphql`
  query AccountQuery {
    account {
      id
      firstName
      lastName
    }
  }
`;

export default function Account(): JSX.Element {
  const data = useLazyLoadQuery(AccountQuery, {}, { fetchPolicy: 'store-or-network' });

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
