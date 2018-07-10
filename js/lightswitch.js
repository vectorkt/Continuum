// Title page light, dark
// "https://i.imgur.com/9gYFjsL.jpg"
// "https://i.imgur.com/k8v6Bdp.jpg"


// Maxims, light, dark
// "https://i.imgur.com/Q8KVnFi.jpg"
// "https://i.imgur.com/fj5eHE8.jpg"


// Explanation, light, dark
// "https://i.imgur.com/2ZHGR9F.jpg"
// "https://i.imgur.com/9jCvFen.jpg"




function pagerunning() {
  
  
	//alert("before:"+localStorage.theme+" "+document.getElementById("generalcss").getAttribute("href"));
    if (localStorage.theme) {

       

        if(localStorage.theme!=document.getElementById("generalcss").getAttribute("href")){
        
        autoswitch();
        
       
        }

    } else {



        localStorage.theme = "css/light.css";
        document.getElementById("generalcss").setAttribute("href", localStorage.theme);

        if (document.getElementById("mynavbar")) {

            document.getElementById("mynavbar").setAttribute("class", "navbar navbar-inverse navbar-static-top");

        }

        if (document.getElementById("title_image")) {

            document.getElementById("title_image").setAttribute("src", "https://i.imgur.com/9gYFjsL.jpg");


        }

        if (document.getElementById("maxims_link")) {

            document.getElementById("maxims_link").setAttribute("href", "https://i.imgur.com/Q8KVnFi.jpg");

            document.getElementById("maxims_image").setAttribute("src", "https://i.imgur.com/Q8KVnFi.jpg");
        }


        if (document.getElementById("explanation_link")) {

            document.getElementById("explanation_link").setAttribute("href", "https://i.imgur.com/2ZHGR9F.jpg");

            document.getElementById("explanation_image").setAttribute("src", "https://i.imgur.com/2ZHGR9F.jpg");
        }


    }

	//alert("after:"+localStorage.theme+" "+document.getElementById("generalcss").getAttribute("href"));
	
}


function lightswitch() {



    //DARK
    if (localStorage.theme == "css/light.css") {

        localStorage.theme = "css/dark.css";
        document.getElementById("generalcss").setAttribute("href", localStorage.theme);
		
		if (document.getElementById("mynavbar")) {
        document.getElementById("mynavbar").setAttribute("class", "navbar navbar-default navbar-static-top");
		}

        if (document.getElementById("title_image")) {
            document.getElementById("title_image").setAttribute("src", "https://i.imgur.com/k8v6Bdp.jpg");
        }


        if (document.getElementById("maxims_link")) {
            document.getElementById("maxims_link").setAttribute("href", "https://i.imgur.com/fj5eHE8.jpg");

            document.getElementById("maxims_image").setAttribute("src", "https://i.imgur.com/fj5eHE8.jpg");

        }



        if (document.getElementById("explanation_link")) {

            document.getElementById("explanation_link").setAttribute("href", "https://i.imgur.com/9jCvFen.jpg");

            document.getElementById("explanation_image").setAttribute("src", "https://i.imgur.com/9jCvFen.jpg");
        }


    }

    // LIGHT
    else if (localStorage.theme == "css/dark.css") {


        localStorage.theme = "css/light.css";
        document.getElementById("generalcss").setAttribute("href", localStorage.theme);

        if (document.getElementById("mynavbar")) {

            document.getElementById("mynavbar").setAttribute("class", "navbar navbar-inverse navbar-static-top");

        }

        if (document.getElementById("title_image")) {

            document.getElementById("title_image").setAttribute("src", "https://i.imgur.com/9gYFjsL.jpg");


        }

        if (document.getElementById("maxims_link")) {

            document.getElementById("maxims_link").setAttribute("href", "https://i.imgur.com/Q8KVnFi.jpg");

            document.getElementById("maxims_image").setAttribute("src", "https://i.imgur.com/Q8KVnFi.jpg");
        }


        if (document.getElementById("explanation_link")) {

            document.getElementById("explanation_link").setAttribute("href", "https://i.imgur.com/2ZHGR9F.jpg");

            document.getElementById("explanation_image").setAttribute("src", "https://i.imgur.com/2ZHGR9F.jpg");
        }


    }




}


function autoswitch() {



    //DARK
    if (localStorage.theme == "css/dark.css") {
		//alert("Enters dark");

        localStorage.theme = "css/dark.css";
        document.getElementById("generalcss").setAttribute("href", localStorage.theme);
		
		if (document.getElementById("mynavbar")) {
        document.getElementById("mynavbar").setAttribute("class", "navbar navbar-default navbar-static-top");
		}

        if (document.getElementById("title_image")) {
            document.getElementById("title_image").setAttribute("src", "https://i.imgur.com/k8v6Bdp.jpg");
        }


        if (document.getElementById("maxims_link")) {
            document.getElementById("maxims_link").setAttribute("href", "https://i.imgur.com/fj5eHE8.jpg");

            document.getElementById("maxims_image").setAttribute("src", "https://i.imgur.com/fj5eHE8.jpg");

        }



        if (document.getElementById("explanation_link")) {

            document.getElementById("explanation_link").setAttribute("href", "https://i.imgur.com/9jCvFen.jpg");

            document.getElementById("explanation_image").setAttribute("src", "https://i.imgur.com/9jCvFen.jpg");
        }


    }

    // LIGHT
    else if (localStorage.theme == "css/light.css") {


        localStorage.theme = "css/light.css";
        document.getElementById("generalcss").setAttribute("href", localStorage.theme);

        if (document.getElementById("mynavbar")) {

            document.getElementById("mynavbar").setAttribute("class", "navbar navbar-inverse navbar-static-top");

        }

        if (document.getElementById("title_image")) {

            document.getElementById("title_image").setAttribute("src", "https://i.imgur.com/9gYFjsL.jpg");


        }

        if (document.getElementById("maxims_link")) {

            document.getElementById("maxims_link").setAttribute("href", "https://i.imgur.com/Q8KVnFi.jpg");

            document.getElementById("maxims_image").setAttribute("src", "https://i.imgur.com/Q8KVnFi.jpg");
        }


        if (document.getElementById("explanation_link")) {

            document.getElementById("explanation_link").setAttribute("href", "https://i.imgur.com/2ZHGR9F.jpg");

            document.getElementById("explanation_image").setAttribute("src", "https://i.imgur.com/2ZHGR9F.jpg");
        }


    }




}