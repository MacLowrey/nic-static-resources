<?php
/**
 * Created by PhpStorm.
 * User: Jon
 * Date: 7/26/18
 * Time: 11:22 AM
 */

function formatnum($n){
    if ($n<10){return "0000".$n;}
    else if ($n<100){return "000".$n;}
    else if ($n<1000){return "00".$n;}
    else if ($n<10000){return "0".$n;}
}

function nextID($currentID){
    $currentNum = substr($currentID,1,5);
    $currentNum = intval($currentNum);
    $nextNum = $currentNum+1;
    $newID = "P".formatnum($nextNum);
   // echo "new ID ".$newID;
    return $newID;
}
$logfile = "log.txt";
$dt = new DateTime();
$now = $dt->format('Y-m-d H:i:s');
//echo "Hello World!";
$loglines = file($logfile);
$currentID = $loglines[0];
$currentID = substr($currentID,0,6);
$newID = nextID($currentID);
$response = [
	'id' => $newID
];
header('Content-Type: application/json');
echo json_encode($response);
$currentNum = substr($currentID,1,5);
$currentNum = intval($currentNum);
$currentNum = $currentNum+1;
//echo "Current ID " . $currentID . "\r\n";
//echo $currentNum;
$lines =  file_get_contents($logfile);


file_put_contents($logfile, $newID . " " . $now ."\r\n" . $lines);
