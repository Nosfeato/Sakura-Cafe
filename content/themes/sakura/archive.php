<?php /* Template Name: Archive */ ?>


<?php 

get_header();

$archive_posts_query = new WP_Query([
    'post_type'       => 'post',
    'post_per_page'   => 4,
    'orderby'         => 'date',
    'order'           => 'DESC',
]);

if($archive_posts_query->have_posts() ):
    while ($archive_posts_query->have_posts() ):
        $archive_posts_query->the_post();

        the_title();
        the_content();
        the_post_thumbnail(array (400, 300));
    endwhile;
endif;

get_footer();


?>