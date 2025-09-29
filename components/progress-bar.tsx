"use client"

import { useEffect, useState } from "react"

interface ProgressBarProps {
  skill: string
  percentage: number
  delay?: number
}

export function ProgressBar({ skill, percentage, delay = 0 }: ProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div className="bg-primary h-2 rounded-full progress-bar" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
