const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        glass-card
        rounded-[32px]
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassCard