import {useState} from 'react'

const useRegisterSW = jest.fn(() => {
  const [needRefresh, setNeedRefresh] = useState(true)

  return {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker: () => {}
  }
})

// eslint-disable-next-line import/prefer-default-export
export {useRegisterSW}
