<?php

ini_set('display_errors', 'on');

error_reporting(E_ALL | E_NOTICE);

$user = [
    'name' => 'Dima',
    'lastname' => 'Razumovskiy',
    'age' => 33
];

// var_dump(array_values($user));
// var_dump(array_keys($user));

$users = [];
for ($i = 0; $i < 4; $i++) { 
    $user = [
        'name' => 'User N' . $i,
        'lastname' => 'Razumovskiy',
        'age' => mt_rand(10, 50)
    ];
    $users[] = $user;
}

// $newUsers = array_map(function ($user) {
//     $user['city'] = mt_rand(1, 100);
//     return $user;
// }, $users);

array_walk($users, function (&$user) {
        $user['name'] = 'Masha';
});

// var_dump($users);

// var_dump($users);
// var_dump(array_column($users, 'age', 'name'));

$keys = ['key1', 'key2', 'key3'];
$values = [1, 2, 3];

// var_dump(array_combine($keys, $values));
// $newArray = array_combine($keys, $values);

// if (array_key_exists('key1', $newArray)) {
//     echo 'Ключ найден';
// } else {
//     echo 'Ключ не найден';
// }

// var_dump(array_flip($newArray));

$intArr_1 = [1, 2, 3];
$intArr_2 = [4, 5, 6, 7, 8];

$assocArr_1 = ['k1' => 1, 'k2' => 2, 'k3' => 3];
$assocArr_2 = ['k2' => 2, 'k3' => 30, 'k444' => 4];

// print_r(array_diff_key($assocArr_1, $assocArr_2));

// var_dump(array_merge($intArr_1, $intArr_2, $intArr_2));
// print_r(array_merge($intArr_1, $intArr_2, $intArr_2));
// print_r($intArr_1 + $intArr_2);

// print_r(array_merge($assocArr_1, $assocArr_2));
// print_r($assocArr_1 + $assocArr_2);
// print_r(array_diff([1, 2, 3, 4, 5], [2, 5]));

$arr = [1, 66, 25, 31, 9999, 0];

rsort($arr);

// print_r($arr);

$keys = [
    10 => 1,
    7 => 2,
    3 => 3,
    5 => 4,
    2 => 5
];

// krsort($keys);

// print_r($keys);

// $assoc = [
//     'user_1' => 32,
//     'user_2' => 15,
//     'user_4' => 22,
//     'user_5' => 99
// ];

// asort($assoc);

// print_r($assoc);

$users = [];
for ($i = 0; $i < 4; $i++) {
   $user = [
       'name' => 'User N' . $i,
       'lastname' => 'Razumovskiy',
       'age' => mt_rand(10, 50)
   ];
   $users[] = $user;
}

usort($users, function ($user1, $user2) {
    return $user1['age'] - $user2['age'];
});

print_r($users);