import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Nav() {
    let isAuth = true
  return (
    <div>
        <div className="container-fluid bg-dark py-2">
        <div className="row">
            <div className="col-12">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">home</a>
                    </li>
                    <li className="nav-item">
                        <Link to={`/user/5`} className='nav-link' >profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/todo' className='nav-link'>todo</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/contact' className='nav-link'>form</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className='mt-5'>
    {isAuth ? <Outlet /> : <h1>You are not authticated</h1>}
    </div>
    </div>
  )
}
