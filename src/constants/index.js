import { code, app, design, pro1_1, pro2_1, linkedin, github, calculus  } from "../assets";

export const navLinks = [
  {
    id: "portfolio",
    title: "Portfolio",
  },
];

export const links = [
  {
    id: "linkedin",
    icon: linkedin,
    link: 'https://www.linkedin.com/in/lukasz-gola/'
  },
  {
    id: 'github',
    icon: github,
    link: 'https://github.com/lukasgola'
  }
]

export const skills = [
  {
    id: "skill-1",
    icon: code,
    title: "HTML & CSS",
    content:
      "Designing various sites was my passion in high school",
  },
  {
    id: "skill-2",
    icon: app,
    title: "C++",
    content:
      "I learned it in high school and now I'm constantly improving in college.",
  },
  {
    id: "skill-3",
    icon: design,
    title: "React Native",
    content:
      "I started learning it myself and now I know that is what I want to do.",
  },
];

export const category = [
  {
    id: 'cat-1',
    title: 'ALL',
    type: 'all'
  },
  {
    id: 'cat-2',
    title: 'APPS',
    type: 'apps'
  },
  {
    id: 'cat-3',
    title: 'WEBSITES',
    type: 'web'
  },
]

export const projects = [
  {
    id: 1,
    title: 'Bamber Baits',
    img: pro1_1,
    type: 'apps'
  },
  {
    id: 2,
    title: 'Pizza App',
    img: pro2_1,
    type: 'apps'
  },
  {
    id: 3,
    title: 'Calculus',
    img: calculus,
    type: 'web'
  }
]
