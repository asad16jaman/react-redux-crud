import React from 'react'
import Form2 from '../component/Form'
import Table from '../component/Table'
import { useSelector } from 'react-redux';
import UpdateForm from '../component/UpdateForm';


export default function Todo() {
  let update = useSelector(store=>store.updateform)
  return (
    <div className="container-fluid container-md">
        <div className="row mt-5">
            <div className="row">
                <div className="col-lg-6">
                <Table />
                </div>
                <div className="col-lg-6">
                  {(update.toggleForm) ?  <UpdateForm />:<Form2 />   }
                    
                </div>
            </div>
        </div>
    </div>
  )
}
