let givenDate;
let value;
let date1;
let datenow;
let intervalId;
function calcAge()
{   clearInterval(intervalId);
    let count=0;
    givenDate=document.querySelector("#dob").value;
        if(givenDate===""){document.querySelector("#no-input").innerHTML=`<h4 style="margin:auto;padding:25px;">Please enter date of birth.</h4>`;
        resetPartial();
        return null;}
        date1=new Date(givenDate);
        datenow=new Date();
         value=datenow-date1;
        if(value<0){assigning("#no-input","Incorrect date!","Please enter correct date of birth");resetPartial();return null;}
        document.querySelector("#no-input").innerHTML=``;
        update();
        
    function assigning(x,y,z)
    {  
        document.querySelector(x).innerHTML=`<div><p  style="padding:0px 10px 0px 10px">${y}</p>
        <p  style="padding:0px 10px 10px 10px">${z}</p></div>`;
     }    
    function update()
        { 
            date1=new Date(givenDate);
        datenow=new Date();
         value=datenow-date1;
        if(value<0){assigning("#no-input","" ,"Please enter correct date of birth");resetPartial();return null;}
         document.querySelector("#no-input").innerHTML=``;
        let sec=Math.floor(value/1000);
        let min=Math.floor(sec/60);
        let hour=Math.floor(min/60);
        let day=Math.floor(hour/24);
        let week=Math.floor(day/7);
        let month=Math.floor(day/30.4375);
        let year=(day/365.25);
        year=year.toFixed(2);
        if(count===0){document.querySelector("#lab").innerHTML=`<h4>Date of birth : ${date1.toDateString()}</h4>`;count++;}
        
        assigning("#year-res",year,"Years");
        assigning("#month-res",month,"Months");
        assigning("#week-res",week,"Weeks");
        assigning("#day-res",day,"Days");
        assigning("#hour-res",hour,"Hours");
        assigning("#min-res",min,"Minutes");
        assigning("#sec-res",sec,"Seconds");
         
    }
    intervalId=setInterval(update,1000);
    }



function resett()
{   clearInterval(intervalId);
    document.querySelector("#no-input").innerHTML=``;
    document.querySelector("#result-cont-1").innerHTML=`
    <div id="year-res"></div>
    <div id="month-res"></div>
    <div id="week-res"></div>
    <div id="day-res"></div>
    <div id="hour-res"></div>
    <div id="min-res"></div>
    <div id="sec-res"></div>` ;
    document.querySelector("#lab").innerHTML=`<label for="dob">Hi Friend! Kindly Enter your date of birth.
    </label>`;
    document.querySelector("#dob").value="";
    
   

}

function resetPartial()
{   clearInterval(intervalId);
    document.querySelector("#result-cont-1").innerHTML=`
    <div id="year-res"></div>
    <div id="month-res"></div>
    <div id="week-res"></div>
    <div id="day-res"></div>
    <div id="hour-res"></div>
    <div id="min-res"></div>
    <div id="sec-res"></div>` ;
    document.querySelector("#lab").innerHTML=`<label for="dob">Hi Friend! Kindly Enter your date of birth.
    </label>`;
}
   
