import { useState } from 'react';
import './App.css';

function App() {
  const [myimg,setMyImg] = useState("https://picsum.photos/id/237/200/300")
  const [counter,setCounter]= useState (0)

  function handleAdd(){
    setCounter(counter+1)
  }
  function handleSubstract(){
    setCounter(counter-1)
  }
  return (
    <div className='body'>
      <div className='container'>
        <img src={myimg} alt='foto'></img>
        <div id='photos'>
        <img onClick={(e)=>{setMyImg(e.target.src)}} src='https://picsum.photos/id/237/200/300' alt='foto'></img>
        <img onClick={(e)=>{setMyImg(e.target.src)}} src='https://picsum.photos/seed/picsum/200/300' alt='foto'></img>
        <img onClick={(e)=>{setMyImg(e.target.src)}} src='https://picsum.photos/200/300?grayscale' alt='foto'></img>
        </div>
      </div>

      <h1>{counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubstract}>Substract</button>
    </div>
  );
}

export default App;
