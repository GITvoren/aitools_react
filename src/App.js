import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import AddToolForm from './components/AddToolForm.js';
import Tool from './components/Tool.js';
import navtabs from './assets/partial-css/navtabs.css';



function App() {


  const [ tools, setTools ] = useState([]);
  const [ toggleActive, setToggleActive ] = useState(1);

  const handleToggleTab = (tabNumber) => {
    setToggleActive(tabNumber);
}

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
          <ul className="nav-tabs">
            <li 
            className={toggleActive == 1 ? "active" : ""}
            onClick={() => handleToggleTab(1)}
            
            >Tools</li>
            <li 
            className={toggleActive == 2 ? "active" : ""}
            onClick={() => handleToggleTab(2)}
            >Add</li>
          </ul>
          {
            toggleActive == 1 ?
            <div>
              <h1 className="home-title">AI Productivity Tools</h1>
              <div className="list-container">
                  <Tool />
                  <Tool />
                  <Tool />
              </div>
            </div>
            :
            <AddToolForm />
          }
          
        </div>
    </div>
  );
}

export default App;
