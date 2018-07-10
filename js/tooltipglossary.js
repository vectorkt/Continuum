 $( function() {
    $( document ).tooltip({
      items: "#age,#asnot,#continuum,#down,#elder,#finnah,#frag,#gemeni,#junior,#level,#leveller,#maxims,#narcissist,#sentientforce,#span,#spanner,#up,#yet",
      content: function() {
        var element = $( this );

        if ( element.is( "#asnot" ) ) {
          var text = element.text();
          return "<p>As/As Not, n.<br>The point during an incident of Frag beyond which natural paradoxes do nor heal by themselves, but collapse the universe instead. Sentient force is applied at this point to heal Frag.</p>";
        }



                if ( element.is( "#age" ) ) {
          var text = element.text();
          return "<p>Age, n.<br>Your personal past. As a Spanner moves through time, he still ages and accumulates life experiences. Contrast Yet.</p>";
        }



                if ( element.is( "#continuum" ) ) {
          var text = element.text();
          return "<p>        Continuum n.<br>1. Humanity that can span, and the social framework that holds it together.<br>2. The entirety of sentience throughout spacetime, most specifically that which is used to maintain existence.</p>";
        }





         if ( element.is( "#down" ) ) {
          var text = element.text();
          return "<p>Down, Downward adv.<br>Towards the past from one's current place in spacetime. Pastward. Normally capitalized to differentiate it from a mere direction in space. Compare Up and Level.</p>";
        }




                 if ( element.is( "#elder" ) ) {
          var text = element.text();
          return "<p>Elder, Elder Self n.<br> The later, older self in a Gemini incident, that has experienced the incident before. See also Junior.</p>";
        }

                 if ( element.is( "#finnah" ) ) {
          var text = element.text();
          return "<p>Further information is not available here.<br>This phrase is used whenever an informative answer cannot be given to a Spanner, on the understanding that knowing too much or too little can be burdensome to one's Yet. The sentence is perfectly information-neutral, revealing only that additional information on the subject matter one seeks will not be found at that place and time - not whether the respondent knows, or doesn't know the answer, nor any clue to its discovery or relevance. See also Frune.</p>";
        }


         if ( element.is( "#frag" ) ) {
          var text = element.text();
          return "<p>Frag, Fragmentation n.<br> 1. n. The state of inconsistency with the universe, corrected at the As/As Not by proper application of sentient force.<br>2. v. To Frag. To use sentient force to cause such inconsistency.</p>";
        }


        if ( element.is( "#gemeni" ) ) {
          var text = element.text();
          return "<p>Gemini Incident<br>An event where a Spanner meets himself. Such incidents have strict rules of conduct, primarily governed by the Second Maxim, “respect your Elders, they know more than you”.</p>";
        }

        if ( element.is( "#junior" ) ) {
          var text = element.text();
          return "<p>Junior, Junior self n.<br> The earlier, younger self in a Gemini incident, that has not experienced the incident before. See also Elder.</p>";
        }


        if ( element.is( "#level" ) ) {
          var text = element.text();
          return "<p>Level n.<br>The &quot;present&quot; as currently occupied or described. The ordinary passage of time from past to future</p>";
        }


                   if ( element.is( "#leveller" ) ) {
          var text = element.text();
          return '<p>Leveller n.<br> A person unaware of Spanning, and unable to Span. An ordinary human.</p>';
        }

                   if ( element.is( "#maxims" ) ) {
          var text = element.text();
          return "<p>The Maxims n. pl.<br> The set of axioms Spanners loyal to the Continuum follow. The Maxims are believed to be universal throughout all spacetirne, with only minor variations.</p>";
        }

          if ( element.is( "#narcissist" ) ) {
          var text = element.text();
          return "<p>Narcissist n.<br>A Spanner at odds with the Continuum, using his ability and sentient force to attempt to alter events, usually for his own aggrandizement. So named after the figure in Greek myth who was so infattuated with himself, he became a vegetable.</p>";
        } 


        if ( element.is( "#sentientforce" ) ) {
          var text = element.text();
          return "<p>Sentient Force n.<br>Deliberate act of will, usually in reference to its application in ensuing events, or attempting to change them.</p>";
        }

        if ( element.is( "#span" ) ) {
          var text = element.text();
          return "<p>Span<br>1. n. The distance of spacetime a Spanner can travel safely without rest. Often indicative of social status and responsibility.<br>2. n. A length of time, used especially of the entire duration of a person, object or civilization.<br>3. v. to Span. The act of travelling through time at will. Most schools of Spanner philosophy regard all of the foregoing definitions as facets of the others.</p>";
        }

        if ( element.is( "#spanner" ) ) {
          var text = element.text();
          return "<p>Spanner n.<br>1. A wrench.<br>2. One who Spans; a person that can traverse time at will. Contrast Leveller. Natives from before the Industrial Revolution, prefer the related term spinner, as in a weaver.</p>";
        }

                 if ( element.is( "#up" ) ) {
          var text = element.text();
          return "<p>Up, Upward adv.<br>Towards the future from one's current place in spacetime. Futureward. Normally capitalized to differentiate it from a mere direction</p>";
        }


        if ( element.is( "#yet" ) ) {
          var text = element.text();
          return "<p>Yet, The Yet n.<br>Usually referred to with an article (the Yet, my Yet, his Yet, etc.) The Required Future. Each spanner comes across direct information of events that they have not experienced, but will. This is referred to as the Yet to distinguish it from other, especially linear, definitions of a &quot;future&quot; or &quot;past&quot;.</p>";
        }





      }
    });
  } );




