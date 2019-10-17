<?php
/**
* @name functions.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/

require_once(__DIR__ . "/classes/Assets/CSS/CSS.php");
require_once(__DIR__ . "/classes/Assets/JS/JS.php");
require_once(__DIR__ . "/classes/Assets/Favicon/Favicon.php");

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
add_action( 'widgets_inistylet', 'add_Widget_Support' );

// Register a new navigastyletion menu
function registerCustomNavMenus() {
    register_nav_menus(
        [
            "sticky-top-menu" => "sticky-top-menu"
        ]
    );
    //var_dump(get_registered_nav_menus());
}

// Hook to the init action hook, run our navigation menu function
add_action( "init", "registerCustomNavMenus" );



add_action("wp_enqueue_scripts", "CSS::enqueue");
add_action("wp_enqueue_scripts", "JS::enqueue");
add_action("wp_head", "Favicon::enqueue");