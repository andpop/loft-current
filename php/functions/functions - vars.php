<?php

ini_set('display_errors', 'on');

error_reporting(E_ALL | E_NOTICE);

$a = 123;
$b = '123';
$c = '123ab';

var_dump(is_numeric($a));
var_dump(is_numeric($b));
var_dump(is_numeric($c));

die();

$b = $a . 'asd';

var_dump(is_int($a));
var_dump(is_int($b));
$arr = [$a, $b];

// var_dump(empty($a));
// var_dump(empty($c));

$arr = [0.01, '', '01', null, false, [0]];
$print = print_r($arr, true);
print_r($arr);
// $export = var_export($emptyArray, true);
// foreach ($emptyArray as  $var) {
//     var_dump(empty($var));
// }

// echo php_ini_loaded_file();