import { motion } from "framer-motion"

const CapabilityCard = ({
  category,
  items,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="
        group
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        p-10
        hover:border-cyan-400/30
        transition-all
        duration-300
      "
    >

      {/* Category */}
      <h3 className="
        text-3xl
        font-bold
        leading-snug
        text-white
      ">
        {category}
      </h3>

      {/* Divider */}
      <div className="
        mt-8
        h-[1px]
        w-full
        bg-white/10
      " />

      {/* Items */}
      <div className="
        mt-8
        flex
        flex-col
        gap-5
      ">

        {
          items.map((item) => (

            <div
              key={item}
              className="
                flex
                items-start
                gap-4
              "
            >

              <div className="
                mt-2
                w-2
                h-2
                rounded-full
                bg-cyan-400
              " />

              <p className="
                text-slate-300
                leading-relaxed
              ">
                {item}
              </p>

            </div>

          ))
        }

      </div>

    </motion.div>
  )
}

export default CapabilityCard