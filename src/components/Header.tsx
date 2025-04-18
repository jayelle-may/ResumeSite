// components/Header.tsx
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import ResumeButton from "./ResumeButton";
import { links, PersonalInfo } from "../data/resumeData";
import openInNewWindow from "../utilities/OpenInNewWindow";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <Box
      as="header"
      bgGradient="linear(to-b, brand.600, blue.800)"
      color="white"
      py={16}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        maxW="container.xl"
        mx="auto"
        px={6}
      >
        <Box textAlign={{ base: "center", md: "left" }} mb={{ base: 8, md: 0 }}>
          <Heading as="h1" size="2xl">
            {personalInfo.name}
          </Heading>
          <Heading as="h2" size="md" fontWeight="medium" mt={2}>
            {personalInfo.title}
          </Heading>

          <Stack
            mt={4}
            spacing={4}
            justify={{ base: "center", md: "flex-start" }}
          >
            <HStack>
              <Mail size={16} />
              <Text>{personalInfo.email}</Text>
            </HStack>
            <HStack>
              <Phone size={16} />
              <Text>{personalInfo.phone}</Text>
            </HStack>
          </Stack>
        </Box>

        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
          <Button
            leftIcon={<Github size={16} />}
            variant="outline"
            bg="white"
            color="brand.700"
            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            onClick={() => openInNewWindow(links.github)}
          >
            GitHub
          </Button>
          <Button
            leftIcon={<Linkedin size={16} />}
            variant="outline"
            bg="white"
            color="brand.700"
            _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
            onClick={() =>
              openInNewWindow(links.linkedIn)
            }
          >
            LinkedIn
          </Button>
          <ResumeButton />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
