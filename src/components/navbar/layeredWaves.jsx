export const LayeredWaves = (props) => {
  return (
    <div className="layeresWaves relative z-[1] ">
      <img
       className='absolute z-[1] w-full min-w-[1300px]'
       src={props.waveName}
       alt="" />
    </div>
  )
}