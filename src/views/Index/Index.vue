<template>
  <div id="index">
    <top/>
    <mu-container style="margin-top:20px;padding:0;">
      <router-view/>
      <!-- 右侧盒子 -->
      <right></right>
    </mu-container>
    <!-- 右下角按钮 -->
      <div class="backTop right_f">
        <mu-icon value="arrow_upward" color="#fff" style="float:left;margin:8px;"></mu-icon>
      </div>
      <div class="searchbox right_f">
          <mu-icon value="search" color="#fff" style="margin:8px;float:left;"></mu-icon>
          <input type="text" placeholder="Search...">
      </div>
  </div>
</template>
<script>
import Right from "../../components/Right.vue"
import Top from '../../components/Header.vue'
export default {
  components: {
    Top,Right
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
    $('html').click(function(){
      console.log('123')
    })
    // 点击返回顶部
    $(".backTop").click(function(){
      var t =document.documentElement.scrollTop||document.body.scrollTop;
      $("html,body").animate({scrollTop:'0px'},650)
    })
  },
  methods: {
    test(){
      // 点击后滚动条到正文
      $("html,body").animate({scrollTop:'270px'},650)
    }
  },
}
</script>
<style>
@import "https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css";
.test {
  width: 100%;
  height: 100px;
  background-color: #ff0;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/ 
::-webkit-scrollbar 
{ 
    width: 10px; 
    background-color: #F5F5F5; 
} 
   
/*定义滚动条轨道 内阴影+圆角*/ 
::-webkit-scrollbar-track 
{ 
    -webkit-box-shadow: inset 0 0 6px #ddd; 
    border-radius: 10px; 
    background-color: #F5F5F5; 
} 
   
/*定义滑块 内阴影+圆角*/ 
::-webkit-scrollbar-thumb 
{ 
    -webkit-box-shadow: inset 0 0 6px #ddd; 
    background-color: #bbb; 
}

body {
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
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