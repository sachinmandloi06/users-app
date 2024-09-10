import React, { useContext, useEffect } from 'react'
import { fetchUser } from '../providers/UserActions'
import { useParams } from 'react-router-dom';
import UserContext from '../providers/UserContext';

const UserPage = () => {

  const {dispatch,user} = useContext(UserContext)

   const {id} = useParams();
   

   const getUser = async(id) => {
    const data = await fetchUser(id);
    dispatch({
      type : "GET_USER",
      payload : data,
    })
   }
 

useEffect(() => {
  getUser(id);
},[]);

   if(!user){
    return(
      <h1 className="text-center my-5 text-secondary">Loading...</h1>
    )
   }

  return (
    <div className='container p-5'>
        <h1 className="text-center">{user.firstName} {user.lastName}</h1>

        <div className="card p-3 text-center">
        <img 
                 style={{ height: "120px" , objectFit: "contain"}}
                 src={user.image} alt="Not Found Image" />
        <p>Gender: {user.gender} </p>
        <p>Email : {user.email} </p>
        <p>Address : {user?.company?.address.address} </p>
        <a href={`tel:${user.phone}`} className='btn btn-success '>Phone : {user.phone} </a>
        </div>

    </div>
  )
}

export default UserPage
