import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    // console.log(element.current)
    Promise.resolve(
      typeof window.IntersectionObserver !==
            'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        // console.log({ isIntersecting })
        if (isIntersecting) {
          // console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  return [show, element]
}
