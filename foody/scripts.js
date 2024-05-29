 // Change hero image on click
function changeHeroImage() {
     const heroImage = document.getElementById('heroImage');
     if (heroImage.src.includes('hero1.jpg')) {
         heroImage.src = 'hero2.jpg';
     } else {
         heroImage.src = 'hero1.jpg';
     }
 }
 
 // Highlight menu card on click
 function highlightCard(card) {
     const cards = document.querySelectorAll('.menu-card');
     cards.forEach(c => c.style.transform = 'none');
     card.style.transform = 'scale(1.1)';
 }
 
 // Change about image on click
 function changeAboutImage() {
     const aboutImage = document.getElementById('aboutImage');
     if (aboutImage.src.includes('about2.png')) {
         aboutImage.src = 'image/about1.png';
     } else {
         aboutImage.src = 'image/about2.png';
     }
 }
 
 // Typewriter effect
 function typeWriter(text, elementId, speed) {
     let i = 0;
     function type() {
         if (i < text.length) {
             document.getElementById(elementId).innerHTML += text.charAt(i);
             i++;
             setTimeout(type, speed);
         }
     }
     type();
 }
 
 // Call the typewriter function whenever you want the effect to start
 const text =  "Welcome to our Foodie Bar, where passion meets flavor in every dish we serve. At Foodie Bar, we pride ourselves on crafting unforgettable culinary experiences that tantalize the taste buds and nourish the soul. With a commitment to quality ingredients and innovative recipes, our dedicated team of chefs creates a diverse menu that celebrates the rich tapestry of global cuisine. Whether you're craving comforting classics or daring culinary creations, our menu offers something for every palate. Step into our world of culinary excellence and let us take you on a journey of gastronomic delight. Come, experience the essence of Foodie Bar – where every bite tells a story."






 ;
 typeWriter(text, 'typewriter', 50);
 