const ContentWidth = ({
  children,
  className = "",
}) => {
  return (
    <div className={`
      max-w-3xl
      ${className}
    `}>
      {children}
    </div>
  )
}

export default ContentWidth