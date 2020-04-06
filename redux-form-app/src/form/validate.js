export const required = value => value ? undefined : 'Required'
export const minLength = min => value => value && value.length < min ? "Must be ${min} characters or more": undefined
export const age = value => value && value > 100 ? 'You might be too old for this' : undefined