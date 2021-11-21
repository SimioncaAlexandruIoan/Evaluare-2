   document.getElementById('text').ondblclick = Slide (); 
function Slide()
{
    var slideIndex = 0;
    showSlides();

    function showSlides() 
    {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       var dots = document.getElementsByClassName("dot");
       
       for (i = 0; i < slides.length; i++)
       {
            slides[i].style.display = "none";  
       }
       
       slideIndex++;
       
       if (slideIndex > slides.length)
       {
            slideIndex = 1
       }    
       
       for (i = 0; i < dots.length; i++)
       {
            dots[i].className = dots[i].className.replace(" active", "");
       }
       
       slides[slideIndex-1].style.display = "block";  
       dots[slideIndex-1].className += " active";
       setTimeout(showSlides, 3000); 
    }
    
    document.getElementById('1').style.display = "none";
    document.getElementById('2').style.display = "none";
    document.getElementById('3').style.display = "none";
    document.getElementById('4').style.display = "none";
    document.getElementById('5').style.display = "none";
    document.getElementById('6').style.display = "none";   
}