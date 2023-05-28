<?php

$data['name'] = $_POST['name'];
$data['email'] = $_POST['email'];
$data['age'] = $_POST['age'];
$data['address'] = $_POST['address'];
$data['mobile'] = $_POST['mobile'];
 
echo json_encode($data);
exit;
?>