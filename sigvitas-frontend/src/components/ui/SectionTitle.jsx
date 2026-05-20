const SectionTitle = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  return (
    <div className={center ? "text-center" : ""}>

      {/* Subtitle */}
      <p className={`
        uppercase
        tracking-[0.3em]
        text-sm
        font-medium
        mb-5

        ${
          light
            ? "text-cyan-400"
            : "text-cyan-600"
        }
      `}>
        {subtitle}
      </p>

      {/* Title */}
      <h2 className={`
        text-4xl
        md:text-5xl
        xl:text-6xl
        font-bold
        leading-[1.15]
        tracking-tight
        max-w-5xl

        ${
          light
            ? "text-white"
            : "text-slate-900"
        }
      `}>
        {title}
      </h2>

    </div>
  )
}

export default SectionTitle