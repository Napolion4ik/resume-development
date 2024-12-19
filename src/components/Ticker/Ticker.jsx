import React from 'react'

const Ticker = ({title, direction}) => {
  return (
    <div className="ticker">
        <div className="ticker__wrapper">
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
            <div className={`ticker__item ticker__item--${direction}`}>{title}</div>
        </div>
    </div>
  )
}

export default Ticker