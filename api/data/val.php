<?php

$jsonLoc = '../../vuecms.json';

if (empty($_GET['vals'])) {
    exit;
}

$lastData = json_decode(file_get_contents($jsonLoc), true);
empty($lastData) && $lastData = [];

$valList = $_GET['vals'];
foreach ($valList as $val) {
    $lastData[substr($val['key'], 1)] = $val['value'];
}

$newJson = json_encode($lastData, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
file_put_contents($jsonLoc, $newJson);
