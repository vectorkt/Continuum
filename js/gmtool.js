$(document).ready(function() {


    for (s in societies) {

        $("select").append('<option value="' + societies[s] + '">' + societies[s] + '</option>');

    }


    $("button").click(function() {




        nr = retRand(3, 8);
        $("#output").html("");
        spanners = [];
        for (s = 0; s < nr; s++) {


            spanners.push(new Spanner);
          

            $("#output").append(spanners[s].representation);

        }

        


    });
});

function retRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//GENERATES A SPANNER
function Spanner() {

   


    this.sex = retRand(0, 1);



    if ($("select").val() == "Random") {

        this.society = societies[retRand(0, societies.length - 1)];

    } else {

        this.society = $("select").val();

    }

    if (this.sex == 0) {

        this.first_name = nameset[this.society].first_male[retRand(0, nameset[this.society].first_male.length - 1)];

    } else {

        this.first_name = nameset[this.society].first_female[retRand(0, nameset[this.society].first_female.length - 1)];

    }

    this.last_name = nameset[this.society].last[retRand(0, nameset[this.society].last.length - 1)];




    this.span = spans[retRand(0, spans.length - 1)];

    this.fraternity = fraternities[retRand(0, fraternities.length - 1)];

    this.era = eras[retRand(0, eras.length - 1)];

    this.yet = yets[retRand(0, yets.length - 1)];

    this.background = backgrounds[retRand(0, backgrounds.length - 1)];

    this.motivation = motivations[retRand(0, motivations.length - 1)];

    this.behavior1 = behaviors[retRand(0, behaviors.length - 1)];
    this.behavior2 = behaviors[retRand(0, behaviors.length - 1)];


    this.description1 = descriptions[retRand(0, descriptions.length - 1)];
    this.description2 = descriptions[retRand(0, descriptions.length - 1)];


    this.profession = [];


    for (p = 0; p < this.span * 3; p++) {


        this.profession.push(professions[retRand(0, professions.length - 1)]);



    }

    this.profession.sort();




    this.representation = "";





    // OUTPUT

    this.representation += "<c>Name</c> " + this.first_name + " " + this.last_name + "<br>";
    this.representation += "<c>Span</c> " + this.span + " ";

    this.representation += "<c>Era</c> " + this.era + "<br>";

    this.representation += "<c>Society</c> " + this.society + " ";

    this.representation += "<c>Fraternity</c> " + this.fraternity + "<br>";

    this.representation += "<c>Description</c> " + this.description1 + "; " + this.description2 + "<br>";

    this.representation += "<c>Behavior</c> " + this.behavior1 + "; " + this.behavior2 + "<br>";

    this.representation += "<c>Age</c> " + this.background + " ";
    this.representation += "<c>Yet</c> " + this.yet + "<br>";
    this.representation += "<c>Motivation</c> " + this.motivation + "<br>";


    this.representation += "<c>Skills</c> ";


    for (p = 0; p < this.span * 3; p++) {



        this.representation += this.profession[p] + " " + retRand(1, 10) + "; ";

    }
    this.representation += "<br><br>";


}




