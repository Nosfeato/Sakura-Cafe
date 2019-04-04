<?php

/*
Plugin Name: Sakura Settings
Author: Sakura team
Version: 1.0
*/

if ( ! defined( 'WPINC' ) ) {
    http_reponse_code( 404 );
    exit;
}


add_action( 'init', 'sakura_register_post_type' );

function sakura_register_post_type()
{
    register_post_type(
        'news', 
        [
            'labels' => [ 
                'name'               => 'news',
                'singular_name'      => 'news',
                'add_new_item'       => 'Ajouter une nouvelle news',
                'edit_item'          => 'Editer la news',
                'new_item'           => 'Nouvelle news',
                'view_item'          => 'Voir la news',
                'view_items'         => 'Voir les news',
                'search_items'       => 'Rechercher des news',
                'not_found'          => 'Aucun news trouvée',
                'not_found_in_trash' => 'Aucun news trouvée dans la corbeille',
                'attributes'         => 'Attributs de page',
                'all_items'          => 'Toutes les news',
                'archives'           => 'Archives des news'
            ],

            'exclude_from_search' => false, 
            'publicly_queryable'  => true, 
            'show_ui'             => true, 
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 4,
            'menu_icon'           => 'dashicons-portfolio',
            'hierarchical'        => false, 
            'supports'            => [
                'title',
                'editor',
                'thumbnail',
                'page-attributes',
                'excerpt'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true 

        ]
    );

    register_taxonomy(
        'technology',
        'news',
        [
            'labels' => [
                'name'                       => 'Technologies',
                'singular_name'              => 'Technologie',
                'all_items'                  => 'Toutes les technologies',
                'edit_item'                  => 'Editer une technologie',
                'view_item'                  => 'Voir une technologie',
                'update_item'                => 'Mise à jour d\'une technologie',
                'add_new_item'               => 'Ajouter une nouvelle technologie',
                'new_item_name'              => 'Nom de la nouvelle technologie',
                'search_items'               => 'Rechercher des technologies',
                'popular_items'              => 'Technologies populaires',
                'separate_items_with_commas' => 'Séparer les technologies avec une virgule',
                'add_or_remove_items'        => 'Ajouter ou supprimer une technologie',
                'choose_from_most_used'      => 'Choisir une technologie parmi les plus utilisées',
                'not_found'                  => 'Aucune technologie trouvée',
                'back_to_items'              => 'Retour aux technologies'
            ],
            'public'            => true,
            'show_in_rest'      => true,
            'show_admin_column' => true,
            'hierarchical'      => false 
        ]
    );

    register_taxonomy(
        'news_type',
        'news',
        [
            'labels' => [
                'name'                       => 'Types',
                'singular_name'              => 'Type',
                'all_items'                  => 'Tous les types',
                'edit_item'                  => 'Editer un type',
                'view_item'                  => 'Voir un type',
                'update_item'                => 'Mise à jour d\'un type',
                'add_new_item'               => 'Ajouter un nouveau type',
                'new_item_name'              => 'Nom du nouveau type',
                'search_items'               => 'Rechercher des types',
                'popular_items'              => 'Types populaires',
                'separate_items_with_commas' => 'Séparer les types avec une virgule',
                'add_or_remove_items'        => 'Ajouter ou supprimer un type',
                'choose_from_most_used'      => 'Choisir un type parmi les plus utilisés',
                'not_found'                  => 'Aucun type trouvé',
                'back_to_items'              => 'Retour aux types',
                'parent_item'                => 'Type parent',
                'parent_item_colon'          => 'Type parent :',
            ],
            'public'            => true,
            'show_ui'           => true,
            'show_in_rest'      => true,
            'show_admin_column' => true,
            'hierarchical'      => true
        ]
    );
}


register_activation_hook(
    __FILE__,
    function() {
        sakura_register_post_type();
        flush_rewrite_rules();
    }
);

register_deactivation_hook(
    __FILE__,
    function() {
        flush_rewrite_rules();
    }
);
