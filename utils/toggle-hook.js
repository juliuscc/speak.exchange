import { useState } from 'react'

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial)
  const toggle = () => setState(v => !v)

  return [state, toggle]
}

export default useToggle
