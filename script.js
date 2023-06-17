let submit= document.getElementById('btn');
submit.addEventListener("click",function(ele){
   ele.preventDefault();

   let fname=document.getElementById("fname");

   let lname=document.getElementById("lname");

   let address1=document.getElementById("address1");

   let address2= document.getElementById("address2");
   
   let address=[];
   address.push(address1.value);
   address.push(address2.value);

   let pin=document.getElementById("pin");
   
   let gender=document.getElementsByName("gender");

   let genderValue;
   for(let i=0;i<gender.length;i++){
       if(gender[i].checked){
           genderValue=gender[i].value;
       }
   }

   let food=document.getElementsByName("food");

   let fooditems=[];
   let foodCount=0;
         for(let i=0;i<food.length;i++){
           if(food[i].checked){
               fooditems.push(food[i].value);
               foodCount++;
           }
         }
     
        

     if(fooditems.length>=2) {
        finalFood = fooditems.join(",");
     }else{
       finalfood = alert("Choose atleast 2 food items");
     }


    let state=document.getElementById("state");

    let country=document.getElementById("country");




   let tb= document.getElementById("tbody");
   let tr= document.createElement("tr");
   let dt1= document.createElement("td");
   let dt2= document.createElement("td");
   let dt3= document.createElement("td");
   let dt4= document.createElement("td");
   let dt5= document.createElement("td");
   let dt6= document.createElement("td");
   let dt7= document.createElement("td");
   let dt8= document.createElement("td");


   dt1.innerHTML=fname.value;
   dt2.innerHTML=lname.value;
   dt3.innerHTML=address.join(" ");
   dt4.innerHTML=pin.value;
   dt5.innerHTML=genderValue;
   dt6.innerHTML=finalFood;
   dt7.innerHTML=state.value;
   dt8.innerHTML=country.value;
  
   
   tr.append(dt1)
   tr.append(dt2)
   tr.append(dt3)
   tr.append(dt4)
   tr.append(dt5)
   tr.append(dt6)
   tr.append(dt7)
   tr.append(dt8)
   tb.append(tr);


   let clear= document.querySelectorAll(".clear");
   clear.forEach(e=>e.value="");


})