import React, {useState, useCallback} from 'react'
import ModalRouter from '@/components/molecules/ModalRouter'
import PageHeader from '@/components/molecules/PageHeader'
import {
  CALENDAR_MODULE_ID,
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

import {format, startOfWeek, addDays, startOfDay} from 'date-fns'
import cx from 'classnames'

import EventCard from './EventCard'
import {de} from 'date-fns/locale'

import Calendar from '@/components/molecules/Calendar'

import DateCyclePicker from '@/components/molecules/DateCyclePicker'

const BASE_PATH = getPathById([
  ROUTE_IDS.HOME,
  TRAINING_PLAN_BRANCH_ID,
  TRAINING_PLAN_ROUTE_IDS.ROOT
])
const ROUTES = createRoutes(BASE_PATH)

const TrainingPlan = () => {
  const now = startOfDay(new Date())
  const startOfThisWeek = startOfWeek(now, {weekStartsOn: 1})
  const days = Array(7)
    .fill()
    .map((_, i) => addDays(startOfThisWeek, i))

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

  return (
    <ModalRouter base={BASE_PATH} routes={ROUTES}>
      <EventResultsInjector />
      <div className="h-full flex flex-col">
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

        <div className="flex flex-col h-full">
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
                  <div className="font-bold text-lg">
                    {format(day, 'EEEE', {locale: de})
                      .substring(0, 2)
                      .toUpperCase()}
                  </div>
                  <div className="text-lg ml-2 relative">
                    {format(day, 'dd.MM.')}
                  </div>
                  {day.getDate() === now.getDate() && <div className=""></div>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row h-full mx-4 overflow-y-auto">
            {updatedDays.map((day, index) => (
              <div
                key={day.getTime()}
                className={`bg-secondary border border-gray-300 p-3 flex-1 h-full overflow-auto relative ${
                  day.getDate() === now.getDate() ? 'bg-white' : ''
                }`}
              >
                {/* Render the EventCard component for the current day */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModalRouter>
  )
}

export default React.memo(TrainingPlan)
