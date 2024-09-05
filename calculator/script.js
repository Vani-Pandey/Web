const screen=document.querySelector('input');
const buttons=document.querySelectorAll('td');
for(let button of buttons){
    button.addEventListener('click',(e)=>{
        const text =e.target.innerText;
        try{
            if(text.toLowerCase()==='c'){
                screen.value='';
            }
            else if(text==='='){
                let output=eval(screen.value);
                screen.value=output
            }
            else if(text.toLowerCase() === 'x'){
                screen.value += '*';
            }
            else if(text.toLowerCase() === '^'){
                screen.value += '**';
            }
            else {
                screen.value+=text;
            }
        }
        catch(err){
            console.log(err);
            screen.value='Invalid operator';
        }
        
        
    })
    
}