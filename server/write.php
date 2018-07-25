<?php
$loudness = $_POST['loudness']; // get POST request from javascript
$textfile = "loudness.txt"; // Declares the name and location of the .txt file

$fileLocation = "$textfile";
$fh = fopen($fileLocation, 'w   ') or die("Something went wrong!"); // Opens up the .txt file for writing and replaces any previous content
$stringToWrite = "$loudness";
fwrite($fh, $stringToWrite); // Writes values to the .txt file
fclose($fh);
?>
