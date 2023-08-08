import about from '../assets/partial-css/about.css';


function About(){
     return(
          <div className="about">
               <div className="about-content">
                    <h1>About AIstash</h1>
                    <br />
                    <p>AIstash curates the best AI productivity tools on the web. These tools can help you automate tasks, generate ideas, and stay organized. So whether you're a student, a freelancer, or a busy professional, our collection have the tools you need to get things done. We're constantly adding new tools to our collection, so you can be sure you're always using the latest and greatest. Start using AI to boost your productivity today!</p>
               </div>
               <div className="about-img-container">
                     <img src="/images/aistash2.png" className="about-img" />
               </div>
          </div>
     );
}

export default About;