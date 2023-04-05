import {useState} from 'react'

function useEventType() {
  const [eventType, setEventType] = useState('training')

  function updateEventType(type) {
    setEventType(type)
  }

  return [eventType, updateEventType]
}

export default useEventType
