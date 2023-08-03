
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function Addbook() {
 const[bookname,setBookname] = useState("");
 const[author,setAuthor] = useState("");
 const[price,setPrice] = useState("");
 const[coverpic,setCoverPic] = useState("");
 
  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Pic</Form.Label>
          <Form.Control
            type="file"
            placeholder="Select Cover Pic"
            value={coverpic}
            onChange={(e) => setCoverPic(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" >
          AddBook
        </Button>
      </Form>
     
    </div>
  )
}

