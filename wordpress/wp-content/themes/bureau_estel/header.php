<?php
/**
* @name header.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
* @version 1.0.1
*   - Added company logo before site title
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

$themeDirectory = get_template_directory_uri();

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
      <div class="col-md-2 col-12 logo">
        <img class="img-fluid" src="<?php echo $themeDirectory; ?>/assets/images/logos/logo-bureau-d-estel-web.png" alt="Logo <?php bloginfo('name'); ?>">
      </div>
      <h1 class="col-md-10 col-12">
        <?php bloginfo('name'); ?>
      </h1>
    </header>

    <nav class="row navbar navbar-expand-lg navbar-light bg-light" id="sticky-top-menu">
      <!-- Just toggler button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-nav-bar" aria-controls="main-nav-bar" aria-expanded="false" aria-label="Basculer le menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="main-nav-bar">
          <?php wp_nav_menu( $bootstrapMenu->getOptions() ); ?>
      </div>
    </nav>