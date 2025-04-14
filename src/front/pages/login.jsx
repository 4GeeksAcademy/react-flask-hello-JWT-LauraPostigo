import React, { useEffect, useState } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate} from "react-router-dom"
export const Login = () => {


    const { store, dispatch } = useGlobalReducer()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate= useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try { const response = await login(email, password) 
            const data = await response.json()
            dispatch({type: "login_request", payload:{user:data.user, token:data.access_token}})
            navigate("/userAccount")
        } catch (error) {console.error("error de login", error) 
            
        }
    }
	const login = async(email,password)=>{
		return await fetch (import.meta.env.VITE_BACKEND_URL+"api/login",{
			method:"POST",
			headers: {"Content-Type":"application/json"},
			body: JSON.stringify({email, password})
		})
	}

    return (
		<div className="container mt-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
		<h2 className="mb-4">Inicio de sesion</h2>
	  
		<div className="mb-3">
		  <label htmlFor="email" className="form-label">Correo electrónico</label>
		  <input
			type="email"
			className="form-control"
			id="email"
			value={email}
			onChange={(e) => setemail(e.target.value)}
		  />
		</div>
	  
		<div className="mb-3">
		  <label htmlFor="password" className="form-label">Contraseña</label>
		  <input
			type="password"
			className="form-control"
			id="password"
			value={password}
			onChange={(e) => setpassword(e.target.value)}
		  />
		</div>
	  
		<div className="d-grid">
		  <button onClick={handleSubmit} className="btn btn-primary">Inicio de sesion</button>
		</div>
	  </div>
	);
    
}
    

    