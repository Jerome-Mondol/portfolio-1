export const me = {
  name: "Jerome Mondol",
  profileImage: "pfp.png",
  class: 10,
  Age: 15,
  location: "Khulna, Bangladesh",
  role: "MERN stack Developer",
  currentlyLearning: "Next.js",
  bio: "Hey, I'm Jerome Mondol, a student building web experiences with React, JavaScript, and modern web tech.",
  social: {
    github: "https://github.com/Jerome-Mondol",
    linkedin: "https://www.linkedin.com/in/jeromemondol"
  }
}

export const experiences = [
  {
    companyName: "Labmentix",
    type: "Internship",
    domain: "Web Development",
    duration: "6 months",
    timeline: "19/8/2025 to N/A",
    description: "Working on building full-stack web applications, handling both frontend and backend development.",
    status: "Ongoing",
    location: "Bengaluru, India"
  },
]


export const tech = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        color: "from-yellow-400 to-yellow-500"
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        color: "from-cyan-400 to-blue-500"
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        color: "from-teal-400 to-cyan-500"
      },
      {
        name: "shadcn/ui",
        icon: "https://raw.githubusercontent.com/shadcn-ui/ui/refs/heads/main/apps/v4/public/android-chrome-512x512.png",
        color: "from-purple-400 to-purple-600"
      },
      {
        name: "daisyUI",
        icon: "https://img.daisyui.com/images/daisyui/mark-static.svg",
        color: "from-pink-400 to-pink-600"
      },
    ]
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        color: "from-green-500 to-green-600"
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        color: "from-gray-400 to-gray-600"
      },
      {
        name: "JWT",
        icon: "https://jwt.io/img/pic_logo.svg",
        color: "from-purple-500 to-pink-500"
      }
    ]
  },
  {
    category: "Databases & Platforms",
    items: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        color: "from-green-500 to-green-700"
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
        color: "from-yellow-500 to-orange-500"
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
        color: "from-green-400 to-green-600"
      }
    ]
  },
  {
    category: "Development Tools",
    items: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        color: "from-blue-500 to-blue-600"
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        color: "from-orange-500 to-red-500"
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        color: "from-gray-700 to-gray-900"
      },
      {
        name: "Vite",
        icon: "https://vitejs.dev/logo.svg",
        color: "from-purple-500 to-yellow-500"
      }
    ]
  }
];


export const demoProjects = [
  {
    name: "Paw Mart",
    description: "A place where pet lovers can connect.",
    techStack: ["React", "TailwindCSS", "Node", "Express", "MongoDB"],
    status: "Completed",
    image: "https://i.ibb.co.com/F4Wznn4L/Screenshot-from-2025-12-04-20-24-33.png",
    link: "https://pawmart-84610.web.app/",
    githubLink: "https://github.com/Jerome-Mondol/pawmart-client",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Todo App",
    description: "A CRUD Todo application with local storage support.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    status: "Completed",
    image: "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://yourtodoapp.com",
    githubLink: "https://github.com/Jerome-Mondol",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Weather App",
    description: "Shows real-time weather info using OpenWeather API.",
    techStack: ["React", "Axios", "TailwindCSS"],
    status: "In Progress",
    image: "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    link: "",
    githubLink: "https://github.com/Jerome-Mondol",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "E-commerce Mockup",
    description: "Frontend UI mockup for an e-commerce site.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    status: "Completed",
    image: "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://myecommercemockup.com",
    githubLink: "https://github.com/Jerome-Mondol",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },

];
