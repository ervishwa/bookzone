import React, { useEffect, useState ,  } from "react";
import { Button, Form } from "react-bootstrap";
import { useFirebase } from "../../context/FirebaseProvider";
import { useNavigate } from "react-router-dom";
export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithEmailPassword, signInWithGoogle,islogedIn} = useFirebase();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailPassword(username, password);
      alert("loged In");
      //console.log(user);
    } catch (err) {
      alert("logged In failed");
      console.log("eerr" + err.message);
    }
  };


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
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handelSubmit}>
          Login
        </Button>
      </Form>
      <p className="fs-4">Or</p>
      <Button className="bg-danger" onClick={signInWithGoogle}>
        LogIn With Google
      </Button>
    </div>
  );
}
