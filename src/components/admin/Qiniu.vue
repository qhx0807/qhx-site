<template>
  <div class="qiniu">
    <Spin fix v-if="spinShow"></Spin>
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
    <!-- <Row>
      <Col span="2" v-for="(item, index) in list" :key="index">
        <img src="" alt="">
      </Col>
    </Row> -->
    <waterfall :line-gap="200" :watch="list">
      <waterfall-slot
        v-for="(item, index) in list"
        :width="100"
        :height="100"
        :order="index"
        :key="item.index"
      >
        <img @click="openPhotoSwipe(index)" class="water-img" :src="'http://os70o8m36.bkt.clouddn.com/'+item.key" >
      </waterfall-slot>
    </waterfall>
    <!-- <Button @click="openPhotoSwipe" type="primary">photoswipe</Button> -->
  </div>
</template>

<script>
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import PhotoSwipe from 'photoswipe/dist/photoswipe'
import UI from 'photoswipe/dist/photoswipe-ui-default'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import axios from 'axios'
export default {
  name: 'qiniu',
  data() {
    return {
      spinShow:false,
      photoOption: {
        index: 0,
        items: []
      },
      list:[],
      qiniuData:{
        accessKey:'_iCkoUSbXhnN8AF8T8Mi1qBr-6z47dk-0iQs0C_r',
        secretKey:'c7raaxbjXxadIaSU4PfSuMJMw1ICaoJuEjqXoW4-',
        bucket:'qhx-store-2',
      },
      host:'http://os70o8m36.bkt.clouddn.com/',
    }
  },
  components: {
    Waterfall,
    WaterfallSlot
  },
  created() {
    this.getImgList()
  },
  mounted() {
    //this.openPhotoSwipe()
  },
  methods: {
    openPhotoSwipe(index) {
      let pswpElement = document.querySelectorAll('.pswp')[0]
      let options = {
        index: index,
        history: false,
        focus: true,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
      }
      let gallery = new PhotoSwipe(pswpElement, UI, this.photoOption.items, options)
      gallery.init()
    },
    getImgList() {
      axios.post(API_URL + '/imageList', this.qiniuData).then(function(response) {
        console.log(response)
        this.list = response.data.Data.items
        response.data.Data.items.forEach(function(item){
          this.photoOption.items.push({
            src:'http://os70o8m36.bkt.clouddn.com/'+item.key,
            title:item.key+' '+item.fsize+' '+item.putTime,
            w: 964,
            h: 1024,
          })
        }.bind(this))
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
  }
}
</script>

<style lang="less" scoped>
.qiniu{
  padding: 6px;
  position: relative;
  .water-img{
    height: 190px;
    width: 190px;
  }
}
</style>
