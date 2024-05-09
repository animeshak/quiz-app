import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'

function Quiz() {

  const [questions, setQuestions] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    (async() => {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get('http://localhost:8000/quiz/test')
      console.log(response.data);
      setQuestions(response.data[3])
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
    })()

  }, [])

  if(error){
    return<h1>Something went Wrong</h1>
  }

  if(loading){
    return<h1>Loading...</h1>
  }

return(
<>
<h2>MCQ Test</h2>
<>Quiz Name:{questions.quizname}</><br/>
<>Q1.{questions.question}</><br/>
<>1.{questions.opt1}</><br/>
<>2.{questions.opt2}</><br/>
<>3.{questions.opt3}</><br/>
<>4.{questions.opt4}</><br/>
</>

  )
}

export default Quiz