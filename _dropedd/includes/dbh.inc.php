<?php

// $name = $_POST["name"];
// $notes = $_POST["notes"];
// $type = $_POST["type"];
// $render = $_POST["render"];
// $color = $_POST["color"];
// $extras = isset($_POST["extras"]) ? implode(",", $_POST["extras"]) : ''; // Convertir el array en una cadena separada por comas si existe

// // Ruta relativa a la base de datos SQLite
// $db_path = __DIR__ . '/ReiPortfolio/Comissions_Info.db';

// // Comprobación de existencia del archivo de base de datos
// if (!file_exists($db_path)) {
//     die("Database file not found at path: $db_path");
// }

// // Conexión a la base de datos SQLite
// $conn = new SQLite3($db_path);

// if ($conn) {
//     echo "Successfully connected to SQLite database.<br>";
// } else {
//     die("Failed to connect to SQLite database.");
// }

// // Crear la tabla si no existe
// $createTableQuery = "
// CREATE TABLE IF NOT EXISTS registration (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     notes TEXT,
//     type TEXT,
//     render TEXT,
//     color TEXT,
//     extras TEXT
// )";
// $conn->exec($createTableQuery);

// // Preparar e insertar datos en la base de datos
// $stmt = $conn->prepare("INSERT INTO registration (name, notes, type, render, color, extras) VALUES (?, ?, ?, ?, ?, ?)");
// $stmt->bindValue(1, $name, SQLITE3_TEXT);
// $stmt->bindValue(2, $notes, SQLITE3_TEXT);
// $stmt->bindValue(3, $type, SQLITE3_TEXT);
// $stmt->bindValue(4, $render, SQLITE3_TEXT);
// $stmt->bindValue(5, $color, SQLITE3_TEXT);
// $stmt->bindValue(6, $extras, SQLITE3_TEXT);

// $result = $stmt->execute();

// if ($result) {
//     echo "Comission Registered Successfully...";
// } else {
//     echo "Failed to register comission.";
// }

// $stmt->close();
// $conn->close();



    // $name = $_POST["name"];
    // $notes = $_POST["notes"];
    // $type = $_POST["type"];
    // $render = $_POST["render"];
    // $color = $_POST["color"];
    // $extrasArray = isset($_POST["extras"]) ? $_POST["extras"] : [];

    // Convertimos el array de extras a una cadena de texto separada por comas

    
    $extras = implode(", ", $extrasArray);

    $dsn = "mysql:host=localhost; dbname=comissions_info";
    $dbusername = "root";
    $dbpassword = "";
    try {
        $pdo = new PDO($dsn, $dbusername, $dbpassword);
        $pdo->setAttribute (PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION)
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }






    // // Conexión a la base de datos
    // $conn = mysqli_connect("127.0.0.1", "root", "", "comissions_info");
    // if ($conn->connect_error) {
    //     die("Connection Failed : " . $conn->connect_error);
    // } else {
    //     $stmt = $conn->prepare("INSERT INTO registration (name, notes, type, render, color, extras) VALUES (?, ?, ?, ?, ?, ?)");
    //     $stmt->bind_param("ssssss", $name, $notes, $type, $render, $color, $extras);
    //     $stmt->execute();
    //     echo "Comission Registered Successfully...";
    //     $stmt->close();
    //     $conn->close();
    // }
?>
