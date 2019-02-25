<template>
  <div id="index">
    <!-- 顶部导航 -->
    <top/>
    <mu-container style="margin-top:20px;padding:0;">
      <div class="hezi" style="height:auto;">
        <router-view/>
        <!-- 右侧盒子 -->
        <right></right>
      </div>
    </mu-container>
    <!-- 右下角按钮 -->
      <div class="backTop right_f">
        <mu-icon value="arrow_upward" color="#fff" style="float:left;margin:8px;"></mu-icon>
      </div>
      <div class="searchbox right_f">
          <mu-icon value="search" color="#fff" style="margin:8px;float:left;"></mu-icon>
          <input type="text" placeholder="Search...">
      </div>
    <!-- 页脚 -->
    <foot/>
  </div>
</template>
<script>
import Right from "../../components/Right.vue"
import Top from '../../components/Header.vue'
import Foot from '../../components/Footer.vue'
export default {
  components: {
    Top,Right,Foot
  },
  mounted() {
    
  },
  created() {

    // 返回页面顶端按钮的显示与隐藏
    window.addEventListener("scroll",function(){
      var t =document.documentElement.scrollTop||document.body.scrollTop;
      if(t>=200)
        $(".backTop").css('display','block')
      else
        $(".backTop").css('display','none')

        var right = document.querySelector("#right")
        // 右侧盒子
        if(t>=290){
          // 获取大盒子的高
          var hezi = document.querySelector(".hezi")
          var h = hezi.clientHeight
          // 计算最大top值
          var right_h = right.clientHeight
          var max_top = h-right_h
          var top_value = (t-290)+20
          if(max_top>top_value)
          {
            document.querySelector("#right").style.top = top_value+'px'
          }
          else
          {
            document.querySelector("#right").style.top = max_top+'px'
          }
        }
        else
          document.querySelector("#right").style.top = '0px'
    })
    
  },
  mounted() {
    // 展开搜索框
    $('.searchbox').click(function(){
      $(this).css('width','200')
    })
    $('.searchbox input').blur(function(){
      $('.searchbox').css('width','40')
    })
    // 点击返回顶部
    $(".backTop").click(function(){
      var t =document.documentElement.scrollTop||document.body.scrollTop;
      $("html,body").animate({scrollTop:'0px'},650)
    })
  },
  methods: {},
}
</script>
<style scoped>
@import "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
.hezi {
  overflow: hidden;
  margin-bottom: 20px;
}

#index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style scoped>
@media screen and (max-width: 990px){
  .right {
    display: none;
  }
  .left {
    width: 100% !important;
  }
}
  .right_f {
    z-index: 99999;
    cursor: pointer;
    position: fixed;
    width: 40px;
    height: 40px;
    background-color: #848484;
    right:30px;
  }
  .searchbox {
    overflow: hidden;
    bottom:20px;
    transition: width 0.5s;
  }
  .searchbox input {
    float: left;
    width: 160px;
    height: 100%;
    color:#fff;
    outline:none;
    border:none;
    background-color: #848484;
  }
  .searchbox input::-webkit-input-placeholder {
    color:#fff;
    font-weight:500;
    font-size:16px;
  }
  .backTop {
    display: none;
    transition: opacity 0.5s;
    bottom:70px;
  }
 
</style>