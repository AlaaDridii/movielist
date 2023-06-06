import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';



const AddFilm = ({AddaFilm}) => {
        const [title, setTitle] = useState("");
        const [date, setDate] = useState("");
        const [description, setDescription] = useState("");
        const [imgUrl, setImgUrl] = useState("");
        const [rate, setRate] = useState("");
        
        const handleAddFilm = () => {

        console.log(title,"this is our tit")
        AddaFilm({
          title: title,
          rate: rate,
          imgUrl: imgUrl,
          date: date,
          description: description,
        });
      };
  return (
    <div>
      <ListGroup>
      <ListGroup.Item>
        <input placeholder='Entrer le nom de film...' 
        onChange={(e) => {
          setTitle(e.target.value);
        }}/>
      </ListGroup.Item>
      <ListGroup.Item>
      <input
        placeholder='Description...'
          onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      </ListGroup.Item>
      <ListGroup.Item>
      <input
        placeholder="image.."
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      </ListGroup.Item>
      <ListGroup.Item>
      <input
        placeholder="Evaluer le film de 1 à 5..."
        onChange={(e) => {
          setRate(e.target.value);
        }}
      />
      </ListGroup.Item>
      <ListGroup.Item>
      <input
        placeholder="Date de sortie..."
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      </ListGroup.Item>
    </ListGroup>
    <Button variant="success" onClick={()=>handleAddFilm()}>Ajouter</Button>{' '}

    </div>
  )
}

export default AddFilm
