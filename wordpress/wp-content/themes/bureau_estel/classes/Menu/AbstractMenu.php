<?php
/**
* @name AbstractMenu
* @author IDea Factory
* @version 1.0.0
* @abstract Abstract class for menu generation
*/
abstract class AbstractMenu {
    /**
    * @var array
    *   Définition des options du menu
    */
    protected $options = [
        "theme_location" => null,
        "container" => null,
        "container_class" => null,
        "container_id" => null,
        "menu" => null,
        "menu_class" => null,
        "menu_id" => null,
        "echo" => null,
        "fallback_cb" => null,
        "before" => null,
        "after" => null,
        "link_before" => null,
        "link_after" => null,
        "items_wrap" => null,
        "depth" => 0,
        "walker" => null
    ];

    /**
     * @return array
     *  Returns menu options array to walk through
     */
    public function getOptions(): array {
        return $this->options;
    }
}