<?php
$db = pg_connect("host=localhost port=5432 dbname=users user=postgres password=vip#@990");
$result = pg_query($db, "SELECT * FROM login where email = '$_POST[signupEmail]'");
$row = pg_fetch_assoc($result);
if (!$result)
{
echo "Update failed!!";
} else
{
echo "Update successfull;";
}
?>