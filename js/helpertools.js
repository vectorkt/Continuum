//need to take a look at negative spanning years, maybe have some sort of contingency



function sum(n)

{
return n*(n+1)/2;
}


function generateskill() {

  var skill_name, skill_bonus;
	
	skill_name=document.getElementById("skill_name").value;
  skill_bonus=Number(document.getElementById("skill_bonus").value);
  prompt("CTRL+C(Copy),CTRL+V(Paste)","/r $"+skill_name+"=1d10r1r10+"+skill_bonus);
	


}


function advancement() {

  var age,new_age,skill_name, skill_bonus,skill_start,skill_end;
	
	skill_name=document.getElementById("skill_name_advancement").value;
  skill_bonus=Number(document.getElementById("skill_bonus").value);
  skill_start=Number(document.getElementById("skill_start").value);
  skill_end=Number(document.getElementById("skill_end").value);
  age=Number(document.getElementById("Age").value);
  
  new_age=age+(sum(skill_end)/2-sum(skill_start)/2);//((skill_end*(skill_end+1))/2)-((skill_start*(skill_start+1))/2);
  alert("Your new age is: "+new_age+" years");
  
  prompt("CTRL+C(Copy),CTRL+V(Paste)","/r $"+skill_name+"=1d10r1r10+"+skill_end);
	


}


function getspanpointstime(){

departure_date=String(document.getElementById("departure_date").value);
arrival_date=String(document.getElementById("arrival_date").value);

departure_date=departure_date.split("/");
arrival_date=arrival_date.split("/");


//01/02/2000

//Date.setFullYear(year, month, day)
departure = new Date();
departure.setFullYear(Number(departure_date[2]),Number(departure_date[1])-1,Number(departure_date[0]));
arrival= new Date();
arrival.setFullYear(Number(arrival_date[2]),Number(arrival_date[1])-1,Number(arrival_date[0]));

var day=1000*60*60*24;//miliseconds
var year=365*1000*60*60*24;
var meter=3*1000*60*60*24;
var km=1000*3*1000*60*60*24;

var departure_ms=departure.getTime();
var arrival_ms=arrival.getTime();

var result=arrival_ms-departure_ms;

if(result<0){

	result*=-1;

}

var current_span=365*Number(document.getElementById("current_span_years").value)+Number(document.getElementById("current_span_days").value);

var time_result=result/day;


if(current_span<time_result){


  var temp=current_span-time_result;
  temp*=-1;

  if(confirm("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\nEXCEEDING MAXIMUM SPAN! \nMUST ROLL SPANNING WITH A -"+Math.ceil(temp/365)+" PENALTY!\nOR YOU CAN PRESS CANCEL AND REST!\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"))
  {

    document.getElementById("current_span_years").value=0;
    document.getElementById("current_span_days").value=0;

  }

  else{

    return;

  }


}

else{
  current_span-=time_result;
  document.getElementById("current_span_years").value=Math.floor(current_span/365);
  document.getElementById("current_span_days").value=Math.floor(current_span%365);

}






}



function getspanpointspace(){


var space_result=Math.ceil(Number(document.getElementById("meters_spanned").value)/3)+Number(document.getElementById("km_spanned").value)*365;

var current_span=365*Number(document.getElementById("current_span_years").value)+Number(document.getElementById("current_span_days").value);



if(current_span<space_result){


  var temp=current_span-space_result;
  temp*=-1;

    if(confirm("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\nEXCEEDING MAXIMUM SPAN! \nMUST ROLL SPANNING WITH A -"+Math.ceil(temp/365)+" PENALTY!\nOR YOU CAN PRESS CANCEL AND REST!\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!WARNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"))
    {

    document.getElementById("current_span_years").value=0;
    document.getElementById("current_span_days").value=0;

    }

  else{

    return;

    }


  }

  else{
    current_span-=space_result;
    document.getElementById("current_span_years").value=Math.floor(current_span/365);
    document.getElementById("current_span_days").value=Math.floor(current_span%365);
  }


}




