"use client"

import { useTheme } from "@/components/theme-provider"

export function Logo() {
  const { theme } = useTheme()

  return (
    <div className="font-ubuntu font-bold text-lg">
      <span className={`${theme === "dark" ? "text-white" : "text-[#333333]"}`}>Oğuzhan</span>
      <span className="text-[var(--primary-light)] ml-1">Erkan</span>
    </div>
  )
}
