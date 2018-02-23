<?php

$file = './log.txt';

if (file_exists($file)) {
	readfile($file);
}
