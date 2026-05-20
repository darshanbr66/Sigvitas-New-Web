import { motion } from "framer-motion"

const TeamCard = ({
  name,
  role,
  expertise,
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
        border-slate-200
        bg-white
        overflow-hidden
        hover:border-cyan-400
        transition-all
        duration-300
      "
    >

      {/* Top Area */}
      <div className="
        h-56
        bg-gradient-to-br
        from-slate-100
        to-slate-200
        flex
        items-center
        justify-center
      ">

        {/* Avatar */}
        <div className="
          w-28
          h-28
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          to-blue-600
          flex
          items-center
          justify-center
          text-3xl
          font-bold
          text-white
          shadow-lg
          shadow-cyan-500/20
        ">
          {name.charAt(0)}
        </div>

      </div>

      {/* Content */}
      <div className="p-8">

        {/* Name */}
        <h3 className="
          text-2xl
          font-bold
          text-slate-900
        ">
          {name}
        </h3>

        {/* Role */}
        <p className="
          mt-3
          text-cyan-600
          font-medium
        ">
          {role}
        </p>

        {/* Expertise */}
        <p className="
          mt-6
          text-slate-600
          leading-relaxed
        ">
          {expertise}
        </p>

      </div>

    </motion.div>
  )
}

export default TeamCard