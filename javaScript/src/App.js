import React, { useState } from 'react'

// const Header =(props) => {
//   return(
//     <>
//     <h1>{props.course}</h1>
//     </>
//   )
// }

// const Part =(props) => {
//   return(
//     <p>{props.part} {props.exercises}</p>
//   )
// }



// const Content = (props) => {
//   return(
//    <div>
//     <Part part= {props.parts[0].name} exercises={props.parts[0].exercises} />
//     <Part part= {props.parts[1].name} exercises={props.parts[1].exercises} />
//     <Part part= {props.parts[2].name} exercises={props.parts[2].exercises} />
//    </div>
//   )
// }

// const Total = (props) => {
//   return(
//     <>
//     <p>total exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//     </p> </>
//   )
// }

const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <div>
        the app is used br pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join ('')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick= {handleClick}>
    {text}
  </button>
)

const App =() => {
  const [clicks, setClicks] = useState({
    left:0,
    right:0
  })

  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setClicks({...clicks,
      left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setClicks({ ...clicks,
      right: clicks.right + 1})
  }
  
  
  // const course = {
  //   name: 'Half Stack application development',
  //    parts: [

  //     {
  //       name: 'Fundamentals of React',
  //       exercises: 10
  //     },
  
  //     {
  //        name: 'Using props to pass data',
  //        exercises: 7
  //     },
  
  //     {
  //       name: 'State of component',
  //       exercises: 14 
  //     }
  //   ]
  // }
  
  
   

  return(
   <div>
     {clicks.left}
     <Button handleClick={handleLeftClick} text='left' />
     <Button handleClick={handleRightClick} text='right' />
      
     
     {clicks.right}

     <p>{allClicks.join('')}</p>
     < History allClicks={allClicks} />

     {/* <Header course={course.name} />
     
    <Content parts= {course.parts}/>
     
    <Total parts={course.parts} /> */}

   
   
     

   </div>
  )
}

 
export default App
