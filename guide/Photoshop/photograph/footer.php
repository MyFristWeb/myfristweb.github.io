<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>

<footer class="footer">
	<?php if ($this->options->notice): ?>
	<p class="related">公告：<?php $this->options->notice() ?></p>
	<?php endif; ?>
	<p class="related"><a href="http://typecho.org/" target="_blank">POWERED BY TYPECHO</a> / <a href="/photograph.html" target="_blank">THEME BY SIITAKE</a></p>
	<p class="related"><a href="http://siitake.cn/" target="_blank">SIITAKE.CN</a> &copy; <?php echo date('Y'); ?> <a href="/about.html">PHOTOGRAPH</a></p>
	<?php if ($this->options->icp): ?>
	<p class="related"><a href="http://www.miitbeian.gov.cn/" target="_blank"><?php $this->options->icp() ?></a></p>
	<?php endif; ?>
	<?php if ($this->options->statistics): echo '<div style="display:none;">'; $this->options->statistics(); echo '</div>'; endif; ?>
</footer><!-- end #footer -->
<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/masonry-docs.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lightgallery.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-pager.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-autoplay.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-fullscreen.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-zoom.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-thumbnail.min.js'); ?>"></script>
<script type="text/javascript">if(history.length < 2){$('.header-post-back').css('opacity', 0);}</script>
<script type="text/javascript">
<?php if ($this->is('post')) : ?>
	$(function() {
		//瀑布流
		var $container = $('#masonry');
		$container.imagesLoaded(function() {
			$container.masonry({
				itemSelector: '.post-item',
				gutter: 0,
				isAnimated: false,
			});
		});
		//灯箱
		var lg = document.getElementById('masonry');
		lightGallery(lg, {
			selector: '.post-item',
			download: false,
			enableTouch: true
		});
  });
<?php endif; ?>
</script>
<?php $this->footer(); ?>
</body>
</html>
