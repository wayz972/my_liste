import React,{useState} from 'react'
import Items from './Items'

export default function Form() {
    const [dataArr, setDatarr]=useState([
        {txt:"promener le chien",id:1},
        {txt:"sport",id:2},
        {txt:"promenade",id:3},
    ])
    console.log(setDatarr)
    const [stateInput,setStateInput]=useState();

const modifier=(value)=>{
    setDatarr(value);
}

     const checkboxOpen=(box)=>{
        console.log(box)
     }
    const deleteElement =(id)=>{
        // const find = dataArr.find(item=>{
        //    return item.id== id 
        // })
      
       
        console.log(id)
        const filterState= dataArr.filter(item =>{
            return item.id !== id 
        })
        setDatarr(filterState)

    }
    const linkedInput=(e)=>{
        setStateInput(e)
    }
    const addtodo=(e)=>{
          e.preventDefault()
          const newArr =[...dataArr];
          const newTodo={};
          newTodo.txt=stateInput
          let change=dataArr.pop().id
          change++
           newTodo.id=change
           newArr.push(newTodo)
           setDatarr(newArr)
           setStateInput("")
    }
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
     <form onSubmit={(e)=>addtodo(e)} className='mb-3'>
<label htmlFor='todo' className='form-label mt-3'>
chose à faire
</label>
<input type="text" className='form-control' 
value={stateInput}
onInput={(e)=>linkedInput(e.target.value)}

id="todo"/>
       <button className="mt-2 btn btn-primary d-block">Envoyer</button>
     </form>

     <h2> Liste des choses à faires</h2>
     <ul className="list-group"></ul>
     
     {dataArr.map((item,index)=>{
        
         return <Items
         txt={item.txt}
          key={index}
         id={item.id}
         deleF={deleteElement}
         open={checkboxOpen}
         update={setStateInput}
         setter={modifier}
         
         
         />
     })}
    </div>
  )
}
