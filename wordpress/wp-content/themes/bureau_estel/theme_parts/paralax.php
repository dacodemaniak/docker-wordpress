<?php
/**
* @name paralax
* @package theme_parts
* @version 1.0.0
* @abstract Paralax effect for home page
*/

// Get the background image from Wordpress
$imageDetail = wp_get_attachment_image_src(29, [1920, 1280]);
$image = $imageDetail[0];
//var_dump($image);
?>
<div 
    class="js-parallax parallax container-fluid"
    data-img="<?php echo $image; ?>"
>
    <p><?php echo get_bloginfo("description"); ?></p>
</div>