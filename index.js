setInterval(()=>{
    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if(hr>12)
    {
        hr=hr-12;
    }
    console.log(hr);
    console.log(min);
    // console.log(sec);
    let rotateH=30*hr+min/2;
    let rotateM=6*min;
    let rotateS=6*sec;
    let hour=document.getElementById("hour");
    let minute=document.getElementById("minute");
    let second=document.getElementById("second");
    hour.style.transform=`rotate(${rotateH}deg)`;
    minute.style.transform=`rotate(${rotateM}deg)`;
    second.style.transform=`rotate(${rotateS}deg)`;
},1000);