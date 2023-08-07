import addtool from '../assets/partial-css/addtool.css';


function AddToolForm(){
     return(
          <form className="add-tool-form">
               <div>
                    <div>
                         <label>AI Tool Name</label>
                         <input type="text" />
                    </div>
                    <div>
                         <label>AI Tool Description</label>
                         <textarea rows="8"></textarea>
                    </div>
                    <div>
                         <label>AI Tool URL</label>
                         <input type="text" />
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