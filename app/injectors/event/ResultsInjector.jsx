import {compose} from 'redux'
import {injectReducer, injectSaga} from 'redux-injectors'

import reducer, {saga} from '@/modules/event/results'

const EventResultsInjector = compose(
  injectReducer(reducer),
  injectSaga(saga)
)(() => null)

export default EventResultsInjector

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEventResults } from '@/hooks'
// import EventCard from '@/components/EventCard'
// import { getEvents } from '@/modules/event/results'

// const EventList = () => {
//   const dispatch = useDispatch()
//   const { events } = useSelector((state) => state.eventResults)
//   const { id } = useEventResults({ shouldLoadOnMount: true })

//   useEffect(() => {
//     dispatch(getEvents())
//   }, [dispatch])

//   return (
//     <div>
//       {events.map((event) => (
//         <EventCard key={event.id} event={event} />
//       ))}
//     </div>
//   )
// }

// export default EventList
