export const AbilityCards = (props) => {
  return (
    <div id={props.id} className="w-36 h-36 backdrop-blur-2xl m-auto">
      <div className='relative h-full bg-[#13131F] rounded-xl border-4 border-[#4c4c5e] transition-all duration-200 ease-linear
                      hover:scale-110 hover:rounded-2xl
      '>
        <span className='absolute top-2 left-[14%] text-[100px] text-green-500'>
          <props.icon/>
        </span>
        <div className='h-full flex text-center justify-center items-end text-green-200'>
          <p className='tracking-wide'>{props.iconName}</p>
        </div>
      </div>
    </div>
  )
}