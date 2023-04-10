import Header from "./Header/Header";
import Projects from "./Projects";
import Experience from "./Experience";
import Courses from "./Courses";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import { css } from "aphrodite";
import styles from './styles';

const Cv = () => (
	<div className={css(styles.app)}>
		<Header />
		<SocialLinks />
		<Skills />
		<Experience />
		<Courses />
		<Projects />
	</div>
)

export default Cv;