import styles from '../SettingsLength/SettingsLength.module.css'

export function SettingsLength({ passwordLength, setSettings }) {
	return (
		<label htmlFor='password__length'>
			Długość hasła:
			<input
				className={styles.input__length}
				type='number'
				name='Password length'
				id='password__length'
				autoComplete='off'
				value={passwordLength}
				onChange={setSettings}
			/>
		</label>
	)
}
