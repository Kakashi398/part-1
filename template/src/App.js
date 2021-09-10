import React from 'react'

const Header =(props) => {
  return(
    <>
    {props.course}
    </>
  )
}

const Part =(props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}



const Content = (props) => {
  return(
   <div>
    {
    <Part part= {props.part1} exercises={props.exercises1}/>}
    <Part part= {props.part2} exercises={props.exercises2}/>
    <Part part= {props.part3} exercises={props.exercises3}/>
   </div>
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
    
    const part1= {
      name: 'Fundamentals of React',
      exercises: 10
    } 

    const part2= {
       name: 'Using props to pass data',
        exercises: 7
    }

    const part3= {
      name: 'State of component',
      exercises: 14 
    }
  
  
   

  return(
   <div>
     <Header course={<h1>{course}</h1>} />
     
    <Content 
      part1={part1.name} exercises1={part1.exercises}
      part2={part2.name} exercises2={part2.exercises}
      part3={part3.name} exercises3={part3.exercises}
    />
     
    <Total total={
      <p>
      number of exercises total={part1.exercises + part2.exercises + part3.exercises}
      </p>
    } />

   
   
     

   </div>
  )
}

 
export default App
