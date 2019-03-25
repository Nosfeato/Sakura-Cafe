<?php
        /*
        Template Name: Archives
        */
        get_header(); 

        $archive_posts_query = new WP_Query([
            'post_type'      => 'post', 
            'posts_per_page' => 2,
            'paged'          => 1,
            'orderby'        => 'date', 
            'order'          => 'DESC' 
        ]);
        if ( $archive_posts_query->have_posts() ) :
            while ( $archive_posts_query->have_posts() ) :
                $archive_posts_query->the_post();

                the_title();
                the_content();
                the_post_thumbnail();
        endwhile;
    endif;
?>

<?php
    $args = array( 'paginate' => true, ); $results = wc_get_orders( $args ); echo $results->total;
    $current_user = wp_get_current_user();
    var_dump($current_user->id);
  
    // Get all customer orders
      $customer_orders = get_posts( array(
          'numberposts' => -1,
          'meta_value'  => $current_user->id,
          'post_type'   => wc_get_order_types(),
          'post_status' => array_keys( wc_get_order_statuses() ),  //'post_status' => array('wc-completed', 'wc-processing'),
      ) );
      echo count( $customer_orders );

    $current_user = get_current_user_id();
    $new_role = new WP_User($current_user);
    var_dump($new_role);
    if (count($customer_orders)>= 5 ) {
        $new_role->remove_role( 'customer' );
        $new_role->add_role( 'Utilisateur senior' );
    } else {
        $new_role->remove_role ( 'Customer' );
        $new_role->add_role( 'Utilisateur junior' );
    };
?>

<?php
    if ( ! $customer_orders ) return;
    $product_ids = array();
    foreach ( $customer_orders as $customer_order ) {
        $order = new WC_Order( $customer_order->ID );
        $items = $order->get_items();
        foreach ( $items as $item ) {
            $product_id = $item->get_product_id();
            $product_ids[] = $product_id;
        }
    }
    $product_ids = array_unique( $product_ids );

    // QUERY PRODUCTS
    $args = array(
    'post_type'  => 'product',
    'post__in'   => $product_ids,
    );
    $loop = new WP_Query( $args );
    if ( $loop->have_posts() ) :
        while ( $loop->have_posts() ) :
            $loop->the_post();
            ?>
            <pre>
            <?php
                the_title();
                the_date();
?>
<?php
    endwhile;
    endif;



get_footer();

   /*     // LOOP THROUGH ORDERS AND GET PRODUCT IDS
    if ( ! $customer_orders ) return;
    $product_ids = array();
    foreach ( $customer_orders as $customer_order ) {
        $order = new WC_Order( $customer_order->ID );
        $items = $order->get_items();
        foreach ( $items as $item ) {
            $product_id = $item->get_product_id();
            $product_ids[] = $product_id;
        }
    }
    $product_ids = array_unique( $product_ids );
 
    // QUERY PRODUCTS
    $args = array(
       'post_type' => 'product',
       'post__in' => $product_ids,
    );
    $loop = new WP_Query( $args );
    var_dump($loop); */