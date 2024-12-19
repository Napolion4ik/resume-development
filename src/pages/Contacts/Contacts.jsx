import React, { useEffect } from 'react'
import ContactsBlock from '../../components/Contancts/Contacts';

function parallax(event) {
    let bgMain = this.querySelector(".layer-bg");
    let speed = bgMain.getAttribute('data-speed');
     bgMain.style.transform = `translateX(-${event.clientX * speed / 400}px)`

    let bgPhone = this.querySelector(".layer-2");
    let speedPhone = bgPhone.getAttribute('data-speed');
    bgPhone.style.transform = `translateX(${event.clientX * speedPhone / 800}px)`

    let laptopBg = this.querySelector(".layer-1");
    let speeLaptop = laptopBg.getAttribute('data-speed');
    laptopBg.style.transform = `translateY(-${event.clientX * speeLaptop / 800}px)`
}

const Contacts = () => {
  useEffect(() => {
document.addEventListener("mousemove", parallax)
  
    return () => {
      document.removeEventListener('mousemove', parallax);
    }
  }, [])
  
  return (
    <section className='section'>
      <div className="continaer">
        <div className="scene">
          <ContactsBlock classMode="contacts__page"></ContactsBlock>
          <div data-speed="10" className="layer layer-bg"></div>
          <div data-speed="40" className="layer layer-1"></div>
          <div data-speed="80" className="layer layer-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Contacts