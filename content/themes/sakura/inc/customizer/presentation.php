<?php


function sakura_register_customizer_section_presentation($wp_customize, $panel_id)
{
    $section_id = 'sakura_section_presentation';

    $wp_customize->add_section(
        $section_id,
        [
            'title'       => 'Presentation',
            'description' => 'Options de configuration de la page de présentation',
            'panel'       => $panel_id,
        ]
        );

    $wp_customize->add_setting( 'sakura_section_presentation_inactif' );

    $wp_customize->add_control(
        'sakura_section_presentation_inactif',
        [
            'type'     => 'checkbox',
            'label'    => 'Désactiver la page de présentation',
            'section'  => $section_id
        ]
    );
}
?>