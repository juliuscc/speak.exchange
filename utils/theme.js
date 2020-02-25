const fontNames = {
  title: 'Raleway',
  text: 'Roboto'
}

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    focusBackground: '#EDEDED',
    border: '#CCCCCC',
    text: '#3C3C3C',
    primary: '#05B8E6',
    primaryMuted: '#86C6DE',
    primaryInactive: 'rgba(5, 184, 230, 0.5)',
    primaryMutedInactive: 'rgba(134, 198, 222, 0.5)',
    selection: '#86C6DE'
  },
  fonts: {
    title: `'${fontNames.title}', '${fontNames.text}', sans-serif`,
    text: `'${fontNames.text}', sans-serif`
  }
}

export { fontNames }

export default theme
