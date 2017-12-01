<template>
  <div>
    <!-- Root element of PhotoSwipe. Must have class pswp. -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <!-- Background of PhotoSwipe. 
                     It's a separate element as animating opacity is faster than rgba(). -->
      <div class="pswp__bg"></div>
      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">
        <!-- Container that holds slides. 
                        PhotoSwipe keeps only 3 of them in the DOM to save memory.
                        Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  Controls are self-explanatory. Order can be changed. -->
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
            <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous">
          </button>
          <button class="pswp__button pswp__button--arrow--right" title="Next">
          </button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
    <Button @click="openPhotoSwipe" type="primary">photoswipe</Button>
  </div>
</template>

<script>
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import UI from 'photoswipe/dist/photoswipe-ui-default'
export default {
  name: 'qiniu',
  data() {
    return {
      photoOption: {
        index: 0,
        items: [
          {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            title: 'Image Caption',
            w: 964,
            h: 1024,

          },
          {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            title: 'Image Caption',
            w: 964,
            h: 1024
          }
        ]
      },
    }
  },
  created() {

  },
  mounted() {
    //this.openPhotoSwipe()
  },
  methods: {
    openPhotoSwipe() {
      let pswpElement = document.querySelectorAll('.pswp')[0]
      let options = {
        index: this.photoOption.index,
        history: false,
        focus: true,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
      }
      let gallery = new PhotoSwipe(pswpElement, UI, this.photoOption.items, options)
      gallery.init()
    },
  }
}
</script>

<style lang="less" scoped>

</style>
