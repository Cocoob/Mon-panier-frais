const btn = document.getElementById('button');
const accordion = document.getElementsByClassName('contentBox');

// Bouton affiche tout les menus
btn.addEventListener('click', function(){
    
    
})

// Accordéon
for ( i = 0 ; i < accordion.length ; i++ ) {
    accordion[i].addEventListener('click', function(){
        for ( i = 0 ; i < accordion.length ; i++ ) {
            accordion[i].addEventListener('click', function(){
        
                const active = document.querySelector('.active');
        
                if(active){
                    active.classList.remove('active')
                    this.classList.add('active')
                }else{
                    this.classList.add('active')
                }     
            })
        }
        
    })
}



    