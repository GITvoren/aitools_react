import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import AddToolForm from './components/AddToolForm.js';



function App() {

  const [ tools, setTools ] = useState([])

/*   useEffect(() => {

    fetch(`${process.env.REACT_APP_API_URL}/tools`)
    .then(result => result.json())
    .then(data => {
      setTools(data)
    })

  }, []) */



  return (
    <div className="App">
        <Navbar />
        <div className="container">
          <AddToolForm />
        </div>
    </div>
  );
}

export default App;
