import { useEffect, useState } from 'react'

const useBrowserWidth = () => {
  const [browserWidth, setBrowserWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBrowserWidth(window.innerWidth)
    })
  }, [])

  return {
    browserWidth,
  }
}

export default useBrowserWidth
