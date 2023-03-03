import '../../components/about/aboutme.css'
import '../../components/contact/inputFocus.css'

import { motion } from 'framer-motion'

import { fadein } from '../../utils/variants'
import { useEffect, useState } from 'react'
import { Textarea } from '../../components/contact/textarea'
import { ContaticTitle } from '../../components/contact/title'
import { InputEmail } from '../../components/contact/inputEmail'
import { InputName } from '../../components/contact/inputname'
import { BtnSubmit } from '../../components/contact/btnsubmit'
import { SocialMedias } from '../../components/contact/socialMedia'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return;
    }

    alert("TESTE")
  }

  return (
    <section className="section" id="contact">
      <div className="container mx-auto my-auto md:py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadein('up', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 lg:mx-0 mb-20 md:mb-0">
            <div className='flex flex-1 flex-col h-full w-full justify-center items-center text-center'>

              <ContaticTitle />

              <form className='w-full' onSubmit={sendEmail}>

                <InputName
                  value={name}
                  setValue={setName}
                />

                <InputEmail
                  value={email}
                  setValue={setEmail}
                />

                <Textarea
                  value={message}
                  setValue={setMessage}
                />

                <BtnSubmit />

              </form>
            </div>

            <SocialMedias />

          </motion.div>

        </div>
      </div>
    </section>
  )
}