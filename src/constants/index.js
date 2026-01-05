const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 9, suffix: "+", label: "Current CPI" },
  { value: 30, suffix: "+", label: "Leet Code Questions" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 99, suffix: "%", label: "Learning Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "ReactJS",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NodeJS",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/mongodb.svg",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "ReactJS",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "NodeJS",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    name: "MongoDB",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },

  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "CycloSell is a cutting-edge full-stack e-commerce platform tailored for the B2B cycle industry. Designed to empower wholesalers and startups, it features a responsive React-based frontend for seamless user interactions and a robust Node.js backend for handling complex inventory management, real-time stock tracking, and secure transactions.",
    imgPath: "/images/project1.png",
    logoPath: "/images/MERN.png",
    title: "CycloSell",
    date: "January 2025 - January 2025",
    features: [
      "A full-stack cycle showcase website for B2B startups.",
      "Used React for frontend development and Node.js for backend services.",
      "Optimized web applications for wholesellers to display their stock efficiently.",
    ],
  },
  {
    review:
      "Airbnd (Airbnb clone) is a comprehensive full-stack web application that replicates the core functionalities of the popular Airbnb platform. Built with React on the frontend and Node.js on the backend, it allows users to search, book, and list properties with ease. The application features a user-friendly interface, secure authentication, and efficient data management to provide a seamless experience for both hosts and guests.",
    imgPath: "/images/project2.png",
    logoPath: "/images/MERN.png",
    title: "Airbnd",
    date: "May-2025",
    features: [
      "Airbnd (Airbnb clone) full stack web application using React and Node.js.",
      "2nd year Practice project to strengthen my full stack development skills.",
      "Similar to airbnb, users can search, book, and list properties.",
    ],
  },
  {
    review:
      "FOREVER (Ecom King) is a dynamic full-stack e-commerce platform designed to revolutionize the online clothing shopping experience. Developed using React for the frontend and Node.js for the backend, FOREVER offers a seamless and intuitive interface for users to browse, select, and purchase clothing items. The platform features robust product management, secure payment processing, and an efficient admin panel for managing products, orders, and user accounts, ensuring a smooth shopping experience for customers and streamlined operations for administrators.",
    imgPath: "/images/project3.png",
    logoPath: "/images/MERN.png",
    title: "FOREVER(Ecom King)",
    date: "August 2025 - Present",
    features: [
      "Developed and maintained the FOREVER (Ecom King) web application using React and NodeJS backend services.",
      "A full stack e-commerce platform designed to provide a seamless clothes shopping experience.",
      "Implemented responsive design principles to ensure optimal user experience across various devices.",
      "Working on Admin panel for managing products, orders, and user accounts efficiently.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Dibyanshu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Dibyanshu was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Dibyanshu was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dibyanshu's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dibyanshu is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Dibyanshu was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Dibyanshu’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Dibyanshu was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/dibyanshulunia25",
    imgPath: "/images/github.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/dibyanshu-lunia",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
