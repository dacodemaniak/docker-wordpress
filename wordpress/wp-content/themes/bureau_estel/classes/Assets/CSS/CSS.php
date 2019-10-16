<?php
/**
 * @name CSS
 * @author IDea Factory
 * @version 1.0.0
 */
 require_once(__DIR__ . "/../Asset.php");

 class CSS extends Asset {
     private static $cssDir = "/assets/css/";

     public static function enqueue() {
         $cssDir = self::getDocumentRoot() . self::$cssDir;

        wp_enqueue_style( "custom", $cssDir . "custom.css");
     }
 }