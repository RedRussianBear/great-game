<?php
	session_start();
	$_SESSION = array();
	session_destroy();
	
	echo "<h1>Logout Successful</h1>";
?>