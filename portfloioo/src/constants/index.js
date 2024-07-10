import pp1 from "../assets/projects/pp1.png";
import pp2 from "../assets/projects/pp2.png";
import pp3 from "../assets/projects/pp3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in software development and data analytics leveraging AI. Proficient in Java, Python, and data structures and algorithms, I have honed my skills in front-end technologies like React and Tailwind CSS, as well as back-end technologies including Django frameworks, SQL, and MongoDB. With a strong foundation in problem-solving, I have solved numerous problems on platforms like LeetCode and CodeChef. My goal is to utilize my technical skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a strong foundation in creating efficient and user-friendly applications. Currently pursuing a degree in Computer Science and Engineering at Jaypee Institute of Information Technology, I have gained substantial experience through internships and projects that showcase my skills in software development, data analytics leveraging AI, and data structures and algorithms. My technical expertise includes languages such as Java, Python,  and proficient with frameworks like Django and React, as well as databases like SQL and MongoDB. I have successfully implemented solutions in various domains, including  a phase filtering project for seismic data analysis at ONGC. My problem-solving abilities are further demonstrated by solving over 300 problems on Leetcode and participating in competitive coding platforms like CodeChef. I thrive in collaborative environments and am passionate about continuous learning and adapting to new challenges. Outside of coding, I enjoy exploring new technologies and models, blending my love for precision and creativity.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Technical Intern",
    company: "Virtusa",
    description: ` Developing a comprehensive patient analysis system integrating CMS Blue Button, EHR, and medical
 device treatment data, providing insights into medical history, claims, procedures,
 appointments, and treatment data.
  Implementing data extraction, matching, and integration algorithms using FHIR standards and synthetic EHR
 data generation tools like Synthea, ensuring data integrity and consistency.`,
    technologies: ["Python libraries and frameworks","CMS Blue Button API","Synthea","Pandas"],
  },
  {
    year: "May-July 2023",
    role: "Industrial Trainee",
    company: "Oil and Natural Gas Corporation of India",
    description: `Worked as a trainee to solve phase filtering problem faced by ONGC while interpreting
 time-series-data obtained to identify hydrocarbon wells.
  Developed a complex phase filtering project during my training at the SeisData Processing and Interpretation
 Center (SPIC), ONGC, Mumbai. This involved analyzing seismic data collected as time-series measurements.
  Its primary aim was to identify key areas of interest, pinpointing the precise location and depth of
 hydrocarbon wells in both onshore and offshore locations`,
    technologies: ["Python", "Numpy", "Matplotlib", "Pandas","GUI Tkinter"],
  },
  
 
];

export const PROJECTS = [
  {
    title: "Time-Series Analysis",
    image: pp1,
    description:
    "It allows experts to decode the complex behaviors and characteristics of the subsurface, aiding in efficient exploration and resource management in the oil and gas industry.",
    technologies: ["Python", "Numpy", "Matplotlib", "Pandas","GUI Tkinter"],
  },
  {
    title: "Blood Bank Management System",
    image: pp2,
    description:
      "Designed and implemented a user-friendly web interface for administrators, donors, and patients, enhancing the efficiency of blood stock management. Implemented role-based access control, allowing administrators to approve/reject donation and blood requests,contributing to effective inventory management.",
    technologies: ["Python", "Django", "SQL", "HTML/CSS","Javascript"],
  },
  {
    title: "Portfolio Website",
    image: pp3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "javaScript", "Framer Motion"],
  },
  {
    title: "House Price Prediction",
    image: project4,
    description:
      "The primary goal of this project is to predict housing prices based on various features in the California Housing dataset. By implementing different regression models, we can analyze their performance and determine which model provides the most accurate predictions.",
    technologies: ["Python", "MatPlotlib", "Pandas", "Scikit-learn", "Pandas"],
  },
];

export const CONTACT = {
 
  phoneNo: "7355540648 ",
  email: "work.srivastava01@gmail.com",
};
