import { useEffect, useState } from 'react'

const useBrowserWidth = () => {
  const [beforeBrowserWidth, setBeforeBrowserWidth] = useState<number>(
    window.innerWidth,
  )
  const [afterBrowserWidth, setAfterBrowserWidth] = useState<number>(
    window.innerWidth,
  )

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBeforeBrowserWidth(afterBrowserWidth)
      setAfterBrowserWidth(window.innerWidth)
    })
  }, [])

  return {
    beforeBrowserWidth,
    afterBrowserWidth,
  }
}

export default useBrowserWidth
