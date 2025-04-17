// components/Navigation.tsx
import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <Box as="nav" bg="white" boxShadow="md" position="sticky" top="0" zIndex="sticky">
      <Flex
        maxW="container.xl"
        mx="auto"
        px={6}
        justify={{ base: 'center', md: 'flex-start' }}
      >
        {sections.map((section) => (
          <Box
            key={section.id}
            px={2}
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              bg: activeSection === section.id ? 'brand.500' : 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            <Button
              variant="ghost"
              color={activeSection === section.id ? 'brand.500' : 'gray.600'}
              fontWeight="medium"
              py={4}
              onClick={() => setActiveSection(section.id)}
              _hover={{ bg: 'transparent', color: 'brand.500' }}
              _active={{ bg: 'transparent' }}
            >
              {section.label}
            </Button>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Navigation;