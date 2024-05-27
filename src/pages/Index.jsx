import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">Financial Times</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#home">Home</Link>
          <Link href="#news">News</Link>
          <Link href="#features">Features</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Breaking News: Market Hits Record Highs</Heading>
        <Text fontSize="lg">Stay updated with the latest financial news and trends.</Text>
      </Box>

      {/* Featured Articles Section */}
      <Box as="section" p={10}>
        <Heading size="xl" mb={6}>Featured Articles</Heading>
        <VStack spacing={8}>
          <Box bg="white" p={6} shadow="md" borderWidth="1px" width="100%">
            <Heading size="md" mb={2}>Article 1</Heading>
            <Text>Summary of the first featured article. This is a brief overview of the content.</Text>
          </Box>
          <Box bg="white" p={6} shadow="md" borderWidth="1px" width="100%">
            <Heading size="md" mb={2}>Article 2</Heading>
            <Text>Summary of the second featured article. This is a brief overview of the content.</Text>
          </Box>
          <Box bg="white" p={6} shadow="md" borderWidth="1px" width="100%">
            <Heading size="md" mb={2}>Article 3</Heading>
            <Text>Summary of the third featured article. This is a brief overview of the content.</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us: contact@financialtimes.com</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin />
            </Link>
          </HStack>
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;