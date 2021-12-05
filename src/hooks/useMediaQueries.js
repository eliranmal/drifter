import {useEffect} from 'react'


const useMediaQueries = (
  listenerByQueryMap = {},
  queryListenerDecorator = fn => fn
) => {

  useEffect(() => {
    const listenerByQueryMappings = Object.entries(listenerByQueryMap)

    const mediaQueries = listenerByQueryMappings.map(([queryString, queryListener]) => ([
      window.matchMedia(queryString),
      queryListenerDecorator(e => e.matches && queryListener()),
    ]))

    const queryMatchIndex = mediaQueries.findIndex(([query]) => query.matches)
    if (queryMatchIndex !== -1) {
      listenerByQueryMappings[queryMatchIndex][1]()
    }

    mediaQueries
      .forEach(([query, listener]) => query.addEventListener('change', listener))

    return () => mediaQueries
      .forEach(([query, listener]) => query.removeEventListener('change', listener))
  }, [listenerByQueryMap])
}


export default useMediaQueries
