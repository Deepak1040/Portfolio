import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
	const { theme } = useTheme();
	const checkMarkIcon =
		theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

	return (
		<section
			id='skills'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Skills</h1>
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill={'Html'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'Css'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'JavaScript'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'TypeScript'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'Node'}
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill={'React'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'React-Native'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'Vue'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'Tailwind CSS'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'Bootstrap'}
				/>
			</div>
			<hr />
			<div className={styles.skillList}>
				<SkillList
					src={checkMarkIcon}
					skill={'SQL'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'MongoDB'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'PostgresSQL'}
				/>
				<SkillList
					src={checkMarkIcon}
					skill={'Git'}
				/>
			</div>
			<hr />
		</section>
	);
}

export default Skills;
