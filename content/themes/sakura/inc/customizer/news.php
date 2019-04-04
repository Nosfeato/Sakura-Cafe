<?php


function sakura_register_customizer_section_news($wp_customize, $panel_id)
{
    $section_id = 'sakura_section_news';

    $wp_customize->add_section(
        $section_id,
        [
            'title'       => 'News',
            'description' => 'Options de configuration de la page des news',
            'panel'       => $panel_id,
        ]
        );
    
    $wp_customize->add_setting( 'sakura_section_date_news_actif' );

    $wp_customize->add_control(
        'sakura_section_date_news_actif',
        [
            'type'     => 'checkbox',
            'label'    => 'Activer l\'affichage de la date de la news',
            'section'  => $section_id
        ]
    );


    $queried_object_id =  'sakura_section_date_news'; 

    $wp_customize->add_setting( 
        $queried_object_id, 
        [
            'default'            => '',
            'sanitize_callback'  => 'sakura_sanitize_date',
            'validate_callback'  => 'sakura_validate_date',
        ]
    );

    $wp_customize->add_control(
        $queried_object_id,
        [
            'type'     => 'date',
            'label'    => 'Entrer la date du prochaine événement',
            'section'  => $section_id,
        ]
    );
}
?>