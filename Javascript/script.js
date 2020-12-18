const btn = document.getElementById('button');
var accordion = document.getElementsByClassName('contentBox');

// Bouton affiche tout les menus
btn.addEventListener('click', function(){
    for ( i = 0 ; i < accordion.length ; i++ ) {
        accordion[i].classList.add('active')
    }
})



    const accordionItemHeaders = document.querySelectorAll(".accordion .contentBox");

    accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion .contentBox.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = "auto";
     }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = "auto";
    }
    else {
      accordionItemBody.style.maxHeight = "auto";
    }
    
  });
});



    