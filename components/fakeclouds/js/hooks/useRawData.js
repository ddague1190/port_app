import {useMemo} from 'react'
import {get} from 'lodash'



const data ={
  "gradients": [
    {
      "top": "#0747ab",
      "bottom": "#6796b5",
      "spot1": "#a7b9c7",
      "spot2": "#a7b9c7"
    }
  ]
}


export default function useRawData(key) {
  const response = useMemo(() => {
    return key ? get(data, key, '') : data
  }, [key])

  return response
}
