import React from 'react'
import "./ProductList.css"
import { useState } from 'react';
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../firebase';
import { useNavigate } from 'react-router';
import {auth} from "../../firebase"

function ProductList() {
  const [title, setTitle] = useState("");
  const [week, setWeek] = useState("");
  const [ingred, setIngred] = useState("");

  const postsCollectionRef = collection(db, "menu");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      week,
      title,
      ingred,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/menu");
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Niew gerecht</h1>
        <div className="inputGp">
          <label> Week</label>
          <input  className="productinput"
            placeholder="ma Week 1"
            onChange={(event) => {
              setWeek(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Naam Gerecht</label>
          <input className="productinput"
            placeholder="Pasta, sushi....."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Naam Gerecht</label>
          <textarea className="productinput"
            placeholder="basis ingredieneten...."
            onChange={(event) => {
              setIngred(event.target.value);
            }}
          />
        </div>
        <button className= "nieuwger"onClick={createPost}> Plaatsen</button>
      </div>
    </div>
  );
}


export default ProductList;