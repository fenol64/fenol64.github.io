<?php

	include_once ('_conect.php');

	$nome = $_POST["nome"];
	$email = $_POST["email"];
	$msg = $_POST["mensagem"];

	$bota_no_bd = "INSERT INTO pessoas (nome, email, msg) VALUES ('$nome', '$email', '$msg')";

	$resultado = mysqli_query($conn, $bota_no_bd);


	echo "<script> alert('Enviado com sucesso') </script>";
	header("Location: _index.html");


?>
