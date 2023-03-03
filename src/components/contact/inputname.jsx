export const InputName = (props) => {
  return (
    <div className='w-3/4 lg:w-3/5 relative left-[13%] lg:left-[22%] border-b-2 border-[#adadad] mt-[20px] mb-9'>

      <input
        className={
          props.value !== ''
            ? 'has-val input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'
            : 'input text-base text-white leading-[1.2] border-none block w-full h-11 bg-transparent px-1.5 focus:outline-0'
        }
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <span
        className="
                      focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                      before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l to-[#d28d06] from-[#8b5002]
                      after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all 
                      "
        data-paceholder="Digite seu nome"
      ></span>
    </div>
  )
}