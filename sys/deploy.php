<?php

$dir = $_SERVER['DOCUMENT_ROOT'];
$log = "$dir/sys/log.txt";

if (file_exists($log)) {
	unlink($log);
}

$cmd = "cd $dir && git checkout . && git pull 2>&1 | tee $log 2>/dev/null >/dev/null &";
echo shell_exec($cmd);