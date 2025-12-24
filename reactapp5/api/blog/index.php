<?php
include_once ('../db_config.php');

$sql = "SELECT * FROM clients";
$rawData = $db->query($sql);
$outputData = [];
while($row = $rawData->fetch_object()){
    $outputData[] = $row;
}
print_r($outputData);
?>