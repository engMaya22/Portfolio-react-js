import project1 from "../assets/projects/cube.png";
import project2 from "../assets/projects/giki.jpg";
import project3 from "../assets/projects/realEstate.jpg";
import project4 from "../assets/projects/portfolio.png";
import project5 from "../assets/projects/leanation.png";
import project6 from "../assets/projects/sso.png";
import project7 from "../assets/projects/assessment.png";


export const HERO_CONTENT = `I am a passionate Full Stack Developer with over 3 years of hands-on experience building robust, scalable, and high-performance web applications. I specialize in crafting seamless user experiences using modern front-end technologies like React and Livewire, combined with powerful back-end solutions.

My back-end expertise includes Laravel, Node.js, and working with databases such as MySQL, PostgreSQL, and MongoDB. I enjoy designing efficient architectures, building APIs, and optimizing application performance to handle real-world demands.

I am driven by a commitment to continuous learning and innovation, always exploring new technologies to deliver impactful solutions. My goal is to create applications that not only meet business needs but also provide exceptional user experiences and long-term value.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer with over 3 years of professional experience building efficient, scalable, and user-focused web applications. I specialize in modern front-end technologies like React and Livewire, combined with strong back-end expertise in Laravel and Node.js.

I have hands-on experience working with databases such as MySQL, PostgreSQL, and MongoDB, and I enjoy designing clean architectures and building reliable APIs that power seamless user experiences.

My journey into development started with a curiosity about how things work, which has grown into a continuous drive to learn, adapt, and improve. I thrive in collaborative environments, enjoy tackling complex problems, and take pride in delivering high-quality, maintainable solutions.

Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active.
`
export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Full stack developer",
    company: "ILLAFTrain Ltd, UAE",
    description: `Designed and developed dynamic administrative dashboards using FilamentPHP, focusing on building intuitive and user-friendly interfaces with custom CSS. Implemented interactive front-end components and scripts to enhance usability and streamline data workflows.

Built export functionalities using Puppeteer to generate dynamic reports and documents, and developed data visualization features using charting libraries to present analytical insights effectively. Designed and managed assessment and reporting systems to evaluate user performance and deliver actionable results.

Worked extensively with Laravel and Livewire to develop scalable application features, integrated APIs, and ensured seamless communication between front-end and back-end systems. Collaborated closely with cross-functional teams to deliver high-quality, maintainable software solutions.
`,
    technologies: [  "Laravel",
  "FilamentPHP",
  "Livewire",
  "CSS",
  "JavaScript",
  "Puppeteer",
  "Chart.js",
  "MYSQL"]

  },
  {
    year: "2023 - 2024",
    role: "Full stack developer",
    company: "Webased , Lebanon",
    description: "Designed and implemented dynamic dashboards with FilamentPHP for enhanced data visualization and management. Developed and tested applications using Livewire and Laravel Filament. Created and integrated APIs, generated analytical statistics, and implemented e-commerce and payment technologies. Collaborated with the team to ensure high-quality software delivery.",
    technologies: ["Laravel", "FilamentPHP", "Livewire", "Postman", "APIs", "JavaScript"]
  },
  
  {
    year: "2021 - 2023",
    role: "Back-End developer",
    company: "Lucidly, UAE",
    description: "Developed and maintained administrative dashboards using Laravel Nova and FilamentPHP. Designed databases with Lucidchart, implemented RESTful APIs, and documented with Swagger. Created analytics dashboards with JS Chart and integrated real-time communication using Pusher and Amazon Chime. Collaborated with front-end teams to enhance UI and ensure high-quality deliverables through thorough debugging and activity logging.",
    technologies: ["Laravel", "FilamentPHP", "Nova", "Lucidchart", "Swagger", "Postman", "Pusher", "Amazon Chime", "JavaScript", "JS Chart"]
  }
];

export const PROJECTS = [
    {
    title: "Lean Nation Diet Program Platform",
    image: project5,
    description: `Built a web platform for Lean Nation with Laravel Livewire and FilamentPHP, featuring user-friendly interfaces for managing consultations and content. Enabled users to explore the Protifast diet program, book consultations, and receive personalized guidance through a seamless experience.`,
   technologies: ["Laravel", "Livewire", "FilamentPHP", "MySQL"],
   link:"https://www.leanation.com/"
   }, 
    {
    title: "Temujin Assessment System",
    image: project7,
    description: `Developed an organizational assessment platform using FilamentPHP, building and customizing dynamic assessment workflows and user-friendly interfaces. Implemented automated reporting with Puppeteer and PDF generation with mPDF to deliver detailed evaluation results efficiently.`,
    technologies: ["Laravel", "FilamentPHP", "Puppeteer", "mPDF", "JavaScript", "CSS"],
    link:"https://app.temujin.world/"
    },
    {
    link:"https://portfolio.webased.net",
    title: "Webased Portfolio Website",
    image: project4,
    description:
    "Designed and developed a dynamic portfolio website to showcase company services effectively. Leveraged modern frameworks for responsive design and seamless user interaction.",
    technologies: ["HTML", "Tailwind", "Livewire", "Filament", "mySQL"],
  },
  {
    title: "SSO Website",
    image: project6,
    description:
    "Developed a secure Single Sign-On (SSO) platform to streamline user authentication across multiple services. Integrated Laravel Nova for efficient administration and PostgreSQL for robust data management.",
    technologies: [ "Laravel", "PostgreSQL",  "Nova"],
   
  },
  {
    title: "Cube26 Website",
    image: project1,
    description:
      "Developed a robust course management platform with a dynamic dashboard using Laravel Nova. The dashboard features interactive KPIs to track platform performance and insights effectively.",
    technologies: ["Laravel", "Nova", "MySQL"],
  },
  {
    title: "Giki Website",
    image: project2,
    description:
    "Built a seamless conversations and meetings platform enabling real-time communication and collaboration. Integrated advanced messaging and video conferencing features powered by Pusher and Amazon Chime.",
    technologies: ['Laravel', 'MySQL', 'Pusher' , 'Chime'],
  },
  // {
  //   title: "Drjules Website",
  //   image: project3,
  //   description:
  //     "A Content management Website designed specifically for doctors , allows them to easily manage and update their blogs and services .",
  //   technologies: ["HTML", "Tailwind", "Js", "Bootstrap", 'Filament'],
  // },
 
  {
    title: "Full Stack Real Estate Platform",
    link:"https://quickstaty.vercel.app",
    image: project3,
    description: "Developed a full-stack real estate platform using Node.js for the backend and React.js with Tailwind CSS for the frontend. Built responsive and user-friendly interfaces to showcase properties and services, while implementing scalable APIs and efficient data handling to support dynamic content and seamless user interactions.",
    
    technologies: ["Node.js", "React.js", "Tailwind CSS"]
  },
  {
    title: "Totim Website",
    image: project4,
    description:
    "Developed a presentation website for a hotel, showcasing its services, amenities, and offerings. Designed to provide a seamless and visually engaging experience for visitors.",
    technologies: [ "Laravel",  "Nova", "mySQL"],
  },

 
  // {

  //   title: "Burger Website",
  //   image: project4,
  //   description:
  //     "A Dynamic single-page application to showcase an enticing array of burgers and drinks. Employed responsive design principles for seamless viewing on various devices, ensuring an immersive user experience",
  //   technologies: [ "HTML",  "CSS", "JS"],
  // },

];

export const CONTACT = {
  address: "Selangor , Malaysia",
  phoneNo: "+601111442170 ",
  email: "eng.maya.esmaeel1@gmail.com",
};

//