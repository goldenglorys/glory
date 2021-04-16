/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Olusola Glory",
  title: "Hi all, I'm Glory",
  subTitle: emoji(
    "A Software and Machine Learning Engineer 🚀 combining experience to building applications usings tech like Python, Javascript and other tools both at the client side and server side."
    // 'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink: "https://goldenglorys.github.io/me",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/goldenglorys",
  linkedin: "https://www.linkedin.com/in/olusola-glory/",
  gmail: "olusolagloryolamide@gmail.com",
  // gitlab: 'https://gitlab.com/goldenglorys',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  medium: "https://medium.com/@zenithsilvarex",
  // stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  twitter: "https://twitter.com/zenithsilvarex",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "MACHINE LEARNING, DATA SCIENCE, SOFTWARE ENGINEERING, RESEARCH & DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Build secure server side API that powers the operational flow of a GUI application"
    ),
    emoji(
      "⚡ Develop efficient web and mobile applications in covergence with ML capailities"
    ),
    emoji(
      "⚡ A systems engineer that analyze problems and solve it by engineering solution from a combination of existing components or by inventing entirely new one. "
    ),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / GCP"),
    emoji(
      "⚡ Quantum Computing, IoT, Blockchain Programming Obessed Individual"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: 'sass',
    //   fontAwesomeClassname: 'fab fa-sass',
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fa fa-database ",
    },
    {
      skillName: "Bootstarp",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel",
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
    {
      skillName: "Linux Boxes",
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fa fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "Blockchain Programming",
      fontAwesomeClassname: "fab fa-btc",
    },
    // {
    //   skillName: 'nodejs',
    //   fontAwesomeClassname: 'fab fa-node',
    // },
    // {
    //   skillName: 'swift',
    //   fontAwesomeClassname: 'fab fa-swift',
    // },
    // {
    //   skillName: 'npm',
    //   fontAwesomeClassname: 'fab fa-npm',
    // },
    // {
    //   skillName: 'sql-database',
    //   fontAwesomeClassname: 'fas fa-database',
    // },
    // {
    //   skillName: 'aws',
    //   fontAwesomeClassname: 'fab fa-aws',
    // },
    // {
    //   skillName: 'python',
    //   fontAwesomeClassname: 'fab fa-python',
    // },
    // {
    //   skillName: 'docker',
    //   fontAwesomeClassname: 'fab fa-docker',
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SQI College of ICT",
      link: "http://edu.sqi.ng",
      logo: require("./assets/images/sqi2.webp"),
      subHeader: "Diploma inSoftware Engineering",
      duration: "December 2018 - Present",
      desc:
        "The National Innovation Diploma programme provides access to Technical and Vocational education plus professional skillset in ICT",
      descBullets: [
        "Uses knowledge of engineering principles and programming languages to build software products, develop computer games, and run network control systems.",
        " At SQI, we are typically tasked with thinking about and planning the structure and interactions of a software at a high level.",
      ],
    },
    {
      schoolName: "Open Source Society University",
      link: "https://github.com/ossu/",
      logo: require("./assets/images/ossu.png"),
      subHeader: "Computer Science | Data Science",
      duration: "January 2021 - December 2021",
      desc: "Path to a free self-taught education in Computer Science! ",
      descBullets: [
        "The OSSU curriculum is a complete education in computer science using online materials.",
        "It is designed according to the degree requirements of undergraduate computer science majors, minus general education (non-CS) requirements",
        "The courses themselves are among the very best in the world, often coming from Harvard, Princeton, MIT, etc.",
      ],
    },
    {
      schoolName: "University of Helsinki",
      link: "https://fullstackopen.com/",
      logo: require("./assets/images/fullstackopen.png"),
      subHeader: "Dept. of Computer Science Fullstack Open Course",
      duration: "2021",
      desc:
        "This course serves as an introduction to modern web application development with JavaScript. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. The course also contains a section on GraphQL, a modern alternative to REST APIs.",
      descBullets: [],
    },
    {
      schoolName: "Zuri Academy",
      link: "https://zuri.team",
      logo: require("./assets/images/zuri.png"),
      subHeader: "Zri Training Python Track",
      duration: "2021",
      desc:
        "Learn the practical approach to programming using Python in several projects base learning streak",
      descBullets: [],
    },
    {
      schoolName: "Zero to Mastery Academy",
      link: "https://zerotomastery.io/",
      logo: require("./assets/images/zerotomastery.png"),
      subHeader: "Zero to Mastery Python Development",
      duration: "2021",
      desc: "",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Engineering", //Insert stack or technology you have experience in
      progressPercentage: "99%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "55%",
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "50%",
    },
    {
      Stack: "Blockchain Programming",
      progressPercentage: "40%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Data Scientist",
      company: "Dev Career",
      companylogo: require("./assets/images/devcareerLogo.jpg"),
      date: "Aug 2020 – Dec 2020",
      desc:
        "DevCareer is a Non-Profit organization that's focused on supporting upcoming developers with resources to excel into World Class.",
      descBullets: [
        "Get introduced to Data Science and Machine Learning field and their various sub-branches.",
        "Carried out numerous exploratory data analysis techniques.",
        "Cleaned and optimized datasets for making predictive and classification machine learning model technologies.",
        "Built a stock market price predictive machine learning model and deploying it on the web.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Digit Tech",
      companylogo: require("./assets/images/digitLogo.jpg"),
      date: "Sep 2019 – Aug 2020",
      desc:
        "DigiT is one of the latest Digital Technology Solutions Company providing digital solutions to individuals, organisations, and businesses.",
      descBullets: [
        "Developed, maintained & optimized new and existing frontend and backend features.",
        "Built, implemented, and maintained many back-end services including the flagship Check Management System Software’s Series",
      ],
    },
    {
      role: "Software Engineer",
      company: "Ouches Tech",
      companylogo: require("./assets/images/ouchesLogo.jpg"),
      date: "Jan 2020 – Jun 2020",
      desc:
        "Ouches Technology is an Information Technology Solutions Company that offers software solutions leveraging Ai, Robotics and Blockchain Technologies",
      descBullets: [
        "Built an AI and Robotics online course platform REST API.",
        "Learnd and made mini implementation of a smart contract blockchain backed platform.",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "goldenglorys", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ICSI | Certified Network Security Specialist",
      subtitle:
        "Learned the holistic view of modern network security including operating system hardening, firewalls, intrusion-detection systems, VPNs and Encryption. Physical Security, Standards, System Security and Security Policies with the institute.",
      image: require("./assets/images/CNSS_Badge.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.icsi.co.uk/certificates/vwktuyc7ur",
        },
      ],
    },
    {
      title: "Cognitive Class.ai Introduction to Data Science Course",
      subtitle:
        "Learned from the real practitioners telling real stories about what it means to work in data science. ",
      image: require("./assets/images/ds101.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://courses.cognitiveclass.ai/certificates/b299b19ef17c411eb6a401b1bb90a613",
        },
      ],
    },
    {
      title: "Credly Acclaim Badges",
      subtitle: "",
      image: require("./assets/images/acclaim.png"),
      footerLink: [
        {
          name: "Badges",
          url: "https://www.youracclaim.com/users/olusola-glory/badges",
        },
      ],
    },
    // {
    //   title: 'Google Code-In Finalist',
    //   subtitle:
    //     'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
    //   image: require('./assets/images/codeInLogo.webp'),
    //   footerLink: [
    //     {
    //       name: 'Certification',
    //       url:
    //         'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
    //     },
    //     {
    //       name: 'Award Letter',
    //       url:
    //         'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
    //     },
    //     {
    //       name: 'Google Code-in Blog',
    //       url:
    //         'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
    //     },
    //   ],
    // },
    // {
    //   title: 'Google Assistant Action',
    //   subtitle:
    //     'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
    //   image: require('./assets/images/googleAssistantLogo.webp'),
    //   footerLink: [
    //     {
    //       name: 'View Google Assistant Action',
    //       url:
    //         'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
    //     },
    //   ],
    // },

    // {
    //   title: 'PWA Web App Developer',
    //   subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
    //   image: require('./assets/images/pwaLogo.webp'),
    //   footerLink: [
    //     { name: 'Certification', url: '' },
    //     {
    //       name: 'Final Project',
    //       url: 'https://pakistan-olx-1.firebaseapp.com/',
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: null,
  emailAddress: "olusolagloryolamide@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "zenithsilvarex", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
