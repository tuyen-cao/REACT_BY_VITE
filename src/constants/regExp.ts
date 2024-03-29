export const EMPTY_STRING = /^(?!\s*$).+/g
export const PHONE_NUMBER = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const EMAIL = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
export const DIGITS_ONLY = /^[0-9]+$/