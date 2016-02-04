<?php

$recepient = "pashakiz@gmail.com";
$sitename = "Pulsar Video Platform";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$org = trim($_POST["org"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \r\nEmail: $email \r\nОрганизация: $org";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\r\n From: $name <$email>");