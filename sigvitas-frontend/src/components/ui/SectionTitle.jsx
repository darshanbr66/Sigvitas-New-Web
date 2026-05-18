const SectionTitle = ({
  title,
  subtitle,
  center = false,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="gradient-text font-semibold mb-3">
        {subtitle}
      </p>

      <h2 className="
        text-4xl
        md:text-5xl
        font-bold
        leading-tight
      ">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle