import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import React, { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import "../css/game.css"
import TextField from '@mui/material/TextField';


export default function Game() {
  const userId = useSelector((state: RootState) => state.user.id);
  const [gamePlayed, setGamePlayed] = useState(0)
  const [score, setScore] = useState(0)
  console.log("userId: ", userId)

  const scoreRef = createRef<any>();

  const onSubmitGame = () => {
    setGamePlayed(gamePlayed + 1)
    setScore(parseInt(scoreRef.current.value))
  }

  useEffect(() => {
    loadCurrentStat()
  }, [])

  const loadCurrentStat = async () => {
    try {
      console.log("Init stat")
      console.log("userId:", userId)
      const res = await fetch(`http://localhost:8000/user/id/${userId}/state`);


      if (res.ok) {
        console.log("successfully loaded score")
        const data = await res.json()

        const gamePlayedDB = data.gamePlayed
        const scoreDB = data.score
        setGamePlayed(gamePlayedDB)
        setScore(scoreDB)
      } else {
        console.log("load score failed")
      }


    } catch (e) {
      console.log(e);
    }
  }



  useEffect(() => {
    if (score) {
      changeStat()
    }
  }, [gamePlayed, score])

  const changeStat = async () => {
    try {
      console.log("score / gamePlayed changed. Fetch now")
      console.log({ gamePlayed, score })
      console.log("userId:", userId)
      const res = await fetch(`http://localhost:8000/user/id/${userId}/state`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gamePlayed: gamePlayed,
          score: score
        }),
      });
      if (res.ok) {
        console.log("successfully submitted score")
      } else {
        console.log("submit score failed")

      }
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="page-container">
      <Card className="user-profile-container">

        <div className="text">Game Played: {gamePlayed}</div>

        <div className="text">Highest Score: {score}</div>
      </Card>

      {/* <TextField id="outlined-basic" label="Scores in This Game" variant="outlined" ref={scoreRef} margin="normal" /> */}

      <div style={{ marginBottom: 20 }}>
        Scores in This Game : <input ref={scoreRef} type="text" />
      </div>

      <Button variant="contained" color="success"
        onClick={() => {
          onSubmitGame()
        }}
      >
        Completed a Game!
      </Button>

    </div>
  )
}
