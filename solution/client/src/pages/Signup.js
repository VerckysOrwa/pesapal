import  React,{useState } from "react"
import Axios from "axios"
import "../styles/signup.css"
const Signup = () => {
    const [username, setUsername] = useState("")
    const[password,setPassword]=useState("")
    const[notification,setNotification]=useState("")
    const register=()=>{
    Axios.post("http://localhost:3001/register",{
        username:username,
        password:password,
    }).then((response)=>{
        setNotification(response.data.message)
    })
    }

const prevent=e=>e.preventDefault()
    return (
      <div className='formHolder'>
        <form onSubmit={prevent}>
                <label>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value) } name="username"placeholder="Enter username"/>
                <label>Password</label>
                <input type="password" onChange={(e) =>  setPassword(e.target.value) } name="password" placeholder="Enter password"/>
        <button onClick={register}>SIGNUP</button>
        </form>
        <p>{notification}</p>
      </div>
    );
}

export default Signup
