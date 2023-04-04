import React, {useState, useCallback} from 'react'
import ModalRouter from '@/components/molecules/ModalRouter'
import PageHeader from '@/components/molecules/PageHeader'
import {
  // CALENDAR_MODULE_ID,
  TRAINING_PLAN_MODULE_ID
} from '@/components/pages/TrainingPlan/constants'
import {ROUTE_IDS} from '@/components/routes'
import {
  TRAINING_PLAN_BRANCH_ID,
  TRAINING_PLAN_ROUTE_IDS
} from '@/components/routes/training-plan'
import {getPathById} from '@/components/routes/utils'
import useEventResults from '@/hooks/event/use-event-results'
import EventResultsInjector from '@/injectors/event/ResultsInjector'

import messages from './messages'
import createRoutes from './modal-routes'

import {startOfDay, startOfWeek, addDays, format, isSameDay} from 'date-fns'

import cx from 'classnames'

import {de} from 'date-fns/locale'

// import Calendar from '@/components/molecules/Calendar'

import DateCyclePicker from '@/components/molecules/DateCyclePicker'

import EventCard from './EventCard'
// import {EVENT_COLORS} from '@/modules/event/results/types'

// <FontAwesomeIcon icon="fa-solid fa-image" />
// <FontAwesomeIcon icon="fa-solid fa-circle-play" />
// <FontAwesomeIcon icon="fa-solid fa-file-lines" />
// <FontAwesomeIcon icon="fa-solid fa-video" />

// <FontAwesomeIcon icon="fa-regular fa-clock" />

// <FontAwesomeIcon icon="fa-solid fa-up-from-line" />

// import {MODAL_COLORS} from '@/components/atoms/modal'

import mockedEventData from './mockEventData'

const BASE_PATH = getPathById([
  ROUTE_IDS.HOME,
  TRAINING_PLAN_BRANCH_ID,
  TRAINING_PLAN_ROUTE_IDS.ROOT
])

const ROUTES = createRoutes(BASE_PATH)

const TrainingPlan = () => {
  const now = startOfDay(new Date())
  const startOfThisWeek = startOfWeek(now, {weekStartsOn: 1})

  const [state, events] = useEventResults({
    id: TRAINING_PLAN_MODULE_ID,
    shouldLoadOnMount: true
  })
  const [selectedDate, setSelectedDate] = useState(startOfThisWeek)

  const handleChangeDate = useCallback(date => {
    setSelectedDate(date)
  }, [])

  const handleStartDateChange = useCallback(newDate => {
    setSelectedDate(startOfWeek(newDate, {weekStartsOn: 1}))
  }, [])

  const startDate = startOfWeek(selectedDate, {weekStartsOn: 1})
  const endDate = addDays(startDate, 6)
  const updatedDays = Array(7)
    .fill()
    .map((_, i) => addDays(startDate, i))

  const hasEventsForDay = (day, events) => {
    return events.some(event => isSameDay(new Date(event.date), day))
  }

  return (
    <ModalRouter base={BASE_PATH} routes={ROUTES}>
      <EventResultsInjector />
      <div className="h-full flex flex-col overflow-hidden">
        <div>
          <PageHeader
            className="relative z-20"
            title={messages.pageTitle}
            dateCyclePicker={
              <DateCyclePicker
                value={startDate}
                onChange={handleStartDateChange}
              />
            }
          />
        </div>

        <div className="flex flex-col h-full ">
          <div className="flex sticky top-0 z-10 bg-secondary mx-4">
            {updatedDays.map(day => (
              <div
                key={day.getTime()}
                className={cx(
                  'flex-1 p-3 border-solid border-x border-gray-300 shadow',
                  {'bg-white': day.getDate() === now.getDate()}
                )}
              >
                <div className="flex">
                  <div className="font-bold text-[16px] ml-2 ">
                    {format(day, 'EEEE', {locale: de})
                      .substring(0, 2)
                      .toUpperCase()}
                  </div>
                  <div className="text-[16px] ml-2 relative">
                    {format(day, 'dd.MM.')}
                  </div>
                </div>
                {isSameDay(day, now) && (
                  <div className="relative">
                    <div className="absolute -inset-x-1 bottom-5 h-1 rounded-sm bg-blue-900" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row h-full mx-4 overflow-y-auto ">
            {updatedDays.map((day, index) => (
              <div
                key={day.getTime()}
                className={`bg-secondary border border-gray-300 p-0.5 flex-1 h-full overflow-auto relative ${
                  day.getDate() === now.getDate() ? 'bg-white' : ''
                }`}
                style={{
                  overflowY: 'scroll',
                  WebkitScrollbar: {display: 'none'},
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none'
                }}
              >
                {/* evencard with mock data */}
                {mockedEventData.map(event => (
                  <EventCard key={event.id} event={event} day={day} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalRouter>
  )
}

export default React.memo(TrainingPlan)
