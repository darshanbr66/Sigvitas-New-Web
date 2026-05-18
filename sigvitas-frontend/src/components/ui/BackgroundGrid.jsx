const BackgroundGrid = () => {
  return (
    <div className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
    ">

      {/* Grid */}
      <div className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:60px_60px]
        mask-image-[radial-gradient(ellipse_at_center,black,transparent_75%)]
      " />

    </div>
  )
}

export default BackgroundGrid