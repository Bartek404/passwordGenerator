import { useState } from 'react'
import styles from './App.module.css'
import { SettingsCharset } from './components/SettingsCharset/SettingsCharset'
import { SettingsLength } from './components/SettingsLength/SettingsLength'
import { GeneratedPasswordInput } from './components/GeneratedPasswordInput/GeneratedPasswordInput'
import { generatePassword } from './utils/generatePassword'

function App() {
	const [passwordIsShown, setPasswordIsShown] = useState(false)
	const [passwordLength, setPasswordLength] = useState(10)
	const [settingsSymbols, setSettingsSymbols] = useState(false)
	const [settingsNumbers, setSettingsNumbers] = useState(false)
	const [settingsLetters, setSettingsLetters] = useState(false)
	const [password, setPassword] = useState('')

	return (
		<div className={styles.body}>
			<div>
				<h1 className={styles.title}>Wygeneruj silne hasło!</h1>

				<div className={styles.options}>
					<div className={styles.options__col}>
						<SettingsCharset
							name='special__symbols'
							settings={settingsSymbols}
							setSettings={() => setSettingsSymbols(settingsSymbols => !settingsSymbols)}>
							Znaki Specjalne
						</SettingsCharset>

						<SettingsCharset
							name='numbers'
							settings={settingsNumbers}
							setSettings={() => setSettingsNumbers(settingsNumbers => !settingsNumbers)}>
							Numery
						</SettingsCharset>

						<SettingsCharset
							name='large__letters'
							settings={settingsLetters}
							setSettings={() => setSettingsLetters(settingsLetters => !settingsLetters)}>
							Wielkie litery
						</SettingsCharset>
					</div>

					<div className={styles.options__col}>
						<SettingsLength
							passwordLength={passwordLength}
							setSettings={e => setPasswordLength(e.target.value)}></SettingsLength>
					</div>
				</div>
				<button
					className={styles.generate__btn}
					onClick={() =>
						generatePassword(settingsSymbols, settingsNumbers, settingsLetters, passwordLength, setPassword)
					}>
					Generuj
				</button>
			</div>

			<hr />

			<div className={styles.password__box}>
				<GeneratedPasswordInput passwordIsShown={passwordIsShown} password={password} />

				<div className={styles.buttons__box}>
					<button onClick={() => setPasswordIsShown(passwordIsShown => !passwordIsShown)}>Pokaż</button>
					<button onClick={() => navigator.clipboard.writeText(password)}>Skopiuj</button>
				</div>
			</div>
		</div>
	)
}

export default App
