module.exports = {
	header: {
		title: "Hi! I'm Jafi",
		subtitle: "I'm a Software Engenieer",
		pictureUrl: "./profile.jpeg"
	},
	socialLinks: [
		/* optional */
		{
			link: "#",
			text: "Resume",
			icon: "external-link-alt"
		},
		{
			link: "https://www.linkedin.com/in/javierbravin/",
			text: "LinkedIn",
			icon: "external-link-alt"
		},
		{
			link: "https://github.com/jafidiesel",
			text: "Github",
			icon: "external-link-alt"
		},
		{
			link: "https://codepen.io/jafibravin/",
			text: "Codepen",
			icon: "external-link-alt"
		}
	],
	tech: {
		/* optional */
		title: "Main Technologies",
		list: [
			'JS',
			'React',
			'Algorand SDK',
			'Blockchain'
		]
	},
	softSkill: {
		/* optional */
		title: "Skills",
		list: [
			'Problem-solving oriented.',
			'Business analysis capacity.',
			'Cooperative work.',
			'Active listener.'
		]
	},
    experience: [
        {
            company: "Rand Lab",
            rol: "Software Engineer",
            time: "May 2020 - Present",
            description: "Development of new blockchain projects using React, Algorand SDK, Flexbox, Bootstrap, API Rest. Taken part at MyAlgo wallet, Asset Manager, MyAlgo Governance among others projects."
        },
        {
            company: "Optiagro",
            rol: "Front-end developer",
            time: "August 2019 - April 2020",
            description: "Development of new functionalities of the Optiagro platform, working with Javascript(ES6), Leaflet, Geojson, Semantic UI, JSDoc and API-REST"
        },
        {
            company: "Freelance",
            rol: "Software Developer Engineer in Test",
            time: "June 2019 - August 2019",
            description: "Test cases automation, manual QA, agile methodologies. Nightwatch.js, JIRA, docker."
        },
        {
            company: "O.S.E.P.",
            rol: "Fullstack Developer",
            time: "April 2007 - June 2019",
            description: "Development of small full stack projects, from data modeling to client-side functionality. Automated and manual testing. Javascript(ES5), Java, Postgresql Selenium, SVN."
        },
        {
            company: "LADEI Lab",
            rol: "R+D Scholar",
            time: "April 2016 - December 2017",
            description: "Development of a desktop application capable of managing the subjects of the Computer Engineering degree using a GODOT Video Game development graphic engine. Godot, git, Kanban."
        },
        {
            company: "DHARMa Lab",
            rol: "R+D Scholar",
            time: "April 2015 - December 2015",
            description: "Maintenance, development, manual QA & documentation of DHARMa’s website content management. Kanban, HTML + CSS."
        }
	],
    courses: [{
        title: "Bootcamp Advanced",
		platform: "Coding bootcamp",
		link: "https://www.plataforma5.la/"
    },{
        title: "What The Flexbox?!",
		platform: "",
		link: "https://wesbos.com/"
    },{
        title: "CSS Grid",
		platform: "",
		link: "https://wesbos.com/"
    },{
        title: "Learn Redux",
		platform: "",
		link: "https://wesbos.com/"
    },{
        title: "React for beginners",
		platform: "",
		link: "https://wesbos.com/"
    },{
        title: "Complete intro to React",
		platform: "by Brian Holt",
		link: "https://frontendmasters.com/courses/complete-react-v4/"
    },{
        title: "Leveling up to ES6",
		platform: "Udemy",
		link: ""
    },{
        title: "Angular: De cero a experto creando aplicaciones",
		platform: "Udemy",
		link: ""
    },{
        title: "Python + Flask",
		platform: "faztech",
		link: ""
    },{
        title: "Javascript Essentials",
		platform: "Udemy",
		link: ""
    }],
    projects:[
        {
            title: "Algorand Blockchain list",
            description: "Front-end code challenge using algorand blockchain explorer. A very simplified explorer that fetch the last 10 transactions and ten blocks every three seconds. Also can inspect a certain block information.",
			link: "https://github.com/jafidiesel/algorandBlockchainList",
			demo: "https://algorand-blockchain-list.netlify.app/",
            img: "",
            keyword: ["React", "Algorand", "Blockchain", "Api Rest", "Bootstrap"]
        },
        {
            title: "p5 code challenge",
            description: "Plataforma5 full-stack code challenge. Baggage travel storage system. More info on link.",
            link: "https://github.com/jafidiesel/p5codechallenge",
			demo: "",
            img: "",
            keyword: ["React", "Bootstrap", "Apirest", "Postgres", "full-stack"]
        },
        {
            title: "AgronoMe - Final Project",
            description: "This Crop Control and Monitoring System is the Final Project of the Information System Engineering Degree, Mendoza Regional University.",
            link: "https://github.com/jafidiesel/proyecto-final-agronome",
			demo: "",
            img: "",
            keyword: ["Angular", "Bootstrap", "Apirest", "Python", "Postgres"]
		},
        {
            title: "Tic Tac Toe - University subject",
            description: "Traditional tic tac toe developed using Vanilla JS & Materialize. Currently deployed on Netlify.",
            link: "https://github.com/jafidiesel/programacion-avanzada-2020/tree/master/frontend/tic-tac-toe-1",
			demo: "https://tic-tac-toe-pa2020.netlify.app/",
            img: "",
            keyword: ["Vanilla JS", "Materialize", "Netlify"]
		},
        {
            title: "Light Sensor Lamp",
            description: "Arduino hobby project to measure the amount of light in the ambiance.",
            link: "https://github.com/jafidiesel/lightsensorlamp",
			demo: "",
            img: "",
            keyword: ["Arduino", "C++"]
		}
    ]
}