<?php

require get_theme_file_path( 'inc/customizer/presentation.php' );
require get_theme_file_path( 'inc/customizer/news.php' );

add_action( 'customize_register', 'sakura_customize_register');

function sakura_customize_register( $wp_customize )
{
    $panel_id = 'sakura_theme_panel';

    $wp_customize->add_panel(
        $panel_id,
        [
            'title'         => '★Configuration du thème sakura★',
            'description'   => ' Options de configuration du thème sakura',
            'priority'      => 1
        ]
    );

    sakura_register_customizer_section_presentation($wp_customize, $panel_id);
    sakura_register_customizer_section_news($wp_customize, $panel_id);
}
?>