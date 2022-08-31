import React from 'react'
import "./CardSkill.css"

import Slide from 'react-reveal/Slide';


function CardSkill({ Desc, Icon }) {
    return (
        <Slide bottom duration={600}>

            <div className='CardSkill'>
                {Icon}
                <p>{Desc}</p>

            </div>
        </Slide>
    )
}

export default CardSkill