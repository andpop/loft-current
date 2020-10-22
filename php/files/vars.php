<?php
/**
 * ======================================
 * ====== Встроенные функции языка ======
 * ======================================
 *
 * == 1. Функции для работы с переменными ==
 *
 * 1 var_dump
 * 1 isset
 * 1 empty
 * 1 var_export
 * 1 print_r
 */

// включаем отображение ошибок
ini_set('display_errors', 'on');
// говорим интерпретатору какие виды ошибок мы хотим отображать (все виды)
error_reporting(E_ALL | E_NOTICE);

$a = 0;
$b = $a . 'asd';

$arr = [$a, $b];

//var_dump($arr);
//
//var_dump(isset($a));
//var_dump(isset($c));
//
//var_dump(empty($a));
//var_dump(empty($c));

$emptyArray = [0.001, '', '01', null, false, [0]];
//foreach ($emptyArray as $var) {
//    var_dump(empty($var));
//}

var_dump($emptyArray);

$export = var_export($emptyArray, true);

echo '<pre>';
echo $export;
echo '</pre>';

echo '<pre>';
$print = print_r($emptyArray, true);
echo $print;

var_dump(is_int($a));
var_dump(is_string($b));

$num = '123';
var_dump(is_numeric($num));