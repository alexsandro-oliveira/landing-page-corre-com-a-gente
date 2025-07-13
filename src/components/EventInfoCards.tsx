interface EventInfoCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function EventInfoCards({
  icon,
  title,
  description,
}: EventInfoCardProps) {
  return (
    <div className="bg-blue-300/60 items-center justify-center flex flex-col w-[8rem] backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-3 border border-blue-400 hover:border-blue-500 transition-all duration-300 hover:scale-105">
      {icon}
      <h3 className="font-semibold text-blue-950 mb-1 text-xs xs:text-sm sm:text-base">
        {title}
      </h3>
      <p className="text-xs xs:text-sm text-blue-950">{description}</p>
    </div>
  )
}
