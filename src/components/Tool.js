import tool from '../assets/partial-css/tool.css';




function Tool({props}){

     const {_id, name, description, url } = props
     
     const openInNewTab = url => {
          window.open(url, '_blank', 'noopener,noreferrer');
        };


     return(
          <div className="tool-container">
               <h3>{name}</h3>
                    <p>{description} </p>
               <button onClick={() => openInNewTab(url)}>Check App</button>
          </div>
     );
}

export default Tool;