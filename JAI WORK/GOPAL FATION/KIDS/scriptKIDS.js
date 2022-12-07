
i=0
setInterval(()=>{
    i+=1

    document.querySelector(".banner").scrollLeft = i*1000
    if(i==15){
        return
    }
},1000)



