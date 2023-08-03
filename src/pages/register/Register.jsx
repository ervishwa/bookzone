import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFirebase } from "../../context/FirebaseProvider";
import { useNavigate } from "react-router-dom";

export function Register() {

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

     const {signupUserWithEmailPassword,islogedIn} = useFirebase();
     
    const handelSubmit =async (e)=>{
     e.preventDefault();
     try{
        const data = await signupUserWithEmailPassword(username,password);
         alert("register success");
         //console.log(data);
     }catch(err){
        alert(err.message);
        //console.log(err);
     }
      
    } 
    const navigate = useNavigate();
    useEffect(()=>{
        if(islogedIn){
         navigate('/')
        }
      },[islogedIn])

  return (
    <div className="container-fluid mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handelSubmit}>
          Register
        </Button>
      </Form>
    </div>
  );
}
