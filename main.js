function getfile(file,callback){
var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
eduinfo(data.education);
skills(data.skills);
});
function basicinfo(basics){
  var first_child = document.querySelector(".profile");
  var profile_pic =document.createElement("img");
profile_pic.src=basics.photo;
first_child.appendChild(profile_pic);
var name=document.createElement("h3");
name.textContent=basics.name;
first_child.appendChild(name);
var mobile=document.createElement("p");
mobile.innerHTML=basics.phone;
first_child.appendChild(mobile);
var mail=document.createElement("a");
mail.href="mailto:harithappp@outlook.com";
mail.textContent=basics.email;
first_child.appendChild(mail);
var ad=document.createElement("p");
ad.textContent="Address";
first_child.appendChild(ad);
var hr=document.createElement("HR");
first_child.appendChild(hr);
var address=document.querySelector(".contact");
address.textContent=basics.Address;
first_child.appendChild(address);

}
var second_child=document.querySelector(".content");
function eduinfo(edu) {
  var ed=document.createElement("h2");
  ed.textContent="education";
  ed.style.decoration="underline";
  second_child.appendChild(ed);
for (var i=0;i<edu.length;i++)
{
var course = document.createElement("p");
course.innerHTML=edu[i].course;
second_child.appendChild(course);
 var college = document.createElement("p");
 college.textContent=edu[i].institute;
 second_child.appendChild(college);

var ul =  document.createElement("ul");
second_child.appendChild(ul);
//console.log(edu[i].data.length);
for(j=0;j<edu[i].data.length;j++){
  var li=document.createElement("li");
  li.textContent=edu[i].data[j];
  ul.appendChild(li);
  second_child.appendChild(ul);
}
}
}
function skills(skill){
  var table=document.createElement("table");
  table.border="1";
  var row="";
  for(var k=0;k<skill.length;k++){
    row+="<tr><td><strong>"+skill[k].name+"</strong></td><td>"+skill[k].data+"</td></tr>";
  }
  table.innerHTML=row;
  second_child.appendChild(table);

}
