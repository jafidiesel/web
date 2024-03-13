interface IExperienceEvent {
  company: string;
  rol: string;
  time: string;
  descriptions: string[];
}

interface IExperiences {
  experiences: IExperienceEvent[];
}

export const experiencesData: IExperiences = {
  experiences: [
    {
      company: "Rand Labs",
      rol: "Software Engineer",
      time: "May 2020 - Jul 2023",
      descriptions: [
        "Rand Labs is a blockchain development lab specialized in Algorand technology.",
        "Development of new products on the Algorand blockchain. Taken part at MyAlgo wallet, Asset Manager, MyAlgo Governance, Algoexplorer blockchain explorer among others projects.",
        "React, Algorand blockchain, Algorand SDK, SCSS, Bootstrap, Aphrodite CSS, Typescript, API Rest, Unit tests, NextJS."
      ]
    },
    {
      company: "Optiagro",
      rol: "Front-end developer",
      time: "August 2019 - April 2020",
      descriptions: [
        "Precision agriculture - Increase your efficiency, reduce your costs and enhance your performance in the field with our technology.",
        "Development of new functionalities of the Optiagro platform, working with Javascript(ES6), Leaflet, Geojson, Semantic UI, JSDoc and API-REST."
      ]
    },
    {
      company: "Freelance",
      rol: "Software Developer Engineer in Test",
      time: "June 2019 - August 2019",
      descriptions: [
        "Test cases automation, manual QA, agile methodologies. Nightwatch.js, JIRA, docker."
      ]
    },
    {
      company: "O.S.E.P.",
      rol: "Fullstack Developer",
      time: "April 2007 - June 2019",
      descriptions: [
        "Healthcare service.",
        "Development of small full stack projects, from data modeling to client-side functionality.",
        "Automated and manual testing. Javascript(ES5), Java, Postgresql Selenium, SVN."
      ]
    },
    {
      company: "LADEI Lab",
      rol: "R+D Scholar",
      time: "April 2016 - December 2017",
      descriptions: [
        "Development of a desktop application capable of managing the subjects of the Computer Engineering degree using a GODOT Video Game development graphic engine. Godot, git, Kanban."
      ]
    },
    {
      company: "DHARMa Lab",
      rol: "R+D Scholar",
      time: "April 2015 - December 2015",
      descriptions: [
        "Maintenance, development, manual QA & documentation of DHARMa’s website content management. Kanban, HTML + CSS."
      ]
    }
  ]
};
