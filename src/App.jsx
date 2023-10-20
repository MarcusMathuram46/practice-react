function Hello() {
  return(
    <p>Hello World</p>

  )
}

function App() {
  const now = new Date ();
  console.log(now);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
      
    </div>
  )
}

export default App
