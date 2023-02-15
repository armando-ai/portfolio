import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Menu from './Menu';
function App() {

  const [background, setBackground] = useState("#f5f5f5");
  const colors =["#ccc","red","green","blue"]
  
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
    
        if(window.scrollY < document.getElementById("sec1").offsetHeight){
          setBackground("#f5f5f5");
        }else
        if(window.scrollY < document.getElementById("sec2").offsetHeight+ document.getElementById("sec1").offsetHeight*2){
          setBackground("#b18e67");
        }else
        if(window.scrollY < (document.getElementById("sec2").offsetHeight+document.getElementById("sec1").offsetHeight*3.5)){
          setBackground("#597c47");
        }else
        if(window.scrollY < document.getElementById("sec2").offsetHeight+document.getElementById("sec1").offsetHeight*6){
          setBackground("#ccc");
        }
      
    });
  }, []);
  return (
    <>
    <div className={`${isOpen===true?"buttonOpacity":""} openButton`} onClick={handleClick}>Skip To...</div>
    <Menu handleClick={handleClick} isOpen={isOpen}></Menu>
    <div style={{ background: background, transition:"0.7s", transitionTimingFunction:"ease-in", height:"auto" }}>
      <div id="sec1" class="intro" style={{ height: "100vh", }}>
      <div  className='textbox2'>
          <h3 class={`${background==="#f5f5f5"?"":"text"}`}>Armando Ramirez Cañas</h3>
      </div>
      <div  className='textbox'>
          <h1 class={`${background==="#f5f5f5"?"":"text"}`}>Full Stack</h1>
      </div>
        
       <div class="textbox" >
            <h2 class={`${background==="#f5f5f5"?"":"text"}`} >Software Engineer</h2>
       </div>
        <p class={`${background==="#f5f5f5"?"":"text-intro-animate"} intro-text`}>
        As a Full Stack Software Engineer, I bring a diverse set of skills spanning from front-end to back-end development. With a focus on designing visually appealing and modern user interfaces, I have experience structuring large systems and developing small components to deliver fast and efficient software products using Agile Software Methodologies. My expertise in database design ensures that all structures are optimized for long-term use. I am well-versed in cloud computing and have experience developing serverless applications and AWS Lambda functions with a strong emphasis on scalability and efficiency. </p>
      </div>
      <div id="sec2" style={{ height: "300vh", }}>
          <div  className='textbox secondSection'>
              <h1 class={`${background==="#b18e67"?"":"text"}`} >Skills</h1>
          </div>
          <div class="row1">
            <div class="skillDesc">
              <h4>
                Frontend Development
              </h4>
              <p>As a frontend developer with years of experience, I have a deep understanding of the principles behind modern design and how to implement it. My proficiency in HTML and CSS has enabled me to easily learn and master a variety of frontend languages.

Some of the technologies I have self-taught include React, Flutter, JavaFx, and Java Swing. I also gained experience with Angular through an internship at Xima Software, where I led a team of five while working on the NGRX pattern, Standalone Components, and Component Store.
              </p>
              <div>
                <li>Framework</li>
              <li>- React</li>
                <li>- Flutter</li>
                <li>- Angular: NGRX pattern, Standalone Components,Component Store</li>
                <li>- JavaFx</li>
                <li>- Java Swing</li>
              </div>
              
                
            </div>
            <img class='frontend' width="400" height="400" alt="" src='frontend.png'></img>
           
          </div>
           <div class="row2">
           <img class='backend' width="400" height="400" alt="" src='backend.png'></img>
           <div class="skillDesc2">
              <h4>
                Backend Development
              </h4>
              <p>
              In my backend development experience, I started with Java as my foundation for all projects. I have created APIs using Springboot JPA for automating REST services, and used SpringCloud gateway for scalability through Eureka discovery on services in Docker and using cloud database, or local image-based. DEploying in one network with a compose file.



               </p>
                <p>
                As I continued to develop my skills, I moved on to NestJS with PrismaORM, which made things faster but not necessarily easier. I had to relearn many things, but it was much quicker than Java.

                </p>
                <p>
                I also have experience in cloud development, using cloud-based databases for both Java and NestJS. Additionally, I have created AWS Lambda functions and AWS serverless applications. This experience has taught me that Java Jars take a long time to decompress, and NestJS works a lot faster upon deployment.


                
              </p>
              <div class="row1">
              <div>
               <li>Languages</li>
               <li>- Java</li>
               <li>- Javascript</li>
               <li>- NestJS</li>
               <li>- Express</li>
               <li>- Python</li>
               
             </div>
             <div>
               <li>Tools</li>
               <li>- Docker -</li>
               <li>- Eureka -</li>
               <li>- Springboot -</li>
               <li>- JDBC -</li>
               <li>- PrismaORM -</li>
               <li>- Typescript -</li>
               <li>- GitHub -</li>
             </div>
              </div>
              
            </div>
         
          </div>
          <div class="row3">
          <div class="skillDesc">
              <h4>
                Data Structures & Algorithms
              </h4>
              <p>
              I have extensive experience in using relational databases and have developed systems that are structured in a way that optimizes the efficiency of the REST system or queries, allowing relationships to only be used when necessary.
            
              </p>
              
              <p>My experience in working with databases has helped me develop a strong understanding of how to build algorithms for the data being created or filtered. By leveraging my knowledge of data structures and algorithms, I can effectively design and implement systems that efficiently process large volumes of data.
              </p>
              <div>
                <li>Databases</li>
                <li>- MongoDB</li>
                <li>- PostgresSQL</li>
                <li>- MYSQL:Intricate queries, subQueries, as view tables</li>
                <li>- SQLServer: Intricate queries, subQueries, as view tables</li>
                <li>- Neo4j</li>
              </div>
            </div>
            <img class='db' width="400" height="400" alt="" src='db.png'></img>
          </div>
      </div>
      <div id="sec3" style={{ height: "100vh" }}>
        
          <div  className='textbox thirdSection'>
          <h1 class={`${background==="#597c47"?"":"text"}`} >Business Automation</h1>
        
          </div>
          <div class="row2">
          <p class={`${background==="#597c47"?"":"text-intro-animate"} intro-text`}>
          An automated app for gardening businesses using Flutter, NESTJS, and Java. The app streamlines business interactions between owners and clients by offering features such as automated booking for estimates and appointments, quotes, offers, email reminders, payment logging, and cancellation of appointments for both parties. This app aims to improve the overall efficiency and productivity of gardening businesses by simplifying their processes and providing a user-friendly experience for both owners and clients. This project had a time span of 10 weeks on which I developed on my own being a Full Stack Developer.
        </p>
      
    
          </div>
                  <div class="row1">
               
              <div class="phone">
              
              </div>
              <div class="phone1">

              </div>
              <div class="phone2">

              </div>
              </div> 
      </div>
      <div id="sec4" style={{ height: 
      "120vh", }}>
        <div  className='textbox fourthSection'>
          <h1 class={`${background==="#ccc"?"":"text"}`} >Lets Connect</h1>
        </div>
        <div class="row2">
          <p class={`${background==="#ccc"?"":"text-intro-animate"} intro-text`}>
          My skills can aid in many different scenarios if you are in need of an experienced developer that implements Agile Methodologies in learning new things at hand.
          <br/>
          
         </p>
        
        </div>
        <div class="row2">
          <p class={`${background==="#ccc"?"":"text-intro-animate"} `} >armando.r6910@gmail.com</p>
         <a id="github" href="https://github.com/armando-ai" target='_blank'> <svg   height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg></a>
<a id="linkedin" href="https://www.linkedin.com/in/armando-ramirez-canas-3a672a1b8" target='_blank'><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
</svg></a>

        </div>
        
       
      </div>
      <footer>
      <h5>Made in Salt Lake City, Utah</h5>
        <div class="row1">
          
          <p>Design inspiration from <a href="https://andrewcouldwell.com/">https://andrewcouldwell.com/</a> built and modified by Armando Ramirez Cañas </p>
        </div>
      </footer>
    </div>
    </>
    
  );
 
}

export default App;
