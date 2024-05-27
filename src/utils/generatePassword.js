const allowed = {
    Lowers: 'qwertyuiopasdfghjklzxcvbnm',
    Uppers: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    Numbers: '1234567890',
    Symbols: '!@#$%^&*',
}

export function generatePassword(settingsSymbols, settingsNumbers, settingsLetters, passwordLength, setPassword) {
    let charset =
        allowed.Lowers +
        (settingsSymbols && allowed.Symbols) +
        (settingsNumbers && allowed.Numbers) +
        (settingsLetters && allowed.Uppers)
    let password = ''

    for (let i = 0, n = charset.length; i < passwordLength; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n))
    }
    return setPassword(password)
}