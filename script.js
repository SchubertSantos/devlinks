function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")


   //pegar a tag img
   const img = document.querySelector("#profile img") 
   
   //substituir a imagem
    if(html.classList.contains("light")) {
        //se tiver light mode, adiconar a imagem light
        img.setAttribute("src", "./assets/avatar-schubert-light.png")
        
    } else {
        // set tiver sem light mode, manter a imagem normal. 
        img.setAttribute("src", "./assets/avatar-schubert-dark.png")
    }   
}