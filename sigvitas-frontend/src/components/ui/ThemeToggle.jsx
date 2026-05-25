import { HiMoon, HiSun } from "react-icons/hi"

import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {

  const {
    theme,
    toggleTheme,
  } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="
        w-12
        h-12
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        flex
        items-center
        justify-center
        text-xl
        hover:scale-105
        transition-all
        duration-300

        dark:text-white
        text-slate-900
      "
    >

      {
        theme === "dark"
          ? <HiSun />
          : <HiMoon />
      }

    </button>
  )
}

export default ThemeToggle