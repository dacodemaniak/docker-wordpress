<?php
/**
* @name header.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
 <head>   
   <meta charset="<?php bloginfo( 'charset' ); ?>">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   <title><?php bloginfo('name'); ?> &raquo; <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>

   <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
   
   <?php wp_head(); ?>
 </head>

 <body <?php body_class(); ?>>
  <div class="container-fluid">
    <header class="my-logo row">
      <h1><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo('name'); ?></a></h1>
    </header>
    <?php wp_nav_menu( array( 'header-menu' => 'header-menu' ) ); ?>