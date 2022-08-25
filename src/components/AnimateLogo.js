import React, { useEffect, useState } from "react"
import { useTransition, animated, config } from "react-spring"

const optm = [
  {
    fig: "Only",
    op: { range: [0.75, 1], output: [0, 1] },
    trans: {
      range: [0.75, 1],
      output: [-40, 0],
      extrapolate: "clamp"
    }
  },
  {
    fig: "Push",
    op: { range: [0.25, 0.5], output: [0, 1] },
    trans: {
      range: [0.25, 0.5],
      output: [-40, 0],
      extrapolate: "clamp"
    }
  },
  {
    fig: "To",
    op: { range: [0, 0.25], output: [0, 1] },
    trans: {
      range: [0, 0.25],
      output: [-40, 0],
      extrapolate: "clamp"
    }
  },
  {
    fig: "Main",
    op: { range: [0.5, 0.75], output: [0, 1] },
    trans: {
      range: [0.5, 0.75],
      output: [-40, 0],
      extrapolate: "clamp"
    }
  }
]

const AnimateLogo = () => {
  const [items, setItems] = useState(optm)

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
    onRest: () => setItems([])
  })

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(optm)
      }, 2000)
    }
  }, [items])

  return (
    <div className="flex justify-center text-white text-5xl space-x-5">
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to(y => `translate3d(0,${y}px,0)`)
          }}>
          {item.fig}
        </animated.div>
      ))}
    </div>
  )
}

export default AnimateLogo
