<?php
/**
 * @name CSS
 * @author IDea Factory
 * @version 1.0.0
 */
 class CSS {
     private static $templateDir = "/wp-content/themes/assets/css/";

     public static function enqueue() {
        wp_enqueue_style( "custom", self::$templateDir . "custom.css");
     }
 }