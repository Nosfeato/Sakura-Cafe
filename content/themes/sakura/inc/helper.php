<?php

function sakura_sanitize_date($date)
{
    return ($date);
}

function sakura_validate_date( $validity, $value )
{   
    $date_actif = get_theme_mod('sakura_section_date_news_actif');

    if ($date_actif) {
        $date = DateTime::createFromFormat('Y-m-d', $value);
        if ($date === false)
        {
            $date = DateTime::createFromFormat('d/m/y', $value);
            if ( $date === false ) {
                $validity->add( 'required', 'Le champ ne peut être vide.' );
            return $validity;
            }
        }
    }  
}
