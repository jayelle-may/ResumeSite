// components/Navigation.tsx
import React from "react";
import { Flex, Box, Button, useBreakpointValue } from "@chakra-ui/react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
  ];

  // Use smaller text size on mobile
  const fontSize = useBreakpointValue({ base: "sm", sm: "md" });
  // Use smaller padding on mobile
  const buttonPadding = useBreakpointValue({ base: "2", sm: "4" });

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="sticky"
      width="100%"
      overflowX="hidden"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 2, md: 6 }}
        justify="center"
        flexWrap="wrap" // Allow wrapping on very small screens if needed
      >
        {sections.map((section) => (
          <Box
            key={section.id}
            px={{ base: 1, sm: 2 }}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              bg: activeSection === section.id ? "brand.500" : "transparent",
              transition: "all 0.3s ease",
            }}
          >
            <Button
              variant="ghost"
              color={activeSection === section.id ? "brand.500" : "gray.600"}
              fontWeight="medium"
              fontSize={fontSize}
              py={{ base: 3, sm: 4 }}
              px={buttonPadding}
              minW={{ base: "60px", sm: "auto" }} // Prevent text cutoff by setting min width
              onClick={() => setActiveSection(section.id)}
              _hover={{ bg: "transparent", color: "brand.500" }}
              _active={{ bg: "transparent" }}
              whiteSpace="nowrap" // Prevent text wrapping
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
