import { Box, Divider, ListItem as ChakraLI } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};
export default function ListItem({ title, children }: Props): JSX.Element {
  return (
    <>
      <Box p={4}>
        <ChakraLI>
          <Box>
            <Box as="span" mr={2}>
              <strong>{title}:</strong>
            </Box>
            <span>{children}</span>
          </Box>
        </ChakraLI>
      </Box>
      <Divider />
    </>
  );
}
