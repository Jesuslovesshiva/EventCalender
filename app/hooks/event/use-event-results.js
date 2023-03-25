import {useCallback, useEffect} from 'react'
import {useDispatch} from 'react-redux'

import useMemoizedSelector from '@/hooks/use-memoized-selector'
import {actions, selectors} from '@/modules/event/results'

const DEFAULT_ID = 'default'

const useState = id => ({
  error: useMemoizedSelector(selectors.makeSelectError, {id}),
  events: useMemoizedSelector(selectors.makeSelectResult, {id}),
  isLoading: useMemoizedSelector(selectors.makeSelectIsLoading, {id}),
  total: useMemoizedSelector(selectors.makeSelectTotal, {id})
})

const useEvents = id => {
  const dispatch = useDispatch()

  return {
    onLoad: useCallback(
      (offset = 0) => dispatch(actions.load({id, offset})),
      [id]
    ),
    onReset: useCallback(() => {
      dispatch(actions.reset({id}))
    }, [id])
  }
}

const useEventResults = ({id = DEFAULT_ID, shouldLoadOnMount = false}) => {
  const state = useState(id)
  const events = useEvents(id)

  useEffect(() => {
    if (shouldLoadOnMount) {
      events.onLoad()
    }

    return () => {
      events.onReset()
    }
  }, [shouldLoadOnMount])

  return [state, events]
}

export default useEventResults
