import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Proficient in technologies like React.js, Java, Spring, MySQL, and Firebase, I bring a hands-on approach to problem-solving. My goal is to leverage my expertise to deliver exceptional user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With a solid foundation in technologies like React.js, Java, MySQL, Spring Framework, and Firebase, I continuously strive to learn and adapt to new challenges. My journey in web development is driven by curiosity and a commitment to delivering high-quality solutions. I thrive in collaborative environments and enjoy solving complex problems to achieve impactful results.`;

export const EXPERIENCES = [
  {
    year: "January 2025 - Present",
    role: "App Engineer STS",
    company: "Hitachi Digital Services, Banglore, India ",
    description: ` Played a key role in the development of the MocX platform, focused on providing mock interview
experiences.
• Developed and maintained the front-end of the platform using React, ensuring a responsive and
user-friendly interface.
• Collaborated closely with backend teams using Servlets and Spring to integrate dynamic features
and enhance platform performance.`,
    technologies: ["Java", "Spring Framework", "React.js", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone",
    image: project1, 
    description:
"Built a Netflix clone app using React.js for the front-end and Tailwind CSS for responsive design."
+"Integrated Firebase for real-time database management and user authentication. The app allows users"
+"to browse movies, view previews, and search content seamlessly. Employed React Hooks for smooth"
+"state management and interactive user experience.",  
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://netflix-app-clone-three.vercel.app/", 

  },
  {
    title: "Smart Cart Using Store API",
    image: project2, 
    description:
    "This is an e-commerce website offering a dynamic and user-friendly shopping experience. Key features"
    +"in this project includes “Add to Cart” and “Add to Wishlist” functionalities, ensuring easy prod-"
    +"uct management for users, with data persistence through localStorage. Built with HTML, CSS, and"
    +"JavaScript, this app delivers a dynamic, responsive and interactive shopping experience. ",
      technologies: ["HTML", "CSS", "JavaScript"],
      link:"https://smart-cart-using-store-api.vercel.app/",
  },
  {
    title: "Medical Chatbot",
    image: project3,
    description:"Developed a medical chatbot using HTML, CSS, and JavaScript that provides suggestions for various"
    +"health-related queries. The chatbot is designed to in-teract with users and assist them in determining"
    +"their symptoms and providing advice on possible diagnoses or treatment options.",
  technologies: ["HTML", "CSS", "JavaScript"],
  link:"https://tarunkumarreddyk.github.io/MedicalChatBot/",

  },
  {
    title: "Raspberry Pi Based Multi-Language Reader for Blind",
    image: project4, 
    description:"This project, based on a Raspberry Pi, manages camera, "
    +"speaker and LCD peripherals, employing Optical Character Recognition "
    +" It captures well-illuminated English text, ideally in Times New Roman"+
    " font and a font size of at least 24. Upon successful recognition, the system "
    +"announces the content through the speaker. Moreover, it’s adaptable to "
    +"languages like Telugu and Hindi,by using the Text-to- Speech conversion"
    +" empowering visually impaired individuals to access printed material autonomously.",  
      technologies: ["Python", "Raspberry Pi", "OCR"],
      // link:"https://smart-cart-using-store-api.vercel.app/",

  },
];

export const CONTACT = {
  address: "4 th Main, NGR Layout, Roopena Agrahara , Banglore , Karnataka 560068",
  phoneNo: "8008994060",
  email: "k.tarunkumarreddy12@gmail.com",
};

export const EDUCATION = [
  {
    year: "2020 - 2024",
    degree: "B.Tech in Electronics and Communications Engineering",
    institution: "Srinivasa Ramanujan Institute of Technology",
    percentage: "77.77%",
  },
  {
    year: "2018 - 2020",
    degree: "Intermediate",
    institution: "Sri Chaitanya Junior College, Kurnool",
    percentage: "90%",
  },
  {
    year: "2017 - 2018",
    degree: "Secondary Education",
    institution: "Trinity English Medium High School, Pamidi",
    percentage: "95%",
  },
];

// export const STRENGTHS = [
//   "Self-motivated",
//   "Team Player",
//   "Multi-Tasking",
//   "Creative Thinking",
// ];

// export const CERTIFICATIONS = [
//   "Certified in Java Full Stack Development - Wipro TalentNext",
//   "Front-End Development Certification - Udemy",
// ];

// export const TOOLS_TECHNOLOGIES = {
//   programmingLanguages: ["Java", "JavaScript"],
//   webDevelopment: ["HTML", "CSS", "JavaScript", "React.js"],
//   frameworks: ["Spring Framework"],
//   versionControl: ["Git", "GitHub"],
//   tools: ["VS Code", "PyCharm", "Eclipse"],
// };
