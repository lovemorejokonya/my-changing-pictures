import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import './App.css';
import MyCard from './MyCard'

  const animals = [
    {name: 'tiger', image: '/images/tiger.jpeg'},
    {name: 'bird', image: '/images/bird.jpeg'},
    {name: 'deer', image: '/images/deer.jpeg'},
    {name: 'lion', image: '/images/lion.jpeg'},
    {name: 'peecock', image: '/images/peecock.jpeg'},
    {name: 'zebra', image: '/images/zebra.jpeg'},
  ]


function App() {

  const [html, setHtml] = useState(<MyCard number={0}></MyCard>)

  const renderCards = () => {
    return animals.map((animal, idx) => {
      setTimeout(() => {
        setHtml(<MyCard number={idx} image={animal.image} name={animal.name} ></MyCard>)
      },  idx * 1200)
    })
  }
  
  useEffect(()=>{
    renderCards()
  },[])

  return (
    <div className="App">
      <h1> Welcome to my changing animal pictures </h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          {html}
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
