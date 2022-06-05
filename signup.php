<?php
$db = pg_connect("host=localhost port=5432 dbname=users user=postgres password=vip#@990");
$query = "INSERT INTO login VALUES ('NULL','$_POST[signupEmail]','$_POST[signupPassword]','$_POST[signupGener]')";
$result = pg_query($query); 
?>