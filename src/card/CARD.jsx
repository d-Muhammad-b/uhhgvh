import './card.css'

function CARD(props) {

    
    return (
        <div className='card'>
            <img src={props.rasm} alt="" />
            <button className='btn'>shop</button>
            <h1>{props.ism}</h1>
            <p>{props.narx}</p>
        </div>
    )
}

export default CARD
