<?php
/**
* @name header.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/

/**
* Imports helper classes
*/
require_once("classes/Menu/BootstrapMenu.php");
require_once("classes/Menu/Walkers/BootstrapMenuWalker.php");

/**
 * Create an instance of BootstrapMenuWalker
*/
$bootstrapMenu = new BootstrapMenu("sticky-top-menu");

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
    <header class="row">
      <h1>
        <?php bloginfo('name'); ?>
      </h1>
    </header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Just toggler button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav-bar" aria-controls="main-nav-bar" aria-expanded="false" aria-label="Basculer le menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="main-nav-bar">
          <?php wp_nav_menu( $bootstrapMenu->getOptions() ); ?>
      </div>
    </nav>