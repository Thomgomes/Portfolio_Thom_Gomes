import { useState } from 'react'

export const ThemesBtn = () => {
  return (
    <li>
      <div className='flex items-center gap-2 hover:underline cursor-pointer'>
      <span to="*" className="text-sm ">
        Temas
      </span>
      <svg
          className="h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </div>
    </li>
  )
}
