interface ICoursesEvent {
	title: string,
	platform: string,
	link: string,
}

interface ICourses {
	courses: ICoursesEvent[]
}

export const coursesData: ICourses = {
	courses: [{
		title: "Bootcamp Advanced",
		platform: "Coding bootcamp",
		link: "https://www.plataforma5.la/"
	}, {
		title: "What The Flexbox?!",
		platform: "",
		link: "https://wesbos.com/"
	}, {
		title: "CSS Grid",
		platform: "",
		link: "https://wesbos.com/"
	}, {
		title: "Learn Redux",
		platform: "",
		link: "https://wesbos.com/"
	}, {
		title: "React for beginners",
		platform: "",
		link: "https://wesbos.com/"
	}, {
		title: "Complete intro to React",
		platform: "by Brian Holt",
		link: "https://frontendmasters.com/courses/complete-react-v4/"
	}, {
		title: "Leveling up to ES6",
		platform: "Udemy",
		link: ""
	}, {
		title: "Angular: De cero a experto creando aplicaciones",
		platform: "Udemy",
		link: ""
	}, {
		title: "Python + Flask",
		platform: "faztech",
		link: ""
	}, {
		title: "Javascript Essentials",
		platform: "Udemy",
		link: ""
	}],
}