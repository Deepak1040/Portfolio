import React from 'react';
import styles from './ProjectsStyle.module.css';
import viber from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import frestBurger from '../../assets/fresh-burger.png';
import hippster from '../../assets/hipsster.png';
import fitlift from '../../assets/fitlift.png';

function Projects() {
	return (
		<section
			id='projects'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={viber}
					link={'https://github.com/Deepak1040/Aora'}
					h3='Aora'
					p='Wall Paper App'
				/>
				<ProjectCard
					src={frestBurger}
					link={'https://github.com/Deepak1040/Aora'}
					h3='Ryde'
					p='Car Rental App'
				/>
				<ProjectCard
					src={hippster}
					link={'https://github.com/Deepak1040/Aora'}
					h3='Ryde'
					p='Car Rental App'
				/>
				<ProjectCard
					src={fitlift}
					link={'https://github.com/Deepak1040/Aora'}
					h3='Ryde'
					p='Car Rental App'
				/>
			</div>
		</section>
	);
}

export default Projects;
