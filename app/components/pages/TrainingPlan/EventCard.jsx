import React from 'react'
import {format} from 'date-fns'
import {isSameDay} from 'date-fns/esm'
// import {EVENT_COLORS} from '@/modules/event/results/types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

function EventCard({event, day}) {
  if (!isSameDay(event.start, day)) {
    return null
  }

  // function renderAttachments(attachments) {
  //   if (!attachments) return null
  //   // rest of the function
  // }

  // const attachments = event.attachments ?? []

  // const eventColor = EVENT_COLORS[event.type] || 'gray'

  // first div in return statement needs p-1 without b-l beeing disrupted
  return (
    <div className="event-card bg-gray-200 border-white border rounded-sm shadow">
      <div className="flex items-center mb-1 border-b border-gray-300 ">
        <div className="flex justify-between items-center space-x-2 m-2 pb-1 w-full">
          <div className="flex items-center space-x-2">
            <div className="font-bold text-sm">
              <div className="bg-gray-300 border border-gray-400 rounded-sm p-0.5 font-thin text-[12px] ">
                {format(event.start, 'HH:mm')}
              </div>
            </div>
            <div className="font-bold text-[16px] ">{event.title}</div>
          </div>

          <div className="bg-gray-300 border border-gray-400 rounded-sm p-0.5 font-thin text-[12px]">
            P1 <FontAwesomeIcon icon={faLocationDot} />
          </div>
        </div>
      </div>
      <div className="event-card bg-gray-200 border-gray-300 border-b ">
        <div className="flex justify-between items-center m-1">
          <div
            className="rounded-xl bg-white p-1 px-2 shadow flex"
            style={{maxWidth: '80px'}}
          >
            <FontAwesomeIcon icon={faUser} className="text-[12px] mr-1" />
            <p className="font-bold text-[12px] ">13+2</p>
          </div>
          <div
            className="rounded-md bg-white p-1 shadow flex"
            style={{maxWidth: '80px'}}
          >
            <FontAwesomeIcon icon={event.icon} className="text-[12px]" />
          </div>
        </div>
      </div>

      <div className="border-t pt-2 pb-4 ">
        <div className="p-2 font-bold text-sm mb-2">Exercises</div>
        {/* <button className="bg-gray-800 text-white rounded-lg px-3 py-2 ">
          {event.location}
        </button> */}

        <div className="h-4/5 overflow-auto">
          {/* Render the exercises here */}
        </div>
      </div>
      {/* <div className="border-t border-gray-300 pt-2 border-gray-900 border">
        <div className="font-bold text-sm mb-2">Attachments</div>
        <div className="flex flex-wrap">
          {attachments.map((attachment, index) => (
            <div
              key={index}
              className="border rounded-md p-1 mr-2 mb-2 text-sm text-gray-600"
            >
              {attachment.name}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default EventCard
