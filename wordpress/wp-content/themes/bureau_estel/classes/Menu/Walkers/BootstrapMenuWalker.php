<?php
/**
 * @name BoostrapMenuWalker
 * @author IDea Factory
 * @version 1.0.0
 * @abstract Specific walker for simple Bootstrap menus 
 */

 //require_once(__DIR__ . "/../../../../../../wp-include/class-walker-nav-menu.php");
 
 class BootstrapMenuWalker extends Walker_Nav_Menu {
    private static $_INDENT_ = "\t";

    public function start_lvl(&$output, $depth = 0, $args= []) {}
    
    public function start_el(&$output, $item, $depth = 0, $args = [], $id = 0) {

        $indent = ( $depth ) ? str_repeat( self::_INDENT_, $depth ) : '';

        $classNames = "";
        $value = "";

        $classes = empty( $item->classes ) ? [] : (array) $item->classes;

        $classes[] = "menu-item-" . $item->ID;
        $classes[] = "nav-item";

        $classNames = join( " ", apply_filters( "nav_menu_css_class", array_filter( $classes ), $item, $args ) );
        $classNames = $classNames ? " class=\"" . esc_attr( $classNames ) . "\"" : "";

        $id = apply_filters( 'nav_menu_item_id', 'menu-item-'. $item->ID, $item, $args );
        $id = $id ? ' id="' . esc_attr( $id ) . '"' : '';
    
        $output .= $indent . "<li" . $id . $value . $classNames .">";

        $atts = array();
        $atts["title"]  = ! empty( $item->attr_title ) ? $item->attr_title : "";
        $atts["target"] = ! empty( $item->target )     ? $item->target     : "";
        $atts["rel"]    = ! empty( $item->xfn )        ? $item->xfn        : "";

        $atts["href"]   = ! empty( $item->url ) ? $item->url : "";

        $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args );

        $attributes = "";
        foreach ( $atts as $attr => $value ) {
            if ( ! empty( $value ) ) {
                $value = ( "href" === $attr ) ? esc_url( $value ) : esc_attr( $value );
                $attributes .= " " . $attr . "=\"" . $value . "\"";
            }
        }

        // MODIF 3 : on remplace 'a' par $balise
        $item_output = $args->before;
        $item_output .= "<a class=\"nav-link\"" . $attributes . ">";
        $item_output .= $args->link_before . apply_filters( "the_title", $item->title, $item->ID ) . $args->link_after;
        $item_output .= "</a>";
        $item_output .= $args->after;

        $output .= apply_filters( "walker_nav_menu_start_el", $item_output, $item, $depth, $args );

        //echo $output;
    }

    public function end_el(&$output, $item, $depth = 0, $args = []) {
        //return $output;
    }

    public function end_lvl(&$output, $depth = 0, $args = []) {
        //return $output;
    }
 }