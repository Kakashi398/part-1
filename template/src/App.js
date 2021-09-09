import React from 'react'

const Header =(props) => {
  return(
    <>
    {props.course}
    </>
  )
}

const Content = (props) => {
  return(
    <>
    <p>{props.part1} {props.exercises1}</p> 
    
    <p>{props.part2} {props.exercises2}</p>
    
    <p>{props.part3} {props.exercises3}</p>
    
    
    
    </>
  )
}

const Total = (props) => {
  return(
    <>
    {props.total}
    </>
  )
}

const App =() => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 =14 

  return(
   <div>
     <Header course={<h1>{course}</h1>} />
     
    <Content 
      part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
    />
     
    <Total total={
      <p>
      number of exercises total={exercises1 + exercises2 + exercises3}
      </p>
    } />

   
   
     

   </div>
  )
}

 
export default App