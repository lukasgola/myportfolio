import { code, app, design, pro1_1, pro2_1, pro1, linkedin, github, calculus, portfolio_old  } from "../assets";

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
    img: pro2_1,
    type: 'apps',
    link: 'https://github.com/lukasgola/bamber-baits'
  },
  {
    id: 2,
    title: 'Pizza App',
    img: pro1_1,
    type: 'apps',
    link: 'https://github.com/lukasgola/pizza-app'
  },
  {
    id: 3,
    title: 'Calculus',
    img: calculus,
    type: 'web',
    link: 'https://github.com/lukasgola/calculus-website'
  },
  {
    id: 4,
    title: 'Portfolio',
    img: portfolio_old,
    type: 'web',
    link: 'https://github.com/lukasgola/iamlukasz'
  },
  {
    id: 5,
    title: 'Meeting App',
    img: pro1,
    type: 'apps',
    link: 'https://github.com/lukasgola/meeting-app'
  },
]
