import React from 'react'
import { motion } from "framer-motion"

const ButtonTheme = () => {

const changeThemeHandler = () => {
    
    
    const themeColor = localStorage.getItem("theme");
    if(themeColor === "light") {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
    }      
      else {
        document.querySelector("body").classList.remove("dark");
          document.querySelector("body").classList.add("light")
      } 
      
    themeColor === "light" ? 
         localStorage.setItem("theme", "dark")
      :  localStorage.setItem("theme","light")

}


  return (
    <motion.div 
      className="header__theme"
      initial={{ opacity: 0, x: "1000%" }}
      animate={{ opacity: 1, x: "0" }}
      transition={{ duration: 0.5 }}
    >
            <label className='switch'>
                <input type="checkbox" onChange={changeThemeHandler} className='switch__input' name="" id="" />
                <span className='switch__slider'></span>
            </label>
    </motion.div>
  )
}

export default ButtonTheme