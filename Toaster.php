<?php require_once(__DIR__ . '/vendor/autoload.php');

date_default_timezone_set('America/Toronto');

\RHildred\Editable\Phtml::render("index.phtml", "index.html");
