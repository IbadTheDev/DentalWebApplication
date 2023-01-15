import React from 'react'
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocation, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterData = () => {

  const FooterCards = [
    {
      icon: faPhone,
      title: 'Phone Number',
      Firstsubtitle: '+123-456-7890',
      Secondsubtitle: '+111-222-3333'
    },
    {
      icon: faLocation,
      title: 'Our Address',
      Firstsubtitle: 'karachi, pakistan - 400104',

    },
    {
      icon: faClock,
      title: 'Opening Hours',
      Firstsubtitle: '8:00am to 10:00pm',
    },
    {
      icon: faEnvelope,
      title: 'Email Address',
      Firstsubtitle: 'abc@gmail.com',
      Secondsubtitle: 'abc@gmail.com'
    },
  ]

  return (
    <>
      {
        FooterCards.map((card, index) => (
          <div className="text-center" key={index}>
            <FontAwesomeIcon icon={card.icon} className='text-white bg-blue rounded-full text-3xl p-3'></FontAwesomeIcon>
            <h3 className="text-black capitalize font-medium mt-3">{card.title}</h3>
            <p className="text-light-color py-2">{card.Firstsubtitle}</p>
            {
              card.Secondsubtitle &&
              <p className="text-light-color">{card.Secondsubtitle}</p>
            }
          </div>
        ))
      }
    </>
  )
}

export default FooterData