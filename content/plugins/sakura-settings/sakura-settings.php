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


add_action( 'init', 'sakura_register_news' );
add_action( 'init', 'sakura_register_products' );

function sakura_register_news()
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
                'not_found'          => 'Aucune news trouvée',
                'not_found_in_trash' => 'Aucune news trouvée dans la corbeille',
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
function sakura_register_products()
{
    register_post_type(
        'products', 
        [
            'labels' => [ 
                'name'               => 'produits',
                'singular_name'      => 'produit',
                'add_new_item'       => 'Ajouter un nouveau produit',
                'edit_item'          => 'Editer le produit',
                'new_item'           => 'Nouveau produit',
                'view_item'          => 'Voir le produit',
                'view_items'         => 'Voir les produits',
                'search_items'       => 'Rechercher des produits',
                'not_found'          => 'Aucun produit trouvé',
                'not_found_in_trash' => 'Aucun produit trouvé dans la corbeille',
                'attributes'         => 'Attributs de page',
                'all_items'          => 'Toutes les produits',
                'archives'           => 'Archives des produits'
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
        'products',
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
        'products_type',
        'products',
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
    register_taxonomy(
        'products_category',
        'products',
        [
            'labels' => [
                'name'                       => 'Variantes',
                'singular_name'              => 'Variante',
                'all_items'                  => 'Toutes les Variantes',
                'edit_item'                  => 'Editer une Variante',
                'view_item'                  => 'Voir une Variante',
                'update_item'                => 'Mise à jour d\'une Variante',
                'add_new_item'               => 'Ajouter une nouvelle Variante',
                'new_item_name'              => 'Nom du nouvelle Variante',
                'search_items'               => 'Rechercher des Variante',
                'popular_items'              => 'Variantes populaires',
                'separate_items_with_commas' => 'Séparer les Variantes avec une virgule',
                'add_or_remove_items'        => 'Ajouter ou supprimer une Variante',
                'choose_from_most_used'      => 'Choisir une Variante parmi les plus utilisées',
                'not_found'                  => 'Aucune Variante trouvée',
                'back_to_items'              => 'Retour aux Variante',
                'parent_item'                => 'Variante parent',
                'parent_item_colon'          => 'Variante parent :',
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
        sakura_register_news();
        sakura_register_products();
        flush_rewrite_rules();
    }
);

register_deactivation_hook(
    __FILE__,
    function() {
        flush_rewrite_rules();
    }
);
