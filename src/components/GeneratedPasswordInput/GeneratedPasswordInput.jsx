import styles from '../GeneratedPasswordInput/GeneratedPasswordInput.module.css'
export function GeneratedPasswordInput({ passwordIsShown, password }) {
	return (
		<>
			<label className={styles.label__password} htmlFor='password'>
				Twoje nowe hasło to:
			</label>
			<input
				className={styles.input__password}
				type={passwordIsShown ? 'text' : 'password'}
				name='password'
				id='password'
				inputMode='none'
				autoComplete='off'
				value={password}
				readOnly={true}
			/>
		</>
	)
}
