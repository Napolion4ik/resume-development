import React from "react";
import pizzaSite from "../../images/pizza-site.png";
import desireSite from "../../images/desire-site.png";
import gameShop from "../../images/game-shop.png";
import mebliShop from "../../images/mebli-site.png";
import expoformSite from "../../images/expoform-site.png";
import goTripsite from "../../images/goTrip-site.png";
import candleSite from "../../images/candle-site.png";
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
      y: 100,
      opacity: 0,
   },
   visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
   }),
};

const Portfolio = ({desc}) => {
   return (
      <motion.section
         initial="hidden"
         whileInView="visible"
         viewport={{ once: "true", amount: 0.2 }}
         className="portfolio"
      >
         <div className="container">
            <motion.h3
               variants={textAnimation}
               custom={1}
               className="section__title"
            >
               Портфоліо
            </motion.h3>
            <motion.h4
               variants={textAnimation}
               custom={2}
               className="section__subtitle"
            >
               {desc ? desc : " Кожен проект - це унікальна розробка🧩"}
              
            </motion.h4>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  className="portfolio__item"
                  variants={blockAnim}
                  custom={1}
               >
                  <div className="portfolio__view">
                     <img
                        src={pizzaSite}
                        className="portfolio__view_pizza"
                        alt=""
                     />
                  </div>
                  <div className="portfolio__desc">
                     <h5>MAMAMIA PiZZA 🍕</h5>
                     <p>
                        Ця піцерія могла би конкорувати з гігантами харчової
                        індустрії, але це тільки мрія( В цьому сайті я
                        використав React, Redux Toolkit, SCSS. Створив функції
                        сортування піцци, додавання, видалення піцц в корзині.
                        Використав "прелоадер" у вигляді карточки товара.
                     </p>
                     <div className="portfolio__stack">
                        <p>React</p>
                        <p>SCSS</p>
                        <p>Redux</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://github.com/Napolion4ik/reactPizzaShop">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a
                           target="_blank"
                           href="https://classy-mooncake-0b01e6.netlify.app/"
                        >
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  variants={blockAnim}
                  custom={1}
                  className="portfolio__item"
               >
                  <div className="portfolio__desc">
                     <h5>Desire Shop</h5>
                     <p>
                        Після перегляду цього сайту ви захочите цю мебель собі в
                        дім, при розробці цього сайту було використано слайдери,
                        grid сітка, таби.
                     </p>
                     <div className="portfolio__stack">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JS</p>
                        <p>JQuery</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://github.com/Napolion4ik/desireSite">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a href="https://darling-cranachan-89dbc3.netlify.app/">
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="portfolio__view">
                     <img
                        src={desireSite}
                        className="portfolio__view_disere"
                        alt=""
                     />
                  </div>
               </motion.div>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  className="portfolio__item"
                  variants={blockAnim}
                  custom={1}
               >
                  <div className="portfolio__view">
                     <img
                        src={gameShop}
                        className="portfolio__view_game"
                        alt=""
                     />
                  </div>
                  <div className="portfolio__desc">
                     <h5>Game Store</h5>
                     <p>
                        Магазин ігор, з реалізацією корзини, сторінки гри з
                        коротким описом та відео.
                     </p>
                     <div className="portfolio__stack">
                        <p>React</p>
                        <p>Material UI</p>
                        <p>Redux</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://github.com/Napolion4ik/gameStore-React-Redux">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a
                           target="_blank"
                           href="https://hilarious-pixie-8037aa.netlify.app/"
                        >
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  variants={blockAnim}
                  custom={1}
                  className="portfolio__item"
               >
                  <div className="portfolio__desc">
                     <h5>Furniture Test</h5>
                     <p>
                        Магазин меблів, реалізовано за допомогою пакувальника
                        webpack, задля цього проекту власноруч налаштував
                        webpack для оптимізації проекту.На сайті присутні "таби" слайдери які написані на JQuery
                     </p>
                     <div className="portfolio__stack">
                        <p>Webpack</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JS</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://marvelous-biscotti-5df672.netlify.app/">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a href="https://marvelous-biscotti-5df672.netlify.app/">
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="portfolio__view">
                     <img
                        src={mebliShop}
                        className="portfolio__view_mebli"
                        alt=""
                     />
                  </div>
               </motion.div>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  className="portfolio__item"
                  variants={blockAnim}
                  custom={1}
               >
                  <div className="portfolio__view">
                     <img
                        src={expoformSite}
                        className="portfolio__view_expoform"
                        alt=""
                     />
                  </div>
                  <div className="portfolio__desc">
                     <h5>EXPOFORUM</h5>
                     <p>
                        Проект на React, мені було цікаво реалізувати веб
                        додаток в якому можна додавати, шукати переклад слова, і
                        проходити quiz тести , дизайн сайта так собі, але
                        головне те що в середині)
                     </p>
                     <div className="portfolio__stack">
                        <p>React</p>
                        <p>SCSS</p>
                        <p>Redux</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://github.com/Napolion4ik/english-quize-learn">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a
                           target="_blank"
                           href="https://unrivaled-daifuku-b06eb4.netlify.app/"
                        >
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  variants={blockAnim}
                  custom={1}
                  className="portfolio__item"
               >
                  <div className="portfolio__desc">
                     <h5>Candle</h5>
                     <p>
                        На сайті представлено широкий вибір ручно виготовлених свічок різних форм, розмірів та ароматів. Використано багато нових css властивостей які були додані доволі не давно, використано як flex так і grid,пристуні слайдери та акардеон, все максимально оптимізовано для швидкого завантаження сторінки.
                     </p>
                     <div className="portfolio__stack">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JS</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://marvelous-biscotti-5df672.netlify.app/">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a href="https://marvelous-biscotti-5df672.netlify.app/">
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="portfolio__view">
                     <img
                        src={candleSite}
                        className="portfolio__view_candle"
                        alt=""
                     />
                  </div>
               </motion.div>
            </motion.div>

            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: "true", amount: 0.5 }}
            >
               <motion.div
                  variants={blockAnim}
                  custom={1}
                  className="portfolio__item"
               >
                   <div className="portfolio__view">
                     <img
                        src={goTripsite}
                        className="portfolio__view_gotrip"
                        alt=""
                     />
                  </div>
                  <div className="portfolio__desc">
                     <h5>GoTrip</h5>
                     <p>
                        Сайт візитка для агенства подорожів, викроситання css,
                        html, jquery, js
                     </p>
                     <div className="portfolio__stack">
                        <p>HTML</p>
                        <p>JQuery</p>
                        <p>CSS</p>
                        <p>JS</p>
                     </div>
                     <div className="portfolio__link">
                        <a href="https://genuine-squirrel-c52d00.netlify.app/#">
                           Код
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-brand-github"
                           >
                              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                           </svg>
                        </a>
                        <a href="https://github.com/Napolion4ik/GoTrip-site">
                           Перегляд
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="tabler-icon tabler-icon-external-link"
                           >
                              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                              <path d="M11 13l9 -9"></path>
                              <path d="M15 4h5v5"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
                 
               </motion.div>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default Portfolio;
