function display(){
    const open=document.getElementById('open').style.display;
    if(open==='none'){
        document.getElementById('open').style.display='block'
        document.getElementById('colorextra').style.color='#2D0CFB';
        
    }
    else{
        document.getElementById('open').style.display='none';
        document.getElementById('colorextra').style.color='#D6B7B7';

    }
}
