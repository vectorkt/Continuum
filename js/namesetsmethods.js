

//constructor takes three arrays
function language(first_male,first_female,last){
  this.first_male=first_male;
  this.first_female=first_female;
  this.last=last;

}






nameset={};
nameset["Japanese"]=new language(jap_first_male,jap_first_female,jap_last
);
nameset["Anglosaxon"]=new language(ang_first_male,ang_first_female,ang_last);
//nameset["french"]=new language(fr_first_male,fr_first_female,fr_last);
nameset["Arabic"]=new language(ara_first_male,ara_first_female,ara_last);
nameset["Hispanic"]=new language(hisp_first_male,hisp_first_female,hisp_last);
nameset["French"]=new language(fr_first_male,fr_first_female,fr_last);
nameset["Indian"]=new language(ind_first_male,ind_first_female,ind_last);





societies=[]

for(society in nameset){


societies.push(society);
}

societies.sort();
