<?php
/**
 * @name JS
 * @author IDea Factory
 * @version 1.0.0
 */
 require_once(__DIR__ . "/../Asset.php");

 class Favicon extends Asset {
     private static $iconDir = "/assets/icons/";

     public static function enqueue() {
        $iconDir = self::getDocumentRoot() . self::$iconDir;

        $icons = self::getIcons();

        $output = "";
        foreach ($icons as $icon) {
            $output .= "<link rel=\"" . $icon["rel"] . "\" ";

            if ($icon["type"] !== null) {
                $output .= "type=\"" . $icon["type"] . "\" "; 
            }

            if ($icon["sizes"] !== null) {
                $output .= "sizes=\"" . $icon["sizes"] . "\" "; 
            }

            $output .= "href=\"" . $iconDir . $icon["href"] . "\">\n";
        }

        // Add manifest file
        $output .= "<link rel=\"manifest\" href= \"" . $iconDir . "site.webmanifest\">\n";
        
        $output .= "<meta name=\"msapplication-TileColor\" content=\"#da532c\">\n";
        $output .= "<meta name=\"theme-color\" content=\"#ffffff\">\n";

        echo $output;
     }

     private static function getIcons(): array {
         return [
             [
                 "rel" => "apple-touch-icon",
                 "sizes" => "180x180",
                 "type" => null,
                 "href" => "apple-touch-icon.png",
                 "color" => null
             ],
             [
                "rel" => "icon",
                "sizes" => "32x32",
                "type" => "image/png",
                "href" => "favicon-32x32.png",
                "color" => null
            ],
            [
                "rel" => "icon",
                "sizes" => "16x16",
                "type" => "image/png",
                "href" => "favicon-16x16.png",
                "color" => null
            ],  
            [
                "rel" => "mask-icon",
                "sizes" => null,
                "type" => null,
                "href" => "safari-pinned-tab.svg",
                "color" => "#5bbad5"
            ]
        ];
     }
 }