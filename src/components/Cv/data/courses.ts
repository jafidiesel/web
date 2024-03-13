interface ICoursesEvent {
  title: string;
  platform: string;
  link: string | null;
}

interface ICourses {
  courses: ICoursesEvent[];
}

export const coursesData: ICourses = {
  courses: [
    {
      title: "Arquitectura Hexagonal en Frontend",
      platform: "Codely",
      link: "https://codely.com/"
    },
    {
      title: "Bootcamp Advanced",
      platform: "Coding bootcamp",
      link: "https://www.plataforma5.la/"
    },
    {
      title: "What The Flexbox?!",
      platform: "WES BOS",
      link: "https://wesbos.com/"
    },
    {
      title: "CSS Grid",
      platform: "WES BOS",
      link: "https://wesbos.com/"
    },
    {
      title: "Learn Redux",
      platform: "WES BOS",
      link: "https://wesbos.com/"
    },
    {
      title: "React for beginners",
      platform: "WES BOS",
      link: "https://wesbos.com/"
    },
    {
      title: "Complete intro to React",
      platform: "by Brian Holt",
      link: "https://frontendmasters.com/courses/complete-react-v4/"
    },
    {
      title: "Leveling up to ES6",
      platform: "Udemy",
      link: ""
    },
    {
      title: "Angular: De cero a experto creando aplicaciones",
      platform: "Udemy",
      link: null
    },
    {
      title: "Python + Flask",
      platform: "faztech",
      link: null
    },
    {
      title: "Javascript Essentials",
      platform: "Udemy",
      link: null
    }
  ]
};
