import addtool from '../assets/partial-css/addtool.css';


function AddToolForm(){
     return(
          <form className="add-tool-form">
               <div>
                    <div>
                         <label>Product Name</label>
                         <input type="text" />
                    </div>
                    <div>
                         <label>Product Description</label>
                         <textarea rows="8"></textarea>
                    </div>
                    <div>
                         <label>URL</label>
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