<?php

// ajouter un rôle utilisateur 
add_role(
    'Utilisateur junior',
    __( 'Utilisateur junior' ),
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => false,
    )
);

add_role(
    'Utilisateur senior',
    __( 'Utilisateur senior' ),
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => true,
    )
);

add_role(
    'VIP',
    __( 'VIP' ),
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => true,
    )
);



?>