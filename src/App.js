import { useState, useEffect } from 'react';


function App() {

  const [ tools, setTools ] = useState([])

  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/tools`)
    .then(result => result.json())
    .then(data => {
      setTools(data)
    })

  }, [])



  return (
    <div className="App">
      {tools.map(tool => {
        return(
          <div key={tool._id}>{tool.name}</div>
        )
      })}
    </div>
  );
}

export default App;
