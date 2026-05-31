
import './Cards.css'


function Cards(props){

    return(
         <div className='card' style={props.style}>
             <p>{props.name}</p>
             <img id='img' src={props.img} alt=""/>
             <p>{props.desc}</p>

             <input type="text" placeholder="Enter Name" onChange={function(e){props.setName(e.target.value)}}/>
            <p>Im writng name: {props.name}</p>
         </div>


    )

}

export default Cards