import styles from './ContactStyles.module.css';

function Contact() {
	return (
		<section
			id='contact'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Contact</h1>

			<form action=''>
				<div className='formGroup'>
					<label
						htmlFor='name'
						hidden
					>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
						required
					></input>
				</div>

				<div className='formGroup'>
					<label
						htmlFor='name'
						hidden
					>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						required
					></input>
				</div>

				<div className='formGroup'>
					<label
						htmlFor='name'
						hidden
					>
						Message
					</label>
					<textarea
						type='text'
						name='message'
						id='message'
						placeholder='Message'
						required
					></textarea>
				</div>

				<input
					className='hover btn'
					type='submit'
                    value="Submit"
				/>
			</form>
		</section>
	);
}

export default Contact;
