import { useEffect, useRef } from 'react'
import equal from 'fast-deep-equal'

function useDeepCompareMemoize (value) {
  const ref = useRef()

  if (!equal(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

export default function useDeepCompareEffect (callback, dependencies) {
  useEffect(callback, useDeepCompareMemoize(dependencies))
}
