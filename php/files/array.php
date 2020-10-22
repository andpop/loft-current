<?php
/**
 * ======================================
 * ====== Встроенные функции языка ======
 * ======================================
 *
 * == 4. Функции для работы с массивами ==
 *
 * 1. array_values
 * 2. array_keys
 * 3. array_column, array_combine
 * 4. array_key_exists
 * 5. array_flip
 * 6. array_map
 * 7. array_walk
 * 8. array_merge, сложение массивов
 * 9. array_diff
 * 10 array_diff_assoc
 * 11. sort, ksort, rsort, asort, usort
 */

//$user = [
//    'name' => 'Dima',
//    'lastname' => 'Razumovskiy',
//    'age' => 33
//];
//
//var_dump(array_values($user));
//var_dump(array_keys($user));

$users = [];
for($i = 0; $i < 8; $i++) {
    $user = [
        'name' => 'User №' . $i,
        'lastname' => 'Razumovskiy',
        'age' => mt_rand(10, 50)
    ];
    $users[] = $user;
}

//var_dump($users);
//var_dump(array_column($users, 'age', 'name'));

$keys = ['key1', 'key2', 'key3', 'key4'];
$values = [1, 2, 3, []];

$newArray = array_combine($keys, $values);

//var_dump($newArray);
//var_dump(array_flip($newArray));

//if (empty($newArray['key2'])) {
//    echo 'Ключ содержит пустое значение или не существует';
//} else {
//    echo 'Ключ найден';
//}

$newUsers = array_map(function ($user) {
    $user['city'] = mt_rand(1, 100);
    $user['age_name'] = $user['age'] < 18 ? 'не совершеннолетний' : 'совершеннолетний';
    return $user;
}, $users);

array_walk($users, function (&$user) {
    $user['name'] = 'Masha';
});

$intArr_1 = [1,2,3];
$intArr_2 = [4,5,6,7,8];

$assocArr_1 = ['k1' => 1, 'k2' => 2, 'k3' => 3];
$assocArr_2 = ['k2' => 222, 'k333' => 3, 'k444' => 4];

//var_dump([
//    'array_merge_int' => array_merge($intArr_1, $intArr_2),
//    '+_int' => $intArr_1 + $intArr_2,
//    'array_merge_assoc' => array_merge($assocArr_1, $assocArr_2),
//    '+_assoc' => $assocArr_1 + $assocArr_2,
//]);
//
//var_dump(array_diff($assocArr_1, $assocArr_2));
//var_dump(array_diff_assoc($assocArr_1, $assocArr_2));
//var_dump(array_diff_key($assocArr_1, $assocArr_2));

//$arr = [1,66,25,31,9999,0];
//var_dump($arr);
//sort($arr);
//var_dump($arr);
//
//$keys = [
//    10 => 1,
//    7 => 2,
//    3 => 3,
//    5 => 4,
//    2 => 5
//];
//krsort($keys);
//var_dump($keys);
//
//$assoc = [
//    'user_1' => 32,
//    'user_2' => 15,
//    'user_4' => 22,
//    'user_5' => 99,
//];
//arsort($assoc);
//var_dump($assoc);

var_dump($users);
usort($users, function ($user1, $user2) {
    return $user2['age'] - $user1['age'];
});
var_dump($users);