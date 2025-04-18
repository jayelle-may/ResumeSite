// App.tsx
import React, { useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
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
      <Box minH="100vh" bg="gray.50">
        <Header personalInfo={personalInfo} />

        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <Box
          as="main"
          maxW="container.xl"
          mx="auto"
          px={{ base: 4, md: 6 }}
          py={8}
          width="100%"
          overflowX="hidden"
        >
          {activeSection === "about" && <About personalInfo={personalInfo} />}
          {activeSection === "experience" && (
            <Experience experience={experience} />
          )}
          {activeSection === "skills" && <Skills skills={skills} />}
          {activeSection === "education" && <Education education={education} />}
        </Box>

        <Footer personalInfo={personalInfo} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
