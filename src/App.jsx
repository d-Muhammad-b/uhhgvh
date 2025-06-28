import data from '../public/data'
import './App.css'
import CARD from './card/CARD'

function App() {
  return (
    <div>
      <header>
        <nav><ul><h2>Exclusive</h2></ul>
        <ul><h1>home</h1><h1>contact</h1><h1>about</h1><h1>sing up</h1></ul>
        <ul><input type="text" placeholder='What are you looking for?'/> 
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
          </ul></nav>
      </header>
      <main>
        <div className="top"><h2>product</h2><button>move all to bag</button></div>
        <div className="ota">
          {data.map((m,i)=>{
            return    <CARD key={i} ism={m.name} narx={m.price} rasm={m.img}></CARD>
          })}
       
        </div>
      </main>

    </div>
  )
}

export default App
