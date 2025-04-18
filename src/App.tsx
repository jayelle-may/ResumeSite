// App.tsx
import React, { useState } from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import { theme } from "./theme";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { personalInfo, experience, education, skills } from "./data/resumeData";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <ChakraProvider theme={theme}>
      {/* Using Flex with min-height: 100vh and flexDirection column to ensure footer stays at bottom */}
      <Flex
        direction="column"
        minH="100vh"
        bg="gray.50"
        overflow="hidden" // Prevents horizontal scrolling
        width="100%"
      >
        <Header personalInfo={personalInfo} />

        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <Box
          as="main"
          maxW="container.xl"
          mx="auto"
          px={{ base: 3, md: 6 }} // Reduced padding on mobile
          py={{ base: 4, md: 8 }} // Reduced padding on mobile
          width="100%"
          flex="1" // This allows the main content to grow and push footer down
          overflowX="hidden" // Prevent horizontal scrolling
          css={{
            // Ensure text doesn't overflow containers
            "& h1, & h2, & h3, & h4, & h5, & h6, & p, & span": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            },
          }}
        >
          {activeSection === "about" && (
            <Box overflowX="hidden" width="100%">
              <About personalInfo={personalInfo} />
            </Box>
          )}
          {activeSection === "experience" && (
            <Box overflowX="hidden" width="100%">
              <Experience experience={experience} />
            </Box>
          )}
          {activeSection === "skills" && (
            <Box overflowX="hidden" width="100%">
              <Skills skills={skills} />
            </Box>
          )}
          {activeSection === "education" && (
            <Box overflowX="hidden" width="100%">
              <Education education={education} />
            </Box>
          )}
        </Box>

        <Footer personalInfo={personalInfo} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
