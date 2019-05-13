<?php
include_once("healthFoodLodging.php");
// Fee Total Calculator
// Take a given application ID, License Fee, and number of late periods and return the total, before our fee.

try {
    $appID = $_GET["appid"];
    $licensefee = $_GET["licensefee"];
    $calcfee = $_GET["calcfee"];
    $lateperiods = $_GET["lateperiods"] ;
} catch(Exception $e) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array(
        'SUCCESS' => false
    ));
    exit;
}
$feeTotal = 0;
if ($appID == 'HFL')
{
    $feeTotal = getHFLTotal($licensefee, $lateperiods);

}

$response = array(
    'LICENSEFEE' => $licensefee,
    'LATEPERIODS' => $lateperiods,
    'CALCFEE' => $calcfee,
    'feeTotal' => $feeTotal
);
header('Content-Type: application/json');
echo json_encode($response);

