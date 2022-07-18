import React, { useEffect, useState } from 'react';
import '../../App.css';
import GithubUsers from './github/githubUsers';
import Loading from './github/loading';

const UseEffectAPI = () => {

   const [users, setUsers] = useState([])
   const [loading, setLoading]= useState(true);

   const getUsers = async() => {
      try {
         const response = await fetch("https://api.github.com/users");
         setUsers(await response.json());
         setLoading(false);
      }catch (error){
         setLoading(false);
         console.log("my error is: " + error);
      } 
   }

 useEffect( () => {
    getUsers();
 }, []);

  if(loading){
   return <Loading />
  }

  return (
    <>
      <GithubUsers users={users}/>
    </>
  )
}

export default UseEffectAPI;