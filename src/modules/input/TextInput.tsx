import { Box, Input } from '@chakra-ui/react';
import { useField } from 'formik';

type Props = {
  name: string;
  label: string;
};

export default function TextInput({ name, label }: Props): JSX.Element {
  const [fieldProps] = useField(name);
  return (
    <Box mb={4}>
      <label>
        {label}
        <Input {...fieldProps} />
      </label>
    </Box>
  );
}
