const numberFormatter = (input) => {
  input += ''
  let regex = /(\d+)(\d{3})/

  while (regex.test(input)) {
    input = input.replace(regex, '$1' + ' ' + '$2')
  }

  return input
}

export default numberFormatter
