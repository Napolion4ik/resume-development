import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPhoneVolume,
   faEnvelope,
   faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const textAnimation = {
   hidden: {
      x: -100,
      opacity: 0,
   },
   visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
   }),
};
const blockAnim = {
   hidden: {
      y: 10,
      opacity: 0,
   },
   visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 },
   }),
};

const Contacts = ({classMode}) => {

const combineClass = `contacts ${classMode}`

   return (
      <motion.section
         initial="hidden"
         whileInView="visible"
         viewport={{ once: "true", amount: 0.2 }}
         className={combineClass}
      >
         <div className="container">
            <motion.h3
               variants={textAnimation}
               custom={1}
               className="section__title"
            >
               Контакти
            </motion.h3>
            <motion.h4
               variants={textAnimation}
               custom={2}
               className="section__subtitle"
            >
               Не соромся! Телефонуй! 👇
            </motion.h4>
            <div className="contacts__list">
               <motion.div variants={blockAnim} custom={4} className="contacts__item">
                  <span className="contacts__icon">
                     <FontAwesomeIcon icon={faPhoneVolume} size="lg" />
                  </span>
                  <div>
                     <p className="contacts__title">Мій номер телефону</p>
                     <a href="tel:380671542343" className="contacts__link">
                        +380671542343
                     </a>
                  </div>
               </motion.div>
               <motion.div variants={blockAnim} custom={5} className="contacts__item">
                  <span className="contacts__icon">
                     <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </span>
                  <div>
                     <p className="contacts__title">Моя почта</p>
                     <a
                        href="mailto:dziubaoleg20@gmail.com"
                        className="contacts__link"
                     >
                        dziubaoleg20@gmail.com
                     </a>
                  </div>
               </motion.div>
               <motion.div variants={blockAnim} custom={6} className="contacts__item">
                  <span className="contacts__icon">
                     <FontAwesomeIcon icon={faPaperPlane} />
                  </span>
                  <div>
                     <p className="contacts__title">Мій телеграм</p>
                     <a
                        href="https://t.me/olego2000"
                        className="contacts__link"
                     >
                        @olego2000
                     </a>
                  </div>
               </motion.div>
            </div>
         </div>
      </motion.section>
   );
};

export default Contacts;
