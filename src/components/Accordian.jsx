import { useState } from "react"
import data from "./data"
import './style.css'

const Accordian = function(){

  const  [selected,setSelected] = useState(null)

  function handleOnClick(CurrentId){
    selected === CurrentId ? setSelected(null) : setSelected(CurrentId)
  }

  return <div className="wrapper">

    <button>Enable multiple selection</button>

    <div className="Acccordion">
        {data && data.length > 0 ? 
        
        data.map(dataItem => <div className="item" >
        <div className="title"  onClick={() =>handleOnClick(dataItem.id)}>
        <h3>{dataItem.question}</h3>
        <span>+</span>
        </div>
          {
            selected === dataItem.id ? <div className="content">{dataItem.answer}</div>: null
          }
        </div>
      )


        : <div> No data found</div> }
    </div>

  </div>
}

export default Accordian