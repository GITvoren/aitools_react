import tool from '../assets/partial-css/tool.css';


const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita, blanditiis laboriosam quibusdam corporis placeat doloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita, blanditiis laboriosam quibusdam corporis placeat doloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita, blanditiis laboriosam quibusdam corporis placeat doloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum expedita, blanditiis laboriosam quibusdam corporis placeat doloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribusoloribus  placeat doloribus'


function Tool(){
     return(
          <div className="tool-container">
               <h3>Heytitle</h3>
                    <p>{string.length > 155 ? string.slice(0, 150).concat(' ...') : string} </p>
               <button>Visit Link</button>
          </div>
     );
}

export default Tool;