<?php
/**
* @name index.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/
?>
<?php get_header(); ?>
<main>
  <section class="row">
  <?php if ( have_posts() ) {
    $posts = get_posts();

     foreach($posts as $post) {
      setup_postdata($post);
     ?>
      <article class="col-12" id="<?php  echo $post->post_name; ?>">
        <header>
          <h2><?php the_title(); ?></h2>
        </header>
        <?php the_content(); ?>
      </article>
  <?php } 
    } else { ?>
      <article>
        <p>Sorry, no posts were found!</p>
      </article>
  <?php } ?>

  </section><?php get_sidebar(); ?>
</main>
<?php get_footer(); ?>