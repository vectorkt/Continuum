<?php

// open connection to database

$servername = "localhost";
$username = "root";
$password = "";
$database = "feedbackdb";

// Create connection

$conn = new mysqli($servername, $username, $password, $database);

// Check connection

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




// Get feedback for thumbs up

  if (isset($_POST['thumbs_up'])){ 

    //sanitization & validation
    $name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING); 
    
    $mail=filter_input(INPUT_POST,'email',FILTER_SANITIZE_EMAIL); 
	$feedback=filter_input(INPUT_POST,'feedback',FILTER_SANITIZE_STRING); 
	$thumb=1; 

	if (! filter_var($mail,FILTER_VALIDATE_EMAIL) === true){ 
	
       $mail="Invalid e-mail address";
	}
    // Insert data into database 

     $sql = "INSERT INTO feedback_list (Name, Email, Feedback, Thumbs) VALUES ('$name', '$mail', '$feedback', $thumb)";

     if ($conn->query($sql) !== TRUE) {
        die("Error: " . $sql . "<br>" . $conn->error);
     }

    // close connection to the database
    $conn->close(); 

    // re-display the form
    header('Location: ../review.html'); 
  
  }
  
  
  
  
    if (isset($_POST['thumbs_down'])){ 

    // sanitization

    $name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING); 
    
    $mail=filter_input(INPUT_POST,'email',FILTER_SANITIZE_EMAIL); 
	$feedback=filter_input(INPUT_POST,'feedback',FILTER_SANITIZE_STRING); 
	$thumb=-1; 
 

	if (! filter_var($mail,FILTER_VALIDATE_EMAIL) === true){ 
	
       $mail="Invalid e-mail address";
	}
  

     $sql = "INSERT INTO feedback_list (Name, Email, Feedback, Thumbs) VALUES ('$name', '$mail', '$feedback', $thumb)";

     if ($conn->query($sql) !== TRUE) {
        die("Error: " . $sql . "<br>" . $conn->error);
     }

    // close connection to the database
    $conn->close(); 

    // re-display the form
    header('Location: ../review.html'); 
  
  }
  
  
 
// REPORT
  if (isset($_POST['recover_feedback_list'])){ 
  
  
  
	echo "<br>Feedback overview: <br><br>";
	
	
      // count thumbs and display
    $result = $conn->query("SELECT COUNT(*) FROM feedback_list WHERE Thumbs=1");
    $c = $result->fetch_array(); 

		
    echo "\n"."Total number of thumbs up = ".$c[0]; 
	
	echo "<br>";

	$result = $conn->query("SELECT COUNT(*) FROM feedback_list WHERE Thumbs=-1");
    $c = $result->fetch_array(); 

		
    echo "\n"."Total number of thumbs down = ".$c[0]; 
		
		
    echo "<br><br>Some individual feedback here: <br><br>";

    //create query 
    $sql = "SELECT Name, Email, Feedback, Thumbs FROM feedback_list";

    //  Send query with connection object and get result set
    $result = $conn->query($sql);

    //Show each feedback

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {
        // Display data on the web page
        echo "Name: ".$row["Name"]. " Email: " . $row["Email"]." Feedback: ".$row["Feedback"]. "<br>";
      }
    } else {echo "0 results";}




  // close connection to the database
  $conn->close(); 
/**/
 }
/**/
?>