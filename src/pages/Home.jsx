import React, { useContext, useEffect } from 'react'
import UserCard from '../components/UserCard'
import UserContext from '../providers/UserContext'
import { fetchUsers } from '../providers/UserActions'

const Home = () => {


  const {users , dispatch} = useContext(UserContext);

   const getUsers = async () => {
    const users = await fetchUsers();
    dispatch({
      type : "GET_USERS",
      payload : users,
    });
   };

   
   useEffect(() => {
    getUsers();
   }, []);

    if (!users){
      return(
      <div className="container p-5 text-center">
      <h1 className='display-1 text-secondary'>Loading...</h1>
    </div>
      )
    } 

  return (
    <div className="container p-5">
        <h1 className="text-center text-secondary display-5">All Users</h1>

        <div className="row">
            {
              users.map(user => <UserCard key={user.id} user={user}/>)
            }
        </div>

    </div>
  )
}

export default Home
