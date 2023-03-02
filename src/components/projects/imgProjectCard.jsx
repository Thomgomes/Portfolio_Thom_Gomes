export const ImgProjectCard = (props) => {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img */}
      <img
        className="group-hover:scale-125 transition-all duration-500"
        src={props.img}
        alt="" />
      {/* pretitle */}
      <div className="absolute -bottom-full left-12 
              group-hover:bottom-24 transition-all duration-500 z-50">
        <h6 className="text-3xl pb-5">{props.pretext}</h6>
      </div>
      {/* title */}
      <div className="absolute -bottom-full left-12 
              group-hover:bottom-14 transition-all duration-700 z-50">
        <h5 className="text-3xl">{props.title}</h5>
      </div>
    </div>
  )
}