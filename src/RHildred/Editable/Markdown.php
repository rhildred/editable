<?php

namespace RHildred\Editable;


use \Michelf\MarkdownExtra;

class Markdown
{
    public static function render($sFname){
        echo '<div class="editable" id="' . str_replace('.', '_', $sFname) . '">' . MarkdownExtra::defaultTransform(file_get_contents($sFname)) . "</div>";

    }
}
