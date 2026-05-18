const Button = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`
        px-6
        py-3
        rounded-xl
        font-medium
        bg-blue-600
        hover:bg-blue-500
        transition-all
        duration-300
        shadow-lg
        shadow-blue-500/20
        hover:scale-105
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button