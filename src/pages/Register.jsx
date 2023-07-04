import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const storageRef = ref(storage, displayName);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
    (error) => {
      setErr(true);
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL:downloadURL,
        });
        await setDoc(doc(db, "users", res.user.uid), {
          uid:res.user.uid,
          displayName,
          email,
          photoURL:downloadURL
      });
    });
  }
);
    } catch (error) {
      setErr(true);
    }
  }
  return (
    <div className='Register'>
      <div className="formWrapper">
        <div className="blur"></div>
        <div className="blur"></div>
        <span className="logo">PrivateChat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Name' />
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password' />
            <input type="file" name="" id="file" style={{display: 'none'}} />
            <label htmlFor="file"><i class="fa-regular fa-image"></i><span>Select image</span></label>
            <button className="button">Sign Up</button>
            { err && <span>Something went wrong :(</span> }
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
