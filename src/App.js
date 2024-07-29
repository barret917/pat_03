import Cart from "./components/Cart"
import './App.css';


const questions=[
  {
    title:"React-это...?",
    variants:["Библиотека","Фреймворк","Прилложение"],
    correct:0,
  },
  {
    title:'Компонент-это...',
    variants:["Приложение","Часть приложения","Функция"]
  },
  {
    title:"Что такое JSX?",
    variants:["Это просто HTML","Это просто функция","Это тот же HTML,но с возможностью выполнять в JS"],
    correct:3
  }
]

function App() {
  return (
    <div className="App">
     <Cart/>
    </div>
  );
}

export default App;
