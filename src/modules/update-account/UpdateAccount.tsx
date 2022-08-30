import { Formik, Form } from 'formik';
import { graphql, useFragment, useMutation } from 'react-relay';
import { Box, Button, Spinner, useToast } from '@chakra-ui/react';
import { UpdateAccount$key } from 'src/__generated__/UpdateAccount.graphql';
import { UpdateAccountMutation } from 'src/__generated__/UpdateAccountMutation.graphql';

import TextInput from '@/modules/input/TextInput';

type Props = {
  dataRef: UpdateAccount$key;
};

export default function UpdateAccount({ dataRef }: Props): JSX.Element | null {
  const toast = useToast();
  const data = useFragment(
    graphql`
      fragment UpdateAccount on Account {
        firstName
        lastName
        telephone
      }
    `,
    dataRef,
  );

  const [updateAccount, isLoading] = useMutation<UpdateAccountMutation>(graphql`
    mutation UpdateAccountMutation($account: UpdateAccount!) {
      updateAccount(account: $account) {
        __typename
        ... on Error {
          message
        }
        ... on UpdateAccountResponse {
          account {
            id
            ...UpdateAccount
          }
        }
      }
    }
  `);

  if (data?.firstName == null) {
    return null;
  }

  const handleSubmit = (account) => {
    updateAccount({
      variables: {
        account,
      },
      onCompleted: (res, errors) => {
        if (errors != null) {
          toast({
            title: `found an error: ${JSON.stringify(errors, null, 2)}`,
            status: 'error',
          });
          // eslint-disable-next-line no-underscore-dangle
        } else if (res.updateAccount?.__typename === 'UpdateAccountError' && res.updateAccount.message != null) {
          toast({
            title: res.updateAccount.message,
            status: 'error',
          });
        } else {
          toast({
            title: 'all good, your account updated',
            status: 'success',
          });
        }
      },
    });
  };
  return (
    <div>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        <Form>
          <TextInput name="firstName" label="First name" />
          <TextInput name="lastName" label="Last name" />
          <TextInput name="telephone" label="Telephone" />
          <Box justifyContent="flex-end" display="flex">
            <Button type="submit">{isLoading ? <Spinner /> : `Save changes`}</Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
