let allElems = document.querySelectorAll(".elem")
let allFullElems  = document.querySelectorAll(".fullElems");


allElems.forEach(function(val){
    
    val.addEventListener("click" , function(){
       allFullElems[val.id].style.display = "block"
    
      
        
    })
    
})
