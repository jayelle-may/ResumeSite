// components/Experience.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
  List,
  ListItem,
  ListIcon,
  useColorModeValue
} from '@chakra-ui/react';
import { Briefcase, Check } from 'lucide-react';
import { Job } from '../data/resumeData';

interface ExperienceProps {
  experience: Job[];
}

const ExperienceCard: React.FC<{ job: Job }> = ({ job }) => {
  const borderColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  
  return (
    <Box
      borderLeft="4px solid"
      borderColor={borderColor}
      pl={4}
      py={1}
    >
      <Heading as="h3" size="md" fontWeight="semibold">
        {job.role}
      </Heading>
      
      <Flex 
        justifyContent="space-between" 
        mb={2}
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems={{ base: 'flex-start', sm: 'center' }}
      >
        <Text color="brand.500" fontWeight="medium">
          {job.company}
        </Text>
        <Text 
          color="gray.500" 
          fontSize="sm"
          mt={{ base: 1, sm: 0 }}
        >
          {job.period}
        </Text>
      </Flex>
      
      <List spacing={2}>
        {job.achievements.map((achievement, index) => (
          <ListItem key={index} display="flex" alignItems="flex-start">
            <ListIcon as={Check} color="green.500" mt={1} />
            <Text color={textColor}>
              {achievement}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      shadow="md"
      p={8}
    >
      <Flex align="center" mb={6}>
        <Icon as={Briefcase} w={6} h={6} color="brand.500" mr={2} />
        <Heading as="h2" size="lg">Professional Experience</Heading>
      </Flex>
      
      <VStack spacing={8} align="stretch">
        {experience.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;