import React from 'react'

import ModalRouter from '@/components/molecules/ModalRouter'
import PageHeader from '@/components/molecules/PageHeader'
import {
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

const BASE_PATH = getPathById([
  ROUTE_IDS.HOME,
  TRAINING_PLAN_BRANCH_ID,
  TRAINING_PLAN_ROUTE_IDS.ROOT
])
const ROUTES = createRoutes(BASE_PATH)

const TrainingPlan = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, events] = useEventResults({id: TRAINING_PLAN_MODULE_ID, shouldLoadOnMount: true})

  return (
    <ModalRouter base={BASE_PATH} routes={ROUTES}>
      <EventResultsInjector />
      <div className="h-full flex flex-col">
        <PageHeader
          className="relative z-20"
          title={messages.pageTitle}
        />

        <div className="grow overflow-auto">
          <h2 className="font-heading-large">
            Have fun :)!
          </h2>
        </div>
      </div>
    </ModalRouter>
  )
}

export default React.memo(TrainingPlan)
