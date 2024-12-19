import React from 'react';
import facebook from "../../images/facebook.svg"
import linkedin from "../../images/icon/linkedin.svg"
import instagram from "../../images/icon/instagram.svg"
import avatar from "../../images/avatar.jpg"


const AboutMe = () => {
  return (
    <section className='section aboutMe'>
      <div className="container container__aboutMe">
          <div className='aboutMe__card'>
              <div className='aboutMe__card-top'>
                <img src={avatar} className='aboutMe__image' alt="avatar" />
                <h4 className='aboutMe__name'>Дзюба Олег</h4>
                <h5 className='aboutMe__job'>Front End developer</h5>
              </div>
              <div className="aboutMe__card-bottom">
                <ul className='aboutMe__social'>
                    <li><a target='_blank' href="https://www.facebook.com/profile.php?id=100024304517745"><img src={facebook} alt="" /></a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/oleg-dziuba-858509239/"><img src={linkedin} alt="" /></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/_0leg.d/"><img src={instagram} alt="" /></a></li>
                </ul>
              </div>
                  
          </div>
          <div className='aboutMe__info'>
            <h2 className='aboutMe__title'>Привіт!</h2>
            <h5 className='aboutMe__subtitle'>Here's who I am & what I do</h5>
            <div className='aboutMe__wraplink'>
              <a href="https://drive.google.com/file/d/142pkcC3fWRx_LL6VB1pnUqi--yOTRmXg/view?usp=sharing">Резюме в pdf</a>
              <a href="https://github.com/Napolion4ik?tab=repositories">Проєкти</a>
            </div>
            <p className='aboutMe__text'>
            Front-End розробник з 1 роком
            досвіду. Працював в компанії "ArkNet" з початку 2023 року, в мої обов`язки входило створювати та підтримувати одно сторінкові вебсайти(SPA), займатися організацією структури відправки "лідів", різноманітні налаштуванням та підтримка серверів, інтеграцією з іншими CRM за допомогою API, оптимізування продуктивності та кроссбраузерну сумісність проєктів.
            </p>
            <p className='aboutMe__text'>
            Займався різними проєктами на фрілансі .Пристрасно цікавлюсь Front-End сферою а саме React розробникою, кожний день займаюсь саморозвитком і вдосконаленням своїх навичків.Родом я з Черніговської області, займаюсь футболом та маю власну пасіку дома. Закінчив курс з найкращою оцінкою на позицію Front End developer.
            </p>
          </div>
      </div>
    </section>
  )
}

export default AboutMe