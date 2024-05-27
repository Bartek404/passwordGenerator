export function SettingsCharset({ children, name, settings, setSettings }) {
	return (
		<label htmlFor={name}>
			<input type='checkbox' name={name} id={name} onChange={setSettings} checked={settings} />
			{children}
		</label>
	)
}
