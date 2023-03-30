import React from 'react'
import EventCard from './EventCard'

export const eventsData = [
  {
    day: 1, // Monday
    event: {
      time: '10:00',
      title: 'Training',
      attendees: 15,
      activities: [
        {
          title: 'Krafttraining Beine',
          duration: 30,
          maxParticipants: 20,
          description: 'Basis Bewegung Verbesserung der Bein-Kraft, Qualität'
        },
        {
          title: 'Hands-on',
          duration: 60,
          maxParticipants: 20,
          description: 'hehe'
        }
      ],
      attachments: [{type: 'pdf'}, {type: 'jpg'}, {type: 'mp4'}]
    }
  }
  // ... more events
]

const renderEventCard = dayIndex => {
  // Get the events for the current day
  const dayEvents = events.filter(
    event =>
      format(new Date(event.startDate), 'yyyy-MM-dd') ===
      format(days[dayIndex - 1], 'yyyy-MM-dd')
  )

  // Render the events for the current day
  return dayEvents.map(event => (
    <EventCard
      key={event.id}
      time={format(new Date(event.startDate), 'HH:mm')}
      title={event.title}
      attendees={event.participantsCount + event.guestParticipantsCount}
      activities={event.exercises}
      attachments={event.files}
    />
  ))
}
