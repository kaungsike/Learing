<?php

$fileName = 'my.txt';

if(file_exists($fileName)){
    touch($fileName);
}

// var_dump(!file_exists("my.txt"));


$fileStream = fopen($fileName,'a');

fwrite($fileStream,"kaung");
fwrite($fileStream," sike");
fwrite($fileStream," pr");
fwrite($fileStream," kwar");

fclose($fileStream);