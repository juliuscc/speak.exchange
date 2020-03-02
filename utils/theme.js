const fontNames = {
  title: 'Catamaran',
  text: 'Open Sans'
}

const theme = {
  colors: {
    white: '#fff',
    black: '#3C3C3C',
    focusBackground: '#EDEDED',
    border: '#CCCCCC',
    primary: '#05B8E6',
    primaryMuted: '#86C6DE',
    primaryInactive: 'rgba(5, 184, 230, 0.5)',
    primaryMutedInactive: 'rgba(134, 198, 222, 0.5)',
    primaryHighlighted: '#0AA0DE',
    selection: '#86C6DE'
  },
  fonts: {
    title: `'${fontNames.title}', '${fontNames.text}', sans-serif`,
    text: `'${fontNames.text}', sans-serif`
  },
  transparencies: {
    inactive: '0.5'
  }
}

export { fontNames }

export default theme
