import React from "react"
 

export default function card(){
    return(
        <div>
        
        <section>
        <img src="../images/Perfil.jpg"/>
        <h1>Alvaro Reinoso</h1>
        <p id="subtitle">Frontend Developer</p>
        <p id="website">alvaroreinoso.website</p>
        <div class="buttons">
        <button>Email</button>
        <button id="button2">Linkedln</button>
        </div>
        <h1 class="aboutTitle">About</h1>
        <p class="aboutText">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h1 class="interestsTitle">Interests</h1>
        <p class="interestsText">Series and movies. Rock Music. Football. Informatic. Swimming. Beers. Cars.</p>
        
        </section>

        
         <footer> 
         
     
        <img src="../images/Facebook_Icon.png"/> 
          <img src="../images/GitHub_Icon.png"/> 
         <img src="../images/Instagram_Icon.png"/> 
        <img src="../images/Twitter_Icon.png"/> 
         
         </footer>
        
        
        </div>//cierra funcion
         
    )
}



