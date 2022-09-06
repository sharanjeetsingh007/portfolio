import React from 'react'
import "./CardSkill.css"

import Slide from 'react-awesome-reveal';




function CardSkill({ Desc, Icon }) {
    return (
        <Slide triggerOnce direction="bottom" duration={600}>

            <div className="CardSkill">

                {Icon}
                <p>{Desc}</p>



            </div>
        </Slide>
    )
}

export default CardSkill