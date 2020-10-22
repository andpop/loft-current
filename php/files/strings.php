<?php
/**
 * ======================================
 * ====== Встроенные функции языка ======
 * ======================================
 *
 * == 2. Функции для работы со строками ==
 *
 * 1. strlen / mb_strlen
 * 2. strpos
 * 3. str_replace
 * 4. explode / implode
 * 5. strtoupper / strtolower
 * 6. substr / mb_substr
 * 7. md5, crc32, sha1
 */

//var_dump([
//    'strlen(Dima)' => strlen('Dima'),
//    'strlen(Дима)' => strlen('Дима'),
//    'mb_strlen(Дима)' => mb_strlen('Дима', 'cp-1251'),
//]);

//$string = 'Мама мыла раму раму раму';
//$subString = 'мыла';
//
//var_dump([
//    'strpos' => strpos($string, $subString, 5)
//]);
//
//if (strpos($string, $subString) !== false) {
//    echo "Строка $subString найдена в строке $string";
//} else {
//    echo "Строка $subString не найдена в строке $string";
//}
//
//var_dump(['mb_strpos' => mb_strpos($string, $subString)]);
//
//var_dump(['str_replace' => str_replace('раму', 'окно', $string, $count)]);
//var_dump($count);
//
//$exploded = explode(', ', 'Мама, Папа, Сын');
//var_dump($exploded);
//
//var_dump(implode(', ', $exploded));

//var_dump(mb_strtolower('ВЖДОАЖВДЛАОЖ'));
//
//var_dump(ucfirst('kdjashfDFSlksdSDFhfl'));
//var_dump(lcfirst('FdjashfDFSlksdSDFhfl'));

$string = '0123456789';
var_dump(substr($string, 5));
var_dump(substr($string, 5, 3));
var_dump(substr($string, 2, -3));
var_dump(substr($string, -6, -3));

var_dump([
    'md5' => md5($string),
    'crc32' => crc32($string),
    'sha1' => sha1($string),
]);

var_dump([
    'md5' => md5($string . 'fdfdsfzxc.neqrt.'),
    'crc32' => crc32($string . 'f'),
    'sha1' => sha1($string . 'f'),
]);