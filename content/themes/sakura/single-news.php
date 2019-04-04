<?php
get_header();


$args = new WP_Query([
  'post_type'   => 'news',
  'orderby'     => 'post_date',
  'order'       => 'ASC',
]);
if ( $args->have_posts() ) :
    while ( $args->have_posts() ) :
    $args->the_post();

    $date_actif = get_theme_mod('sakura_section_date_news_actif');

    if ($date_actif) {
    
    $date = get_theme_mod('sakura_section_date_news');
    ?>
    <h1><?php the_title() ?></h1><a> débutera le <?php echo $date ?></a>
    <?php
        the_content();
    } else {
?>
    <h1><?php the_title();?></h1>
<?php
    the_content();
    }
endwhile;
endif;
get_footer();
