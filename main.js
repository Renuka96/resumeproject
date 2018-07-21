function loadjson(file,callback) {
  var x= new  XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
  if(x.readyState === 4 && x.status=="200"){
    callback(x.responseText);
  }
};
x.send(null);
}
loadjson("data.json", function(text){
  var data=JSON.parse(text);
  console.log(data);
  basics(data.details);
  basics1(data.carrer);
  education(data.education);
  keyskills(data.keyskills);
basics4(data.achievements);
})
var child1=document.querySelector(".child1");

function basics(det)
{
  var image=document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

  var name=document.createElement("h6");
  name.textContent=det.name;
  child1.appendChild(name);

  var phoneno=document.createElement("h6");
  phoneno.textContent=det.phoneno;
  child1.appendChild(phoneno);

  var address=document.createElement("h2");
  address.textContent="Address";
  child1.appendChild(address);

  var hr=document.createElement("hr")
  child1.appendChild(hr);

  var address=document.createElement("address");
  address.textContent=det.address;
  child1.appendChild(address);

  var email=document.createElement("a")
  email.href="mailto:renukamadeti@gmail.com"
  email.textContent=det.email;
  child1.appendChild(email);
}
 var child2=document.querySelector(".child2");

 function basics1(car)
 {
   var info=document.createElement("h6");
   info.textContent="carrer objective";
   child2.appendChild(info);

   var hr=document.createElement("hr");
   child2.appendChild(hr);

   var info=document.createElement("h6");
   info.textContent=car.info;
   child2.appendChild(info);
}


function education(edu)
{
  var ed=document.createElement("h2");
  ed.textContent="Educational qualification";
  child2.appendChild(ed);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<edu.length;i++)
  {
    var deg=document.createElement("h5");
    deg.textContent=edu[i].degree;
    child2.appendChild(deg);

 var ul=document.createElement("ul");
 var li=document.createElement("li");
 li.textContent=edu[i].institute;
 ul.appendChild(li);
 child2.appendChild(ul);

 var li2=document.createElement("li");
 li2.textContent=edu[i].date;
 ul.appendChild(li2);
 child2.appendChild(ul);

  }
}

function keyskills(key)
{
  var ky=document.createElement("h2");
  ky.textContent="Technical skills";
  child2.appendChild(ky);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

var skilltable=document.createElement("table");
skilltable.border='1';
child2.appendChild(skilltable);

 tabledata=""
 for(i=0;i<key.length;i++)
 {
    tabledata+="<tr><td>"+key[i].title+"</td><td>"+key[i].info+"</td></tr>"
  }
  skilltable.innerHTML=tabledata;
}

function basics4(achi)
{
  var ac=document.createElement("h2");
  ac.textContent="Achievements";
  child2.appendChild(ac);

  var hr=document.createElement("hr");
  child2.appendChild(hr);
  for(i=0;i<achi.length;i++)
  {
    var cg=document.createElement("h5");
    cg.textContent=achi[i].college;
    child2.appendChild(cg);

 var ul=document.createElement("ul");
 var li=document.createElement("li");
 li.textContent=achi[i].event;
 ul.appendChild(li);
 child2.appendChild(ul);

 var li3=document.createElement("li");
 li3.textContent=achi[i].prize;
 ul.appendChild(li3);
 child2.appendChild(ul);

  }
}
