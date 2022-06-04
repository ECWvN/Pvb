import React from 'react'
import "./ProductList.css"
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../firebase';
import { useNavigate } from 'react-router';
import { AuthContext } from "../../context/AuthContext";
import {auth} from "../../firebase"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ContentCutOutlined } from '@mui/icons-material';
import { useEffect } from 'react';

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
        <h1>Niew gerecht:</h1>
        <div className="inputGp">
          <label> Week</label>
          <input
            placeholder="ma Week 1"
            onChange={(event) => {
              setWeek(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <input
            placeholder="Post..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setIngred(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
      </div>
    </div>
  );
}


export default ProductList;