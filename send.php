<?php
include ('phpmailer/password.php');
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];


$title = "Новый запрос с Tolik-agency";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>электронная почта:</b> $email<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'anatoliybukharov15@gmail.com'; // Логин на почте
    $mail->Password   = $password; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('anatoliybukharov15@gmail.com', 'Анатолий Бухаров'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('tolikelement@gmail.com');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
