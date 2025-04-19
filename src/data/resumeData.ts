// data/resumeData.ts

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  devops: string[];
  other: string[];
}

export interface Links {
  github: string;
  linkedIn: string;
}

export const personalInfo: PersonalInfo = {
  name: "Jayelle May",
  title: "Full Stack Engineer",
  email: "jayelle@thejayelle.com",
  phone: "(724) 456-7938",
  summary: "Full stack engineer with 3+ years of experience, a passion for problem-solving, and a love of learning new technologies. Skilled in several web stacks, cloud platforms, and database systems. Proven collaborator within cross-functional teams to deliver impactful solutions. Looking for opportunities to tackle new puzzles and have a larger impact on the direction of applications I work on."
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "Best Buy",
    period: "January 2022 - Present",
    achievements: [
      "Modernized a legacy PHP codebase using React, TypeScript, and AWS. Improved maintainability and enabled integrations with enterprise logging & reporting tools. Reduced average ticket resolution time by 70%.",
      "Developed a full-stack internal web app to assist employees with part lookup and repair instructions, increasing repairs completed on first visit by 40%.",
      "Built data ingestion pipelines using AWS Lambda and GCP Feature Store. Enabled additional revenue stream responsible for $1,000,000+ annual",
      "Created infrastructure-as-code (IaC) solutions for legacy cloud environments.",
      "Designed and implemented CI/CD pipelines using GitHub Actions and AWS CDK.  Increased weekly deployments by 250%.",
      "Optimized average page load of the local development environment, boosting performance by 783%.",
      "Building GCP features to combine BigQuery datasets to populate customer owned product views."
    ]
  },
  {
    role: "System Administrator",
    company: "Presque Isle Passage RV Park Inc.",
    period: "April 2018 - December 2022",
    achievements: [
      "Developed an Asterisk-based VoIP system, reducing monthly phone bills by 60%.",
      "Designed and deployed a guest Wi-Fi network with captive portal and payment integration.",
      "Built a web app for housekeeping task tracking, reducing average room turnaround time by 30 minutes."
    ]
  },
  {
    role: "Advanced Repair Agent",
    company: "Best Buy",
    period: "October 2013 - December 2022",
    achievements: [
      "Deliver technical information in clear, user-friendly language.",
      "Streamlined and documented processes used for system repair."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Computer Software Engineering - BS",
    institution: "Western Governors University",
    year: "2021"
  }
];

export const skills: Skills = {
  frontend: ["React", "TypeScript", "HTML/CSS"],
  backend: ["Ruby", "PHP", "NodeJs", "Python"],
  database: ["SQL", "NoSQL"],
  devops: ["Terraform", "Google Cloud Platform", "Amazon Web Services"],
  other: ["ITIL Foundation Certification"]
};

export const links: Links = {
  github: "https://github.com/jayelle-may",
  linkedIn: "https://www.linkedin.com/in/jayelle-may/"
}