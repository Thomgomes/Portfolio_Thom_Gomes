export const LayeredWaves = (props) => {
  return (
    <div className="layeresWaves relative z-0 ">
      <img
       className='absolute z-0 w-full min-w-[1300px]'
       src={props.waveName}
       alt="" />
    </div>
  )
}