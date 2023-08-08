import notice from '../assets/partial-css/notice.css';


function Notice({setShow}){
     
     return(
          <div className="notice">
               <div>
                     <p>Hello, please expect a 20-30s loading time during the first try. (API pre-boot) </p>
                    <img src="/images/close.png" className="close-logo" onClick={() => setShow(false)} />
               </div>
          </div>
     );
}

export default Notice;