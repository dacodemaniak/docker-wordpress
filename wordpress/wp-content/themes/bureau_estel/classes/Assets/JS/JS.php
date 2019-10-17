<?php
/**
 * @name JS
 * @author IDea Factory
 * @version 1.0.0
 */
 require_once(__DIR__ . "/../Asset.php");

 class JS extends Asset {
     private static $jsDir = "/assets/js/";

     public static function enqueue() {
        $jsDir = self::getDocumentRoot() . self::$jsDir;
        wp_register_script("chunk", $jsDir . "app.chunk.js", [], "1.0.0", false);
        wp_register_script("app", $jsDir . "app.js", [], "1.0.0", false);
        wp_enqueue_script("chunk");
        wp_enqueue_script("app");
     }
 }