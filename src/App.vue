<template>
  <div id="app">
    <canvas id="canvas"></canvas>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      hearts: []
    }
  },
  created() {
    this.attachEvent()
    this.loop()
  },
  mounted() {
    this.bgCanvas()
  },
  methods: {
    randomColor() {
      return (
        'rgb(' +
        ~~(Math.random() * 255) +
        ',' +
        ~~(Math.random() * 255) +
        ',' +
        ~~(Math.random() * 255) +
        ')'
      )
    },
    attachEvent() {
      let t = this
      var old = typeof window.onclick === 'function' && window.onclick
      window.onclick = function(event) {
        old && old()
        t.createHeart(event)
      }
    },
    createHeart(event) {
      var d = document.createElement('div')
      d.className = 'heart'
      this.hearts.push({
        el: d,
        x: event.clientX - 5,
        y: event.clientY - 5,
        scale: 1,
        alpha: 1,
        color: this.randomColor()
      })
      document.body.appendChild(d)
    },
    loop() {
      for (let i = 0; i < this.hearts.length; i++) {
        if (this.hearts[i].alpha <= 0) {
          document.body.removeChild(this.hearts[i].el)
          this.hearts.splice(i, 1)
          continue
        }
        this.hearts[i].y--
        this.hearts[i].scale += 0.01
        this.hearts[i].alpha -= 0.013
        this.hearts[i].el.style.cssText =
          'left:' +
          this.hearts[i].x +
          'px;top:' +
          this.hearts[i].y +
          'px;opacity:' +
          this.hearts[i].alpha +
          ';transform:scale(' +
          this.hearts[i].scale +
          ',' +
          this.hearts[i].scale +
          ') rotate(45deg);background:' +
          this.hearts[i].color
      }
      let reqAniFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          setTimeout(callback, 1000 / 60)
        }

      reqAniFrame(this.loop)
    },
    bgCanvas() {
      class Circle {
        //创建对象
        //以一个圆为对象
        //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
        //this.r是创建圆的半径，参数越大半径越大
        //this._mx,this._my是移动的距离，参数越大移动
        constructor(x, y) {
          this.x = x
          this.y = y
          this.r = Math.random() * 11
          this._mx = Math.random()
          this._my = Math.random()
        }
        //canvas 画圆和画直线
        //画圆就是正常的用canvas画一个圆
        //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
        drawCircle(ctx) {
          ctx.beginPath()
          //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
          ctx.arc(this.x, this.y, this.r, 0, 360)
          ctx.closePath()
          ctx.fillStyle = 'rgba(204, 204, 204, 0.3)'
          ctx.fill()
        }

        drawLine(ctx, _circle) {
          let dx = this.x - _circle.x
          let dy = this.y - _circle.y
          let d = Math.sqrt(dx * dx + dy * dy)
          if (d < 210) {
            ctx.beginPath()
            //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
            ctx.moveTo(this.x, this.y) //起始点
            ctx.lineTo(_circle.x, _circle.y) //终点
            ctx.closePath()
            ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)'
            ctx.stroke()
          }
        }

        // 圆圈移动
        // 圆圈移动的距离必须在屏幕范围内
        move(w, h) {
          this._mx = this.x < w && this.x > 0 ? this._mx : -this._mx
          this._my = this.y < h && this.y > 0 ? this._my : -this._my
          this.x += this._mx / 2
          this.y += this._my / 2
        }
      }
      //鼠标点画圆闪烁变动
      class currentCirle extends Circle {
        constructor(x, y) {
          super(x, y)
        }
        drawCircle(ctx) {
          ctx.beginPath()
          //注释内容为鼠标焦点的地方圆圈半径变化
          //this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
          this.r = 8
          ctx.arc(this.x, this.y, this.r, 0, 360)
          ctx.closePath()
          //ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
          ctx.fillStyle = 'rgba(204, 204, 204, 0.3)'
          ctx.fill()
        }
      }
      //更新页面用requestAnimationFrame替代setTimeout
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      let canvas = document.getElementById('canvas')
      let ctx = canvas.getContext('2d')
      let w = (canvas.width = canvas.offsetWidth)
      let h = (canvas.height = canvas.offsetHeight)
      let circles = []
      let current_circle = new currentCirle(0, 0)
      let draw = function() {
        ctx.clearRect(0, 0, w, h)
        for (let i = 0; i < circles.length; i++) {
          circles[i].move(w, h)
          circles[i].drawCircle(ctx)
          for (let j = i + 1; j < circles.length; j++) {
            circles[i].drawLine(ctx, circles[j])
          }
        }
        if (current_circle.x) {
          current_circle.drawCircle(ctx)
          for (var k = 1; k < circles.length; k++) {
            current_circle.drawLine(ctx, circles[k])
          }
        }
        requestAnimationFrame(draw)
      }
      let init = function(num) {
        for (var i = 0; i < num; i++) {
          circles.push(new Circle(Math.random() * w, Math.random() * h))
        }
        draw()
      }
      window.addEventListener('load', init(70))
      window.onmousemove = function(e) {
        e = e || window.event
        current_circle.x = e.clientX
        current_circle.y = e.clientY
      }
      window.onmouseout = function() {
        current_circle.x = null
        current_circle.y = null
      }
    }
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  /* background-color: #f8f8f8; */
}
#canvas{
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #f8f8f8;
}
.heart {
  width: 10px;
  height: 10px;
  position: fixed;
  background: deepskyblue;
  transform: rotate(45deg);
}
.heart:after,
.heart:before {
  content: '';
  width: inherit;
  height: inherit;
  background: inherit;
  border-radius: 50%;
  position: absolute;
}
.heart:after {
  top: -5px;
}
.heart:before {
  left: -5px;
}
</style>
