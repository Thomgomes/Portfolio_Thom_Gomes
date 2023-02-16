import { createElement } from "react"
import './bubbles.css'

export const Bubbles = () => {

  function bubblesCreate () {
    const section = document.querySelector('section')
    const createElement = document.createElement('span')
    let size = Math.random()*60

    createElement.style.width = size + 'px'
    createElement.style.height = size + 'px'
    createElement.style.left = Math.random() * innerWidth + 'px'
    section.appendChild(createElement)

    setTimeout(() => {
      createElement.remove()
    },2000)
  }
  setInterval(bubblesCreate,300)

  return (
    <section
    className=""
    >

    </section>
  )
}