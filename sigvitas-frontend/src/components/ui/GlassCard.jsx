const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        glass-card
        rounded-3xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassCard