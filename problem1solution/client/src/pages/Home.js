
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import '../styles/home.css'
const Home = () => {
    const [users, setUsers] = useState([])
    const currentUsers = () => {
        Axios.get("http://localhost:3001/").then((response) => {
            setUsers(response.data)
        })
    }
    useEffect(currentUsers,[users])
    return (
        <div className='users'>
            <button onClick={currentUsers}>View users</button>
            {users.map((val) => {
                return (
                    <p> {val.user_name}</p>
                );
            })}
        </div>
    )
}

export default Home
