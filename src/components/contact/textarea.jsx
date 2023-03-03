import { useEffect, useState } from "react";

export const Textarea = (props) => {


  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", e => {
      textarea.style.height = "auto";
      let scHeight = e.target.scrollHeight;
      textarea.style.height = `${scHeight}px`
    });
  })

  return (
    <div className='w-3/4 lg:w-3/5 relative left-[13%] lg:left-[22%] border-b-2 border-[#adadad] mb-12'>

      <textarea
        className={
          props.value !== ''
            ? 'has-val input text-base text-white leading-[1.2] border-none block w-full h-auto bg-transparent px-1.5 focus:outline-0 resize-none scrollbar scrollbar-thumb-[#d28d06] scrollbar-track-[#251123c7] max-h-80'
            : 'input text-base text-white leading-[1.2] border-none block w-full h-auto bg-transparent px-1.5 focus:outline-0 resize-none scrollbar scrollbar-thumb-[#d28d06] scrollbar-track-[#251123c7] max-h-80'
        }
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <span
        className="
                      focus-input absolute block w-full h-full top-0 left-0 pointer-events-none text-[#adadad] text-start
                      before:block before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-0.5 before:transition-all before:bg-gradient-to-l to-[#d28d06] from-[#8b5002]
                      after:text-base after:text-[#999999] after:leading-[1.2] after:content-[attr(data-paceholder)] after:block after:w-full after:absolute after:top-4 after:left-0 after:pl-[5px] after:transition-all 
                      "
        data-paceholder="Digite sua mensagem"
      ></span>
    </div>
  )
}