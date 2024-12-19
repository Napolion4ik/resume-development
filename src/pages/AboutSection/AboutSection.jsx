import React from "react";
import Ticker from "../../components/Ticker/Ticker";
import icons1 from "../../images/icons.svg";
import icons2 from "../../images/icons-2.svg";
import icons3 from "../../images/icons-3.png";
import icons4 from "../../images/icons-4.png";
import workPlace from "../../images/work-place.webp";
import workMan from "../../images/work-man.png";
import rotateText from "../../images/rotate-text.svg";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contacts from "../../components/Contancts/Contacts";
import { motion } from "framer-motion";



const textAnimation = {
  hidden : {
    x: -100,
    opacity: 0,
  },
  visible : custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}
const textAnimationRight = {
  hidden : {
    x: 100,
    opacity: 0,
  },
  visible : custom => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.2}
  })
}
const imageShow = {
  hidden : {
    opacity: 0,
  },
  visible : {
    opacity: 1,
    transition: {delay: 3 * 0.3}
  }
}



const AboutSection = () => {


  return (
    <>
      <motion.section
        initial="hidden"
        className="about"
        whileInView="visible"
      >
        <Ticker title="Front-End" direction="left" />
        <Ticker title="Developer" direction="right" />
        <div className="container">
          <div className="desc">
            <div className="desc__text">
              <motion.h2 custom={1} variants={textAnimation} className="desc__title">Front-End React Developer 👋</motion.h2>
              <motion.p custom={2} variants={textAnimation} className="desc__forme">
                Привіт, Я Олег Дзюба. Молодий Front-End розробник. Проживаю в
                Україні, місто Київ 🌇
              </motion.p>
              <motion.ul  custom={3} variants={textAnimation} className="desc__social">
                <li className="desc__social--item">
                  <a href="#" className="desc__social--link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                    </svg>
                  </a>
                </li>
                <li className="desc__social--item">
                  <a href="#" className="desc__social--link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                    </svg>
                  </a>
                </li>
              </motion.ul>
            </div>
            <motion.div variants={imageShow} className="desc__photo"></motion.div>
          </div>
          <motion.div  custom={4} variants={textAnimation} className="tech-skill">
            <p >Технічний стек</p>
            <ul   className="tech-skill__list">
              <li className="tech-skill__item">
                <img src={icons1} alt="" />
              </li>
              <li className="tech-skill__item">
                <img src={icons2} alt="" />
              </li>
              <li className="tech-skill__item">
                <img src={icons3} alt="" />
              </li>
              <li className="tech-skill__item">
                <img src={icons4} alt="" />
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
     
      <motion.section  
        initial="hidden"
        whileInView="visible"  
        className="about-me"
        viewport={{once: "true", amount: 0.4}}
      >
        <div className="container about-me__wrap">
          <motion.div custom={3} variants={textAnimation} className="about-me__box">
              <img src={workPlace} alt="Work Place" />
              <img src={workMan} className="about-me__work" alt="" />
              <span className="about-me__title"><img src={rotateText} alt="" /></span>
          </motion.div>
          <motion.div custom={3} variants={textAnimationRight} className="about-me__text">
            <h3 className="section__title">Про мене</h3>
            <h4 className="section__subtitle about-me__subtitle">
              Висококваліфікований Front-end розробник із Києва, Україна 📍
            </h4>
            <p  className="about-me__subtext">
            Як Front-End розробник, я володію вражаючим арсеналом навичок у HTML, CSS, JavaScript, React, Redux, PHP і SCSS. Я чудово розробляю та підтримую адаптивні веб-сайти, які забезпечують зручну взаємодію з користувачем. Мій досвід полягає в створенні динамічних, привабливих інтерфейсів шляхом написання чистого й оптимізованого коду та використання передових інструментів і методів розробки. Я володію відмінним аналітичним та комунікативними навичками, що дозволяють мені ефективно співпрацювати в команді та взаємодіяти з іншими учасниками проекту.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <Portfolio />
      <Contacts />
    </>
  );
};

export default AboutSection;
