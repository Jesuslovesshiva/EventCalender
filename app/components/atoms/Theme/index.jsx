import mapValues from 'lodash/mapValues'
import {useMemo} from 'react'

import * as themes from './themes'
import {flattenObject, hexToRgb} from './utils'

const Theme = () => {
  const css = useMemo(() => {
    const cssVariables = {
      ...themes.standard,
      colors: mapValues(flattenObject(themes.standard.colors, '-'), hexToRgb)
    }

    return Object.entries(flattenObject(cssVariables, '-'))
      .map(([key, value]) => `--${key}: ${value};`)
      .join('\n')
  }, [])

  return (
    <style>
      {`:root {
        ${css}
      }`}
    </style>
  )
}

export default Theme
