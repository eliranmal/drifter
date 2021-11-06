import {useEffect} from 'react'


const useMediaQueries = (mediaQueryMap, dependencies) => {

  useEffect(() => {
    const mediaQueryMappings = Object.entries(mediaQueryMap)

    const mediaQueries = mediaQueryMappings.map(([queryString, queryListener]) => ([
        window.matchMedia(queryString),
        e => e.matches && queryListener(),
      ]))

    const queryMatchIndex = mediaQueries.findIndex(([query]) => query.matches)
    if (queryMatchIndex !== -1) {
      mediaQueryMappings[queryMatchIndex][1]()
    }

    mediaQueries
      .forEach(([query, listener]) => query.addEventListener('change', listener))

    return () => mediaQueries
      .forEach(([query, listener]) => query.removeEventListener('change', listener))
  }, [dependencies])
}


export default useMediaQueries
