<?php

if (!empty($_GET['vals'])) {
    file_put_contents('test.txt', json_encode($_GET));
}
