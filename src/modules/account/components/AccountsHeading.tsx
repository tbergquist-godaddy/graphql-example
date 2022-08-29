import { useFragment, graphql } from 'react-relay';
import { AccountsHeading$key } from 'src/__generated__/AccountsHeading.graphql';
import { Heading } from '@chakra-ui/react';

type Props = {
  dataRef: AccountsHeading$key;
};

export default function AccountsHeading({ dataRef }: Props): JSX.Element {
  const data = useFragment<AccountsHeading$key>(
    graphql`
      fragment AccountsHeading on Account {
        firstName
      }
    `,
    dataRef,
  );

  return <Heading as="h1">{`Welcome back ${data?.firstName}`}</Heading>;
}
