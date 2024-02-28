import { Box, Container, VStack, Heading, Text, Button, Link, SimpleGrid, Image, useColorModeValue, IconButton, Icon, Flex } from "@chakra-ui/react";
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="section" textAlign="center">
        <MotionBox initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.8 }}>
          <Heading size="2xl" fontWeight="extrabold">
            John Doe
          </Heading>
          <Text color={useColorModeValue("green.300", "green.200")} fontSize="xl">
            Medical Professional · Machine Learning Expert · Entrepreneur
          </Text>
        </MotionBox>
      </VStack>

      <VStack spacing={8} as="section" my={12}>
        <Heading size="lg" fontWeight="bold" textAlign="left">
          Bio
        </Heading>
        <Text textAlign="justify">John Doe is a multifaceted professional with a passion for medical innovation, artificial intelligence, and entrepreneurship. With over a decade of experience in the medical field and a strong background in machine learning, John has contributed to advancing healthcare through technology. He is also an avid photographer and enjoys capturing the beauty of life through his lens.</Text>
      </VStack>

      <VStack spacing={8} as="section" my={12}>
        <Heading size="lg" fontWeight="bold" textAlign="left">
          Publications
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {/* Placeholder for publications */}
          <MotionBox whileHover={{ scale: 1.05 }}>
            <Text fontWeight="semibold">Cutting-edge Research on AI in Healthcare</Text>
            <Text fontSize="sm">Published in Medical AI Journal, 2021</Text>
          </MotionBox>
          <MotionBox whileHover={{ scale: 1.05 }}>
            <Text fontWeight="semibold">Entrepreneurial Ventures in Biotech</Text>
            <Text fontSize="sm">Published in Business & BioTech, 2020</Text>
          </MotionBox>
        </SimpleGrid>
      </VStack>

      <VStack spacing={8} as="section" my={12}>
        <Heading size="lg" fontWeight="bold" textAlign="left">
          Photography Gallery
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <Image src="https://images.unsplash.com/photo-1532598187460-98fe8826d1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MDkwOTcxMjF8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Image src="https://images.unsplash.com/photo-1579976327048-ee8afcadda27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcwOTA5NzEyMXww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Image src="https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcwOTA5NzEyMnww&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </VStack>

      <VStack spacing={8} as="section" my={12}>
        <Heading size="lg" fontWeight="bold" textAlign="left">
          Innovation Projects
        </Heading>
        <Box textAlign="justify">
          <Text fontWeight="semibold">Project A - An AI-driven Diagnostic Tool</Text>
          <Text fontSize="sm">A revolutionary tool that leverages machine learning to provide accurate and rapid diagnostics in clinical settings.</Text>
        </Box>
        <Box textAlign="justify">
          <Text fontWeight="semibold">Project B - Telemedicine Platform</Text>
          <Text fontSize="sm">A platform that facilitates remote medical consultations, making healthcare more accessible to communities worldwide.</Text>
        </Box>
      </VStack>

      <VStack spacing={8} as="section" my={12}>
        <Flex justifyContent="space-between" w="full" alignItems="center">
          <Heading size="lg" fontWeight="bold">
            Get in Touch
          </Heading>
          <Button leftIcon={<FaDownload />} colorScheme="green">
            Download CV
          </Button>
        </Flex>
        <Flex justifyContent="space-around" w="full">
          <IconButton as={Link} href="mailto:john.doe@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="green" isRound />
          <IconButton as={Link} href="https://www.linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="green" isRound />
          <IconButton as={Link} href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" colorScheme="green" isRound />
          <IconButton as={Link} href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="green" isRound />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
