import { Link } from 'react-router-dom';
import navbar from '../assets/partial-css/navbar.css';


function Navbar(){
     return(
          <div className="navbar">
               <Link>
                    <div className="logo-container">
                         <img 
                         src="/images/aistash.png"
                         className="img-brand"
                         />
                    </div>
               </Link>  
               <div>
                    <Link>About</Link>
               </div>
          </div>
     )
}

export default Navbar;