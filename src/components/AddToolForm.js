import addtool from '../assets/partial-css/addtool.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function AddToolForm(){

     const [name, setName] = useState("");
     const [description, setDescription] = useState("");
     const [url, setUrl] = useState("");



     const handleSubmit = async (e) => {
          e.preventDefault();
          try{
               const result = await fetch(`${process.env.REACT_APP_API_URL}/tools`, {
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                         name: name,
                         description: description,
                         url: url
                    })
               });

               const data = await result.json();
               if(result.ok){

                    alert(data.msg);
                    window.location.reload(true);
               }else{
                    alert("Something went wrong");
               }
               
          }catch{
               alert('Fetch error');
          }
     }

     return(
          <form className="add-tool-form" onSubmit={handleSubmit}>
               <div>
                    <div>
                         <label>AI Tool Name</label>
                         <input 
                         type="text"
                         onChange={(e)=> setName(e.target.value)}
                         value={name}
                          />
                    </div>
                    <div>
                         <label>AI Tool Description</label>
                         <textarea 
                         rows="8"
                         onChange={e => setDescription(e.target.value)}
                         value={description}
                         ></textarea>
                    </div>
                    <div>
                         <label>AI Tool URL</label>
                         <input 
                         type="text"
                         onChange={e => setUrl(e.target.value)}
                         value={url}
                          />
                    </div>
               </div>
               <div>
                    <div className="img-container">
                         <img draggable="false" src="/images/ai-hand.png" className="img" />
                    </div>
                    <button>ADD TOOL</button>
               </div>
          </form>
     );
}

export default AddToolForm;