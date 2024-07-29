import React from "react";
import img from "./img/istockphoto-1125716911-612x612.jpg"
import style from "./Win.module.css"

export default function Win({res,questions}){
    return(
        <div>
            <img style={{width:"200px"}} src={img}></img>
            <p>Вы угадали {res} вопросов из {questions.length}</p>
            <a href="/">
            <button className={style.button}>Попробовать снова</button>
            </a>
        </div>
    )
}