<?php

$recepient = "pashakiz@gmail.com"; /*basileyvjiks@gmail.com*/
$sitename = "Pulsar Video Platform";

$name = trim($_POST["name"]);
$position = trim($_POST["position"]);
$org = trim($_POST["org"]);
$email = trim($_POST["email"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \r\nОрганизация: $org \r\n Должность: $position \r\nEmail: $email ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: $name <$email>");