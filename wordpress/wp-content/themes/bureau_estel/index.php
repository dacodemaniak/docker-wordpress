<?php
/**
* @name index.php
* @author IDea Factory - https://www.ideafactory.fr
* @version 1.0.0
* @license GNU General Public License v3 or later - http://www.gnu.org/licenses/gpl-3.0.html
*/
?>
<?php get_header(); ?>
<main class="row">
  <section class="content-area content-thin">
  <?php if ( have_posts() ) {
     while ( have_posts() ) : the_post(); 
      var_dump(the_post());
     ?>
      <article class="col-12" id="<?php  ?>">
        <header>
          <h2><?php the_title(); ?></h2>
        </header>
        <?php the_content(); ?>
      </article>
  <?php endwhile; } else { ?>
      <article>
        <p>Sorry, no posts were found!</p>
      </article>
  <?php } ?>

  </section><?php get_sidebar(); ?>
</main>
<?php get_footer(); ?>