import React from "react";
import style from "./Cart.module.css"

export default function Cart({question,press,cardInfo}){
    return(
        <div className={style.cart}>
            <div className={style.boxRange}>
        <div
            className={style.range}
            style={{
                width: `${cardInfo}%`,
                backgroundColor:
                    cardInfo >=80
                        ? 'green'
                        : cardInfo > 50
                        ? 'orange'
                        : 'blue',
            }}
        ></div>
    </div>
            <h1 className={style.title}>{question.title}</h1>
            <ul>
                {question.variants.map((item,index)=>{return <li onClick={()=>{press(index)}} className={style.element} key={index}>{item}</li>})}
            </ul>

        </div>
    )
}