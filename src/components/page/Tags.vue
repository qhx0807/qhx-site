<template>
  <div>
    <Home></Home>
    <div class="content">
      <svg :width='width' :height='height' @mousemove='listener($event)'>
        <a v-for='(tag, index) in tags' :key="index">
            <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
        </a>
      </svg>
    </div>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import Home from './Home'
import FooterPage from './FooterPage'
export default {
  name: 'tags',
  data() {
    return {
      tags: [],
      width: 800, //svg宽度
      height: 600, //svg高度
      tagsNum: 26, //标签数量
      RADIUS: 200, //球的半径
      speedX: Math.PI / 360, //球一帧绕x轴旋转的角度
      speedY: Math.PI / 360 //球-帧绕y轴旋转的角度
    }
  },
  components: {
    Home,
    FooterPage
  },
  computed: {
    CX() {
      //球心x坐标
      return this.width / 2
    },
    CY() {
      //球心y坐标
      return this.height / 2
    }
  },
  created() {
    this.tagInit()
  },
  mounted() {
    //使球开始旋转
    setInterval(() => {
      this.rotateX(this.speedX)
      this.rotateY(this.speedY)
    }, 17)
  },
  methods: {
    listener(event) {
      //响应鼠标移动
      var x = event.clientX - this.CX
      var y = event.clientY - this.CY
      this.speedX =
        x * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, x * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, x * 0.0001)
      this.speedY =
        y * 0.0001 > 0
          ? Math.min(this.RADIUS * 0.00002, y * 0.0001)
          : Math.max(-this.RADIUS * 0.00002, y * 0.0001)
    },
    tagInit() {
      let tags = []
      for (let i = 0; i < this.tagsNum; i++) {
        let tag = {}
        let k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(this.tagsNum * Math.PI) //计算标签相对于球心的角度
        tag.text = i + 'tag'
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b) //根据标签角度求出标签的x,y,z坐标
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
        tag.z = this.RADIUS * Math.cos(a)
        tag.href = 'https://imgss.github.io' //给标签添加链接
        tags.push(tag)
      }
      this.tags = tags
    },
    rotateX(angleX) {
      var cos = Math.cos(angleX)
      var sin = Math.sin(angleX)
      for (let tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
        var z1 = tag.z * cos + (tag.y - this.CY) * sin
        tag.y = y1
        tag.z = z1
      }
    },
    rotateY(angleY) {
      var cos = Math.cos(angleY)
      var sin = Math.sin(angleY)
      for (let tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
        var z1 = tag.z * cos + (tag.x - this.CX) * sin
        tag.x = x1
        tag.z = z1
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
