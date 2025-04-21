// components/Skills.tsx
import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Icon,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Cpu } from "lucide-react";
import { Skills as SkillsType } from "../data/resumeData";

interface SkillsProps {
  skills: SkillsType;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      p={4}
      bg={bgColor}
    >
      <Heading as="h3" size="sm" color="brand.500" mb={3}>
        {title}
      </Heading>

      <Wrap spacing={2}>
        {skills.map((skill, index) => (
          <WrapItem key={index}>
            <Tag
              size="md"
              borderRadius="full"
              variant="solid"
              bg="brand.50"
              color="brand.700"
              py={1}
              px={3}
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = [
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Database", skills: skills.database },
    { title: "DevOps", skills: skills.devops },
    { title: "Certifications", skills: skills.other },
  ];

  return (
    <Box bg="white" borderRadius="lg" shadow="md" p={8}>
      <Flex align="center" mb={6}>
        <Icon as={Cpu} w={6} h={6} color="brand.500" mr={2} />
        <Heading as="h2" size="lg">
          Technical Skills
        </Heading>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {categories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
