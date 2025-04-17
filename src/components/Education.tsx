// components/Education.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { BookOpen } from 'lucide-react';
import { Education as EducationType } from '../data/resumeData';

interface EducationProps {
  education: EducationType[];
}

const EducationCard: React.FC<{ edu: EducationType }> = ({ edu }) => {
  const borderColor = useColorModeValue('brand.500', 'brand.300');
  
  return (
    <Box
      borderLeft="4px solid"
      borderColor={borderColor}
      pl={4}
      py={1}
    >
      <Heading as="h3" size="md" fontWeight="semibold">
        {edu.degree}
      </Heading>
      
      <Flex 
        justifyContent="space-between" 
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems={{ base: 'flex-start', sm: 'center' }}
      >
        <Text color="brand.500" fontWeight="medium">
          {edu.institution}
        </Text>
        <Text 
          color="gray.500"
          mt={{ base: 1, sm: 0 }}
        >
          {edu.year}
        </Text>
      </Flex>
    </Box>
  );
};

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p={8}
    >
      <Flex align="center" mb={6}>
        <Icon as={BookOpen} w={6} h={6} color="brand.500" mr={2} />
        <Heading as="h2" size="lg">Education</Heading>
      </Flex>
      
      <VStack spacing={6} align="stretch">
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </VStack>
    </Box>
  );
};

export default Education;