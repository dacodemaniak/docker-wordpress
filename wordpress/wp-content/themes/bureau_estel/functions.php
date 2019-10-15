<?php
/**
* @name functions.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/

require_once(__DIR__ . "/classes/CSS/CSS.php");

function add_normalize_CSS() {
    wp_enqueue_style( "custom", "/wp-content/themes/bureau_estel/assets/css/custom.css");
}

// Register a new sidebar simply named 'sidebar'
function add_widget_Support() {
    register_sidebar( array(
                    'name'          => 'Sidebar',
                    'id'            => 'sidebar',
                    'before_widget' => '<div>',
                    'after_widget'  => '</div>',
                    'before_title'  => '<h2>',
                    'after_title'   => '</h2>',
    ) );
}
// Hook the widget initiation and run our function
add_action( 'widgets_init', 'add_Widget_Support' );

// Register a new navigation menu
function add_Main_Nav() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
}
// Hook to the init action hook, run our navigation menu function
add_action( 'init', 'add_Main_Nav' );

add_action("wp_enqueue_scripts", "CSS::enqueue");