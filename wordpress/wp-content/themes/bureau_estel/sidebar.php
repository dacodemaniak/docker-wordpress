<?php
/**
* @name sidebar.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/
if ( is_active_sidebar( "sidebar" ) ) {
    echo "<aside id=\"primary-sidebar\" class=\"primary-sidebar widget-area\" role=\"complementary\">";
    dynamic_sidebar( "sidebar" );
    echo "</aside>"
}
