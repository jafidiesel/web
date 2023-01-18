interface IProjectsEvent {
	title: string,
	description: string,
	link: string,
	demo: string,
	img: string,
	keyword: string[]
}

interface IProjects {
	projects: IProjectsEvent[]
}

export const projectsData: IProjects = {
	projects: [
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