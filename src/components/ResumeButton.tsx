// components/ResumeButton.tsx
import React from "react";
import { Button, Icon, useToast } from "@chakra-ui/react";
import { Download } from "lucide-react";

interface ResumeButtonProps {
  resumeFileName?: string;
  buttonText?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  iconPosition?: "left" | "right";
}

const ResumeButton: React.FC<ResumeButtonProps> = ({
  resumeFileName = "Resume-Jayelle_May.pdf",
  buttonText = "Resume",
  variant = "solid",
  size = "md",
  showIcon = true,
  iconPosition = "left",
}) => {
  const toast = useToast();

  const handleDownload = () => {
    try {
      // Create a link element
      const link = document.createElement("a");

      // Set the href to the path of your PDF file
      // In a real app, this file should be in the public folder
      link.href = `/${resumeFileName}`;

      // Set the download attribute with the desired filename
      link.download = resumeFileName;

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up - remove the link from the document
      document.body.removeChild(link);

      // Show success toast
      toast({
        title: "Download started",
        description: "Your resume download has started!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    } catch (error) {
      // Show error toast if download fails
      toast({
        title: "Download failed",
        description:
          "There was an error downloading the resume. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      console.error("Download error:", error);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      bg="white"
      color="brand.700"
      size={size}
      leftIcon={
        showIcon && iconPosition === "left" ? <Icon as={Download} /> : undefined
      }
      rightIcon={
        showIcon && iconPosition === "right" ? (
          <Icon as={Download} />
        ) : undefined
      }
      _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
      transition="all 0.2s"
    >
      {buttonText}
    </Button>
  );
};

export default ResumeButton;
