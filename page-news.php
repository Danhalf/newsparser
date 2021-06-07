<?php
/*
Template Name: News
*/

get_header();
?>
     
     <main class="news">
        <div class="news__container _container">
        <nav class="breadcrumb">
        <?php if(function_exists('bcn_display'))
    {
        bcn_display();
    }?>
    
          <div class="news__content">
          <h2 class="news__title">Новости технологий GPS</h2>
          <div class="news-wrapper"></div>
            <!-- <iframe
              id="news-iframe"
              src="https://p.dw.com/p/1GdIG/#autoTopicArticles"
              scrolling="no"
              >Ваш браузер не поддерживает iframe!</iframe
            > -->
            <!-- <script src="//rss.bloople.net/?url=https%3A%2F%2Fwww.liga.net%2Ftech%2Ftelecom%2Frss.xml&limit=5&showtitle=false&type=js"></script> -->
<!-- 
            <div class="news__copy">Новости предоставлены сайтом <a href="http://www.dw.com">dw.com</a></div> -->
          </div>
        </div>
      </main>
      <script type="module" src="/wp-content/themes/twentytwentyone/assets/js/script.js"></script>
      <?php
get_footer();