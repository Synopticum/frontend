<?php
# получаем данные и отсекаем пробельные символы в начале и конце:
$name       = @ trim ($_POST['name']);
$phone      = @ trim ($_POST['phone']);
$email      = @ trim ($_POST['email']);
$type       = @ trim ($_POST['type']);
$ordername  = @ trim ($_POST['ordername']);
$tname      = @ trim ($_POST['tname']);
$page       = $_SERVER['HTTP_REFERER'];
$emailTo    = "dmitriy.perchilo@gmail.com";
$from       = "turnik-store.ru";


if ( $type == 1 ) {
 //   if (! $name or ! $phone or $name=="Имя" or $phone=="Телефон") exit ('Вы заполнили не все поля');
# отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Заказ звонка") . "?=";
    $body       = " Данные с формы заказа звонка \n Имя: $name \n Телефон: $phone \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
   // header("Location: ".$_SERVER['HTTP_REFERER']);
    
} elseif ( $type == 2 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новая заявка") . "?=";
    $body       = " Данные с формы 'Узнать о бесплатной доставке' \n Имя: $name \n Телефон: $phone \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);

} elseif ( $type == 3 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новая заявка") . "?=";
    $body       = " Данные с формы 'Узнать о индивидуальной спортивной программе' \n Имя: $name \n Телефон: $phone \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);
} elseif ( $type == 4 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новая заявка") . "?=";
    $body       = " Данные с формы 'Узнать о профессиональной установки турника' \n Имя: $name \n Телефон: $phone \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);
} elseif ( $type == 5 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новая заявка") . "?=";
    $body       = " Данные с формы 'Получить консультацию' \n Имя: $name \n Телефон: $phone \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);
}  elseif ( $type == 6 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новый заказ") . "?=";
    $body       = " Данные с формы 'ЗАКАЖИТЕ ТУРНИК ПРЯМО СЕЙЧАС' \n Имя: $name \n Телефон: $phone \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);
}   elseif ( $type == 7 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новый заказ") . "?=";
    $body       = " Имя: $name \n Телефон: $phone \n Наименование товара: $tname \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);
}   elseif ( $type == 8 ) {
    # отправка данных на мыло админу
    $subject    = "=?utf-8?B?" . base64_encode("Новый заказ") . "?=";
    $body       = " Имя: $name \n Телефон: $phone \n Наименование товара: $ordername \n\n Источник: $page";
    $headers    = 'Content-type: text/plain; charset="utf-8"'; 
    $headers    .= "MIME-Version: 1.0\r\n";
    $headers    .= "From: ".$from."\r\n";
    mail (  $emailTo,
            $subject,
            $body, 
            $headers);
 //   header("Location: ".$_SERVER['HTTP_REFERER']);
}


?>