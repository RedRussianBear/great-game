<?php
	session_start();
	
	$logged = false;
	
	$servername = "localhost";
	$username = "username";
	$password = "password";

	// Create MySQL connection
	$conn = new mysqli($servername, $username, $password);
	
	if(isset($_POST['username']) && isset($_POST['password']))
	{
		$query = "SELECT pass_hash, salt FROM Users WHERE username=$_POST['username']";
		$result = $conn->query();
		if ($result->num_rows > 0) 
		{
			$row = $result->fetch_assoc();
			if($row['pass_hash'] == sha1($_POST['password'] . $row['salt']))
			{
				$logged = true;
				$_SESSION['user'] = $_POST['username'];
				$_SESSION['auth'] = true;
			}
			else
				echo "<h1>Invalid password</h1>";
		}
		else
			echo "<h1>Username not Found</h1>";
    }

	if($logged)
	{
		echo "<h2>Login Successful</h2>";
	}
	else
	{
		echo "<h2>Login Failed</h1>";
	}
	
	$conn->close();
?>