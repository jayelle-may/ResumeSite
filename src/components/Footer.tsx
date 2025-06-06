// components/Footer.tsx
import React from "react";
import {
  Box,
  Text,
  Flex,
  Link,
  HStack
} from "@chakra-ui/react";
import { Mail, Github, Linkedin } from "lucide-react";
import { links, PersonalInfo } from "../data/resumeData";

interface FooterProps {
  personalInfo: PersonalInfo;
}

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      color="white"
      py={6}
      width="100%"
      marginTop="auto" // This pushes the footer to the bottom when possible
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={6}
      >
        <Text mb={{ base: 4, md: 0 }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </Text>

        <HStack spacing={4}>
          <Link
            href={`mailto:${personalInfo.email}`}
            _hover={{ color: "brand.300" }}
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
          <Link
            href={links.github}
            _hover={{ color: "brand.300" }}
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href={links.linkedIn}
            _hover={{ color: "brand.300" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
