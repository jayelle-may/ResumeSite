// components/About.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { Code } from 'lucide-react';
import { PersonalInfo } from '../data/resumeData';

interface AboutProps {
  personalInfo: PersonalInfo;
}

interface HighlightProps {
  title: string;
  description: string;
}

const TechnicalHighlight: React.FC<HighlightProps> = ({ title, description }) => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.700')}
      p={4}
      borderRadius="md"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
    >
      <Heading as="h4" size="sm" color="brand.500" mb={1}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{description}</Text>
    </Box>
  );
};

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  const highlights = [
    {
      title: 'Full Stack Development',
      description: 'Experienced with modern JavaScript frameworks, TypeScript, and server-side technologies.'
    },
    {
      title: 'Cloud Architecture',
      description: 'Proficient with AWS and GCP services, including Lambda, CDK, and BigQuery.'
    },
    {
      title: 'DevOps',
      description: 'Implemented CI/CD pipelines and infrastructure-as-code using GitHub Actions and Terraform.'
    },
    {
      title: 'Performance Optimization',
      description: 'Proven track record of significantly improving application performance metrics.'
    }
  ];

  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p={8}
    >
      <Flex align="center" mb={4}>
        <Icon as={Code} w={6} h={6} color="brand.500" mr={2} />
        <Heading as="h2" size="lg">About Me</Heading>
      </Flex>
      
      <Text color={useColorModeValue('gray.700', 'gray.300')} mb={6} lineHeight="tall">
        {personalInfo.summary}
      </Text>
      
      <Box mt={8}>
        <Heading as="h3" size="md" mb={4}>Technical Highlights</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {highlights.map((highlight, index) => (
            <TechnicalHighlight 
              key={index}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;