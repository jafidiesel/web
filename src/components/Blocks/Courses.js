import React from "react";
import CardSection from "../Card/Card";
import { css } from "aphrodite";
import styles from './styles';

const Courses = (props) => {
	const { courses } = props;
	if (!courses.length) return <></>;
	return (
		<div>
			<CardSection>
				<h2 className={css(styles.title)}>Courses</h2>
				{courses.map((course, index) => {
					return (
						<h6 key={'course' + index}><span className={css(styles.subTitleR)}>{course.title + ": "}</span><small>{course.platform}</small></h6>
					)
				})}
			</CardSection>
		</div>
	);
}

export default Courses;