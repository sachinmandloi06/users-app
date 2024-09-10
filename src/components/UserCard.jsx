import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="card p-3 rounded-0 shadow-sm">
                 <img 
                 style={{ height: "120px" , objectFit: "contain"}}
                 src={user.image} alt="Not Found Image" />
                 <h4 className=" text-center mt-4 ">{user.firstName} {user.lastName}</h4>
                 <p className='text-center text-secondary'>Email : {user.email}</p>
                 <Link to={`/user/${user.id}`}className='btn btn-outline-dark btn-sm'>View</Link>
                </div>
            </div>
  )
}

export default UserCard
