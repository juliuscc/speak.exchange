export default function debounce(func, wait) {
  let timeout

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      timeout = undefined
      func(...args)
    }, wait)
  }
}
