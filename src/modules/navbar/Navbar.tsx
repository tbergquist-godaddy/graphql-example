import { Box, Container, Text, Image } from '@chakra-ui/react';

export default function Navbar(): JSX.Element {
  return (
    <Box bg="green.600">
      <Container maxW="container.xl">
        <Box>
          <Box py="8" display="flex" alignItems="center" justifyContent="space-between">
            <Box display="flex">
              <Image
                boxSize="30px"
                objectFit="contain"
                src="https://img1.wsimg.com/cdn/Website/none/v1/en-US/83790be0-f09f-48ad-a4de-5f5064ef2e58/Logo-123Reg-Contrast.svg"
                alt="logo"
                borderRadius="full"
                mr="2"
              />
              <Text fontSize="lg" color="white">
                {`Accounts`}
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
