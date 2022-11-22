let topnav = Array.from(document.querySelectorAll('.active_tnav'))
let login_page = document.querySelector('.loginpage')







topnav.forEach((element) => {
    element.addEventListener('click', () => {
        topnav.forEach((element) => {
            element.classList.remove('activated')
        })

        element.classList.add('activated')
    })

})


let input_pop_up = false;
function inputpopup(){
    if(input_pop_up ===false){
        document.querySelector('.inputpop').style.visibility = "visible"
        document.querySelector('.inputpop').classList.add('drop_animation');
        
    input_pop_up = true;
}
else{
    document.querySelector('.inputpop').style.visibility = "hidden";
    document.querySelector('.inputpop').classList.remove('drop_animation');
    input_pop_up = false;
}
}




//loading done!!!!
onload =()=>{
    document.getElementById('loader').style.visibility ='hidden';
}

