import React from 'react'
import { useRef,useState } from 'react'
import { useDispatch } from 'react-redux';
import { todoAction } from '../store/TodoSlice';
import Messages from './Messages';






export default function Form2() {

    let dispatch = useDispatch();
    const [mess,setmessages] = useState(false);

    let name = useRef('');
    let age = useRef(null);
    let gander = useRef('');

    let handleForm = (e)=>{

        e.preventDefault();
        let ob = {
            name:name.current.value,
            age:age.current.value,
            gander:gander.current.value
        }

        if(ob.age<18 || ob.age > 60 || ob.name.length<3 || ob.name.length>=16 || ob.gander==""){
            setmessages(true)
            
        }else{
            dispatch(todoAction.addData(ob))
            setmessages(false)
            name.current.value="";
            age.current.value=null;
            gander.current.value = "";

        }

       

    }





  return (
    <div className="card">
        <div className="card-header">
            <h3 className='text-center'>Insert table</h3>
            {mess ? <Messages /> : ""}
        </div>
        <div className="card-body">

           <form method="post" onSubmit={handleForm}>
           <div className="mb-3">
                <label htmlFor="">Name</label>
                <input type="text" ref={name} name="name" className='form-control' placeholder='Inter name' />
            </div>
            <div className="mb-3">
                <label htmlFor="">Age</label>
                <input type="number" ref={age} name="age" className='form-control' placeholder='Inter age' />
            </div>
            <div className="mb-3">
                <select name="gander" ref={gander} id="" className="form-select">
                    <option value="">--Select Gander--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className='d-flex justify-content-end'>
                <input type="submit" value="Submit" className='btn btn-success' />
            </div>
           </form>
        </div>
    </div>
  )
}
