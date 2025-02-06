import styles from './ContactStyles.module.css';

function Contact() {
	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append('access_key', '38e57b4c-e2cc-4cae-ab4f-f076d7fbc31a');

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: json,
		}).then((res) => res.json());

		if (res.success) {
			alert(res.message);
		}
	};

	return (
		<section
			id='contact'
			className={styles.container}
		>
			<h1 className='sectionTitle'>Contact</h1>

			<form onSubmit={onSubmit}>
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
					value='Submit'
				/>
			</form>
		</section>
	);
}

export default Contact;
