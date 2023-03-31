import React from 'react'
import {format} from 'date-fns'
import {isSameDay} from 'date-fns/esm'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import icons from './icons'
import {icon} from '@fortawesome/fontawesome-svg-core'
import {fontSize} from 'tailwindcss/defaultTheme'

// import {MODAL_COLORS} from '@/components/atoms/Modal'

function LocationBadge({location, locationIcon}) {
  return (
    <div className="bg-gray-300 border border-gray-400 rounded p-1 font-thin text-[15px] ">
      {location} <FontAwesomeIcon icon={locationIcon} />
    </div>
  )
}

function ParticipantsBadge({participantsCount, participantsIcon}) {
  return (
    <div
      className="rounded-xl bg-white p-1 px-2 shadow flex mx-2"
      style={{maxWidth: '80px'}}
    >
      <FontAwesomeIcon icon={participantsIcon} className="text-[14px] mr-1" />
      <p className="font-bold text-[14px] ">{participantsCount}+2</p>
    </div>
  )
}

function EventCard({event, day}) {
  if (!isSameDay(event.start, day)) {
    return null
  }

  const {
    location,
    participantsCount,
    locationIcon,
    participantsIcon,
    type,
    exercises,
    iconImage,
    iconPlay,
    iconFile,
    iconVideo,
    iconClock,
    iconUpload,
    iconTarget,
    color
  } = event

  // const bgColor = MODAL_COLORS[event.color] || MODAL_COLORS.BLUE

  return (
    // <div
    //   className={`event-card ${bgColor} border-white border-2 rounded-md shadow mb-3 m-1`}
    // >
    <div className="event-card bg-gradient-to-b from-stone-200 via-stone-100 border-white border-2 rounded-md shadow mb-3 m-1">
      <div className="flex items-center mb-1 border-b-2 border-gray-300 ">
        <div className="flex justify-between items-center space-x-2 m-3 pb-1 w-full">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-300 border border-gray-400 rounded p-1 font-thin text-[15px] ">
              {format(event.start, 'HH:mm')}
            </div>
            <div className="font-bold text-[21px] ">{event.title}</div>
          </div>

          <LocationBadge location={location} locationIcon={locationIcon} />
        </div>
      </div>
      <div className="event-card  border-gray-300 border-b-2 ">
        <div className="flex justify-between items-center m-1">
          <ParticipantsBadge
            participantsCount={participantsCount}
            participantsIcon={participantsIcon}
          />
          <div
            className="rounded-xl bg-white p-1 shadow flex px-2 space-x-1"
            style={{maxWidth: '80px'}}
          >
            <FontAwesomeIcon icon={iconImage} className="text-[14px]" />
            <FontAwesomeIcon icon={iconFile} className="text-[14px]" />
          </div>
        </div>
      </div>

      <div className="border-t pt-2 pb-4">
        <div className="h-4/5 overflow-auto ">
          {exercises.map((exercise, index) => (
            <React.Fragment key={`${exercise.name}-${index}`}>
              <div className="flex items-center mb-2">
                <div className="p-1.5 text-[16px] font-bold ml-2">
                  {index + 1}.
                </div>
                <div className=" text-[16px] font-bold">{exercise.name}</div>
              </div>

              <div className="flex justify-between items-center m-1">
                <ParticipantsBadge
                  participantsCount={participantsCount}
                  participantsIcon={participantsIcon}
                />
              </div>
              <div className=" p-1 flex px-4 space-x-1">
                <FontAwesomeIcon icon={icons.target} className="text-[16px]" />
              </div>
              <div className="mb-2 -mt-5 ml-10 text-lg ">
                {exercise.description}
              </div>
              {index !== exercises.length - 1 && (
                <div className="event-card bg-gray-200 border-gray-300 border-b-2 "></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventCard
