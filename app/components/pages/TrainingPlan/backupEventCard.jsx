import React from 'react'
import {format} from 'date-fns'
import {isSameDay} from 'date-fns/esm'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import icons from './icons'
// import {icon} from '@fortawesome/fontawesome-svg-core'
// import {fontSize} from 'tailwindcss/defaultTheme'

// import {MODAL_COLORS} from '@/components/atoms/Modal'
// import {EVENT_TYPES} from '@/modules/event/results/types'

const getBackgroundColorForEventType = eventType => {
  switch (eventType) {
    case 'covid':
      return 'bg-gradient-to-b from-amber-100 to-white'
    case 'heimspiel':
      return 'bg-gradient-to-b from-rose-200 to-white'
    default:
      return 'bg-gray-200'
  }
}

function LocationBadge({location, locationIcon}) {
  return (
    <div className="bg-gray-300 border border-gray-400 rounded-md p-1 px-2 font-thin text-[15px] mr-3 flex ">
      {location} <FontAwesomeIcon icon={locationIcon} className="ml-1" />
    </div>
  )
}

function ParticipantsBadge({participantsCount, participantsIcon}) {
  return (
    <div
      className={`rounded-xl bg-white p-1 px-2 shadow flex mx-2 ${
        participantsCount ? 'space-x-1' : ''
      }`}
      style={{maxWidth: '80px'}}
    >
      <FontAwesomeIcon icon={participantsIcon} className="text-[14px] " />
      <p className="font-bold text-[14px] ">{participantsCount}</p>
    </div>
  )
}

function DownloadButton({upload}) {
  return (
    <div
      className={`rounded-md p-1 px-2 shadow flex mx-2 border-gray-400 border`}
    >
      <FontAwesomeIcon icon={upload} className="text-[14px] " />
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
    upload
  } = event

  const backgroundColor = getBackgroundColorForEventType(type)

  return (
    <div
      className={`event-card ${backgroundColor} border-white border-2 rounded-md shadow mb-3 m-1 overflow-hidden`}
    >
      {exercises.map((exercise, index) => (
        <React.Fragment key={`${exercise.name}-${index}`}>
          {index === 0 && (
            <>
              <div className="flex items-center flex-wrap mb-1 border-b-2 border-gray-300 ">
                <div className="flex justify-between items-center space-x-2 m-3 pb-1 w-full">
                  <div className="flex items-center space-x-2">
                    {type == 'heimspiel' ? (
                      <div className="bg-red-100 border border-red-200 rounded-md p-1 font-thin text-[15px]">
                        {format(event.start, 'HH:mm')}
                      </div>
                    ) : null}
                    {type == 'training' ? (
                      <div className="bg-gray-300 border border-gray-400 rounded-md p-1 font-thin text-[15px]">
                        {format(event.start, 'HH:mm')}
                      </div>
                    ) : null}
                    {type == 'covid' ? (
                      <div className="bg-yellow-100 border border-yellow-200 rounded-md p-1 font-thin text-[15px]">
                        {format(event.start, 'HH:mm')}
                      </div>
                    ) : null}
                    <div className="font-bold text-[21px] ">{event.title}</div>
                  </div>

                  {type !== 'heimspiel' && type !== 'covid' ? (
                    <LocationBadge
                      location={location}
                      locationIcon={locationIcon}
                    />
                  ) : null}
                </div>
                {exercise.descriptionPosition === 'afterTitle' && (
                  <div className="text-lg p-3 -mt-3 w-full">
                    {exercise.description}
                  </div>
                )}
              </div>
            </>
          )}

          {index === 0 && (
            <div className="flex justify-between items-center m-1">
              <ParticipantsBadge
                participantsCount={participantsCount}
                participantsIcon={participantsIcon}
              />
              <div className="flex justify-end items-between">
                {type !== 'covid' ? (
                  <div className="rounded-xl bg-white p-1 shadow flex px-2 space-x-1 ">
                    {index === 0 &&
                      exercises
                        .reduce((acc, exercise) => {
                          ;(exercise.files || []).forEach(fileIcon => {
                            if (
                              !acc.find(
                                icon => icon.iconName === fileIcon.iconName
                              )
                            ) {
                              acc.push(fileIcon)
                            }
                          })
                          return acc
                        }, [])
                        .map((icon, idx) => (
                          <FontAwesomeIcon
                            key={idx}
                            icon={icon}
                            className="text-[14px]"
                          />
                        ))}
                  </div>
                ) : null}

                <DownloadButton upload={upload} />
              </div>
            </div>
          )}

          {type !== 'heimspiel' && type !== 'covid' ? (
            <div className="border-t-2 pt-2 pb-4 border-gray-300">
              <div className="h-4/5 ">
                <div className="flex items-center mb-2">
                  <div className="p-1.5 text-[16px] font-bold ml-2">
                    {index + 1}.
                  </div>
                  <div className=" text-[16px] font-bold">{exercise.name}</div>
                </div>

                <div className="flex justify-between items-center m-1 mx-2  ">
                  <ParticipantsBadge
                    participantsCount={exercise.participantsCount || 0}
                    participantsIcon={participantsIcon}
                  />
                  {exercise.files && exercise.files.length > 0 && (
                    <div
                      className="rounded-xl bg-white p-1 shadow flex px-2 space-x-1"
                      style={{maxWidth: '80px'}}
                    >
                      {exercise.files.map((icon, idx) => (
                        <FontAwesomeIcon
                          key={idx}
                          icon={icon}
                          className="text-[14px]"
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-1 flex px-6 mt-2 space-x-1">
                  <FontAwesomeIcon
                    icon={icons.target}
                    className="text-[16px]"
                  />
                </div>
                {exercise.descriptionPosition !== 'afterTitle' && (
                  <div className=" -mt-5 ml-12 mr-6 text-lg ">
                    {exercise.description}
                  </div>
                )}
                {index !== exercises.length - 1 && (
                  <div className="event-card bg-gray-200  "></div>
                )}
              </div>
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  )
}

export default EventCard
