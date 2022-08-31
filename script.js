function carregar(){
    var hora = document.getElementById('msg');
    var cump = document.getElementById('msg1')
    var psg = document.getElementById('foto');
    var img = document.getElementById('imagem')
    var agora = new Date();
    var agoraMin = new Date();
    var horaextmin = agoraMin.getMinutes();
    var horaext = agora.getHours();
    
   
   hora.innerHTML = `Hora atual: ${horaext}:${horaextmin}`;
   if(horaext >= 0 && horaext < 12){
    cump.innerHTML = 'Bom dia!'
    img.src = 'manha.jpg'
    document.body.style.background = '#f0d0aa';
    
   } else if(horaext >= 12 && horaext < 18){
    cump.innerHTML = 'Boa tarde!'
    img.src = 'tarde.jpg';
    document.body.style.background ='#d36109'
   } else{
    cump.innerHTML = 'Boa noite!'
     img.src = 'noite1.jpg';
     document.body.style.background = '#0f0705' 
   }
    
}