
<?php
/**
 * ======================================
 * ====== Встроенные функции языка ======
 * ======================================
 *
 * == 5. Функции для работы с файлами ==
 *
 * 1. file_get_contents / file_put_contents
 * 2. fopen, fgets, fputs, fclose
 * 3. move_uploaded_file
 *
 */

// $data = file_get_contents('data.txt');
// var_dump($data);

// file_put_contents('data.txt', 'Новая строка' . "\n", FILE_APPEND);
// file_put_contents('data.txt', 'Новая строка');

//$allFileData = '';
// $fp = fopen('data.txt', 'r');
// $str = fgets($fp);

// var_dump($str);

// $str = '';
// while (!feof($fp)) {
//    $str .= fgets($fp, 1024);
//    $allFileData .= $str;
//    var_dump($str);
// }
// var_dump($str);
//var_dump($fp);
// fclose($fp);

$fp = fopen('data.txt', 'a');
$data = ['123', '456', '789'];
foreach ($data as $str) {
   fputs($fp, $str . "\n");
}


var_dump(file_get_contents('data.txt'));

// file_put_contents('newdir/test.txt', 123);