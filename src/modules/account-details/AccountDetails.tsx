import { useFragment, graphql } from 'react-relay';
import { Box, Heading, List } from '@chakra-ui/react';
import { AccountDetails$key } from 'src/__generated__/AccountDetails.graphql';

import ListItem from './components/ListItem';

type Props = {
  dataRef: AccountDetails$key;
};

export default function AccountDetails({ dataRef }: Props): JSX.Element {
  const data = useFragment<AccountDetails$key>(
    graphql`
      fragment AccountDetails on Account {
        firstName
        lastName
        telephone
      }
    `,
    dataRef,
  );
  return (
    <div>
      <Box mb={2}>
        <Heading size="md">{`Account details:`}</Heading>
      </Box>
      <List>
        <ListItem title="First name">{data?.firstName}</ListItem>
        <ListItem title="Last name">{data?.lastName}</ListItem>
        <ListItem title="phone">{data?.telephone}</ListItem>
      </List>
    </div>
  );
}
