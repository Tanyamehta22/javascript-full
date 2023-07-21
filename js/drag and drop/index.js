console.log('this is drag and drop utility');
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whitebox');


// EVENT LISTERNERS FOR DRAGGABLE ELEMENT IMGBOX
imgBox.addEventListener('dragstart', (e)=>{
    console.log('Dragstart has been triggered');
    e.target.className += 'hold';
    setTimeout(() => {
        e.target.className += 'hide';   
    },0);
  
})

imgBox.addEventListener('dragend', (e)=>{
    console.log('DragEnd has been triggered');
    e.target.className = "imgBox";
})

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
    e.preventDefault();
    console.log('Dragover has been triggered');    
    })

    whiteBox.addEventListener('dragenter', (e)=>{
        console.log('Dragenter has been triggered');  
        e.target.className += 'dashed';
        
    })

    whiteBox.addEventListener('dragleave', (e)=>{
        console.log('Dragleave has been triggered');  
        e.target.className = 'whiteBox'
        
    })

    whiteBox.addEventListener('drop', (e)=>{
        console.log('drop has been triggered'); 
        e.target.append(imgBox); 
        
    })
}