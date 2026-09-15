import React, { useState } from 'react'

export default function CoffeeCup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8
    setTilt({ x: y, y: x })
  }

  return (
    <div
      className="coffee-cup-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      aria-hidden="true"
    >
      <div
        className="coffee-cup-scene"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="coffee-steam coffee-steam-one" />
        <div className="coffee-steam coffee-steam-two" />
        <div className="coffee-steam coffee-steam-three" />
        <div className="coffee-cup-handle" />
        <div className="coffee-cup-body">
          <div className="coffee-cup-rim">
            <div className="coffee-surface">
              <span className="coffee-swirl" />
            </div>
          </div>
          <div className="coffee-cup-base" />
        </div>
        <div className="coffee-saucer" />
      </div>
    </div>
  )
}
