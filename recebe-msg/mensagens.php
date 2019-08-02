<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../node_modules/bootstrap/compiler/bootstrap.css"/>
    <title>Document</title>
</head>
<body>
     <?php
        require_once "../_conect.php";

        echo "<h1> Mensagens recebidas! </h1>";

        echo "<table border='1'>";
        echo "<tr>";
        echo "<th>Nome</th>";
        echo "<th>E-mail</th>";
        echo "<th>Mensagem</th>";
        echo "</tr>";

        $query = "SELECT * FROM pessoas";
        $resultado = mysqli_query($conn, $query);

        while ($registro = mysqli_fetch_array($resultado)) {

            $nome = $registro['nome'];
            $email = $registro['email'];
            $msg = $registro['msg'];
        
            echo "<tr>";
            echo "<td>$nome</td>";
            echo "<td>$email</td>";
            echo "<td>$msg</td>";
            echo "</tr>";
        
        }
    ?>
</body>
</html>