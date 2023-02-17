import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const ThemesBtn = () => {
  const [theme, setTheme] = useState('dark')

  const element = document.documentElement
  const options = [
    {
      name: "Tema Dourado",
      logi: "ok Dourado",
      id: "golden",
      text: "GoldenMode",
    },
    {
      name: "Tema Roxo",
      logi: "ok Roxo",
      id: "purple",
      text: "PurpleMode",
    },
    {
      name: "Tema Verde",
      logi: "ok Verde",
      id: "green",
      text: "GreenMode",
    }
  ]

  // useEffect(() => {
  //   switch (theme) {
  //     case 'dark':
  //       element.classList.add('dark')
  //       localStorage.setItem('theme', 'dark')
  //       break;

  //     case 'light':
  //       element.classlist.remove('dark')
  //       localStorage.setItem('theme', 'light')
  //       break;

  //     default:
  //       break;
  //   }
  // }, [theme])

  useEffect(() => {
    if (window.matchMedia('(prefers-colors-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-base font-medium shadow-sm focus:outline-none -tracking-tighter">
          Temas
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
              options?.map(opt => (
                <button key={opt.name} className='w-full text-start' id={opt.id} onClick={handleThemeSwitch} >
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}

                      >
                        {opt.name}
                      </div>
                    )}
                  </Menu.Item>
                </button>
              ))
            }
            {/* <Menu.Item>
              {({ active }) => (
                <Link
                  to="*"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}

                >
                  Tema Roxo
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="*"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}

                >
                  Tema Verde
                </Link>
              )}
            </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}