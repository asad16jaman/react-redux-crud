import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {todoAction} from '../store/TodoSlice';
import { formAction } from '../store/FormSlice';




function Tr({name,gander,age,indx}){

    let dispatch = useDispatch();
    let offEdit = useSelector(store=>store.updateform.toggleForm)
    let ind = useSelector(store=>store.updateform.updateIndex)

    const deleteThis = (ind)=>{
      dispatch(todoAction.deleteData(ind))
    }
    const updateformView = ()=>{
      let ob = {
        name,
        gander,
        age
      }
      dispatch(formAction.viewupdateForm({
        ob,
        index:indx
      }))

    }

    const cancleUpdate = () =>{
      dispatch(formAction.viewinsertForm())
    }


    return <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gander}</td>
      <td>

        {(offEdit && ind==indx) ?  
        <>
          <button className='btn btn-light'>Edit</button> 
          <button className='btn btn-danger mx-2' onClick={cancleUpdate}>cancle</button>
        </>
        : 
        <>
          <button className='btn btn-primary' onClick={updateformView}>Edit</button>
          
        </>

        }

        {
          (ind!=indx) ? 
          (offEdit ) ? <button className='btn btn-light mx-2'>cancle</button>  : <button className='btn btn-danger mx-2' onClick={deleteThis.bind(this,indx)} >Delete</button>
          : ""
          
        }

        
        
      </td>
   
  </tr>
}

export default function Table() {
    const data = useSelector(store=>store.todo)
   
  return (
    <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gander</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {data.map((ele,ind)=>{
                return <Tr name={ele.name} gander={ele.gander} age={ele.age} key={ind} indx={ind}/>
              })}
          </tbody>
        </table>
  )
}
