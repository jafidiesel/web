interface IExperienceEvent {
  company: string;
  rol: string;
  time: string;
  description: string;
}

interface IExperiences {
  experiences: IExperienceEvent[];
}

export const experiencesData: IExperiences = {
  experiences: [
    {
      company: "Rand Lab",
      rol: "Software Engineer",
      time: "May 2020 - Present",
      description:
        "Development of new blockchain projects using React, Algorand SDK, Flexbox, Bootstrap, API Rest. Taken part at MyAlgo wallet, Asset Manager, MyAlgo Governance among others projects."
    },
    {
      company: "Optiagro",
      rol: "Front-end developer",
      time: "August 2019 - April 2020",
      description:
        "Development of new functionalities of the Optiagro platform, working with Javascript(ES6), Leaflet, Geojson, Semantic UI, JSDoc and API-REST"
    },
    {
      company: "Freelance",
      rol: "Software Developer Engineer in Test",
      time: "June 2019 - August 2019",
      description:
        "Test cases automation, manual QA, agile methodologies. Nightwatch.js, JIRA, docker."
    },
    {
      company: "O.S.E.P.",
      rol: "Fullstack Developer",
      time: "April 2007 - June 2019",
      description:
        "Development of small full stack projects, from data modeling to client-side functionality. Automated and manual testing. Javascript(ES5), Java, Postgresql Selenium, SVN."
    },
    {
      company: "LADEI Lab",
      rol: "R+D Scholar",
      time: "April 2016 - December 2017",
      description:
        "Development of a desktop application capable of managing the subjects of the Computer Engineering degree using a GODOT Video Game development graphic engine. Godot, git, Kanban."
    },
    {
      company: "DHARMa Lab",
      rol: "R+D Scholar",
      time: "April 2015 - December 2015",
      description:
        "Maintenance, development, manual QA & documentation of DHARMa’s website content management. Kanban, HTML + CSS."
    }
  ]
};
