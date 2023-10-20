import React from 'react'

function App() {

  
  const now = new Date ();

  // simple addition
  const a = 25;
  const b = 25;

  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>

      <p>
        {a} plus {b} is 50
      </p>
    </div>
  )
}

export default App


