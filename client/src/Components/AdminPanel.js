import React, { useState } from 'react'
import axios from 'axios'

const AdminPanel = ()=> {
 
const questions = {
  quizname:"",
  question:"",
  opt1:"",
  opt2:"",
  opt3:"",
  opt4:"",
  ans:""
}

const [question, setQuestion] = useState(questions)

const inputHandler = (e)=>{
  const {name, value} = e.target;
  setQuestion({...question, [name]:value})
}

const submitForm = async(e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8000/quiz/add",question)
  .then((response)=>{
    console.log(response)
  })
  .catch(error => console.log(error))
}

  return (
    <>
  <form onSubmit={submitForm}>
  <label>Quiz Name:</label>
    <input type="text" onChange={inputHandler} name="quizname" id='quizname' />
  <br/>
  
  <label>Question:</label>
  <input type="text" onChange={inputHandler} name="question" id='question'/>
  <br/>
  
  <label>Option1:</label>
  <input type="text" onChange={inputHandler} name="opt1" id='opt1'/>
  <br/>
  
  <label>Option2:</label>
  <input type="text" onChange={inputHandler} name="opt2" id='opt2'/>
  <br/>
  
  <label>Option3:</label>
  <input type="text" onChange={inputHandler} name="opt3" id="opt3" />
  <br/>
  
  <label>Option4:</label>
  <input type="text" onChange={inputHandler} name="opt4" id='opt4'/>
  <br/>
  
  <label>Answer:</label>
  <input type="text" onChange={inputHandler} name="ans" id='ans'/>
  <br/>
  
  <button>Add Question</button>

</form>
    </>
  )
}

export default AdminPanel