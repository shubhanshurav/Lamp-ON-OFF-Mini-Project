
function showhide(){
     if(document.querySelector('#check').checked){
           document.querySelector('#light').style.display = 'block';
           document.querySelector('.bulb').style.backgroundColor = '#F5D76E';
      }else{
           document.querySelector('#light').style.display = 'none';
           document.querySelector('.bulb').style.backgroundColor = '#444';
    }             
}