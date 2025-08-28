export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Urahara Shop - E-commerce Store",
    des: "A modern e-commerce platform, featuring Stripe payments, state management with Zustand, and efficient caching with React Query.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://urahara-shop.vercel.app",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    des: "A feature-rich SaaS analytics dashboard with GraphQL, Framer Motion animations, and Tailwind styling for a sleek UI.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://saas-dashboard.vercel.app",
  },
  {
    id: 3,
    title: "AI-powered App",
    des: "An AI-powered web application leveraging OpenAI API, Prisma for database management, and seamless deployment on Vercel.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-app.vercel.app",
  },
  {
    id: 4,
    title: "Real-time Chat App",
    des: "A real-time chat application with WebSockets, Firebase authentication, and efficient state management using Zustand.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Shubham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shubham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shubham is the ideal partner.",
    name: "Michael Jones",
    title: "Director of Nova Technologies",
  },
  {
    quote:
      "Collaborating with Shubham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shubham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shubham is the ideal partner.",
    name: "Michael Jones",
    title: "Director of Oscorp Technologies",
  },
  {
    quote:
      "Collaborating with Shubham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shubham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shubham is the ideal partner.",
    name: "Michael Jones",
    title: "Director of Omega Beam Technologies",
  },
  {
    quote:
      "Collaborating with Shubham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shubham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shubham is the ideal partner.",
    name: "Michael Jones",
    title: "Director of Livestream Technologies",
  },
  {
    quote:
      "Collaborating with Shubham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shubham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shubham is the ideal partner.",
    name: "Michael Jones",
    title: "Director of Galley-La Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Contributed to the development of a web-based platform using React.js, enhancing interactivity and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Associate Software Developer",
    desc: "Worked on mobile and web applications, assisting in frontend and backend development from scratch to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies, ensuring performance and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shubhamstark007",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "#",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shubhamparteti/",
  },
];
