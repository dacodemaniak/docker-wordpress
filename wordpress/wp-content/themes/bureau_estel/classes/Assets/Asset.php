<?php
/**
 * @name Asset
 * @author IDea Factory
 * @version 1.0.0
 * @abstract Defines abstract static methods for enqueuing assets
 */
 abstract class Asset {

     abstract public static function enqueue();

     protected final static function getDocumentRoot(): string {
         $rootPathes = explode("/", $_SERVER["DOCUMENT_ROOT"]);
         $themePathes = explode("/", get_template_directory());

         // Rebuild path from merge exclude two arrays
         $themePathes = array_diff($themePathes, $rootPathes);

         return "/" . implode("/", $themePathes);
     }
 }