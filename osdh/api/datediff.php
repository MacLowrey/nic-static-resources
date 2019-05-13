<?php
/* Example
$date1 = new DateTime("2007-03-24");
$date2 = new DateTime("2009-06-26");
$interval = $date1->diff($today);
echo "difference " . $interval->y . " years, " . $interval->m." months, ".$interval->d." days "; 

// shows the total amount of days (not divided into years, months and days like above)
echo "difference " . $interval->days . " days ";
*/

try{
    $apidate1 = new DateTime($_GET["date1"]);
    $apidate2 = new DateTime($_GET["date2"]); //defaults to today if date2 is blank
}
catch(Exception $e){
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array('success' => 0));
    exit;
}
$interval2 = $apidate1->diff($apidate2);
$response = array('DATE1' => $apidate1->format('m/d/Y'), 'DATE2' => $apidate2->format('m/d/Y'),'DIFFERENCE' => $interval2->days, 'success' => 1);
header('Content-Type: application/json');
echo json_encode($response);
