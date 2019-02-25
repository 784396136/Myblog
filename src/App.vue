<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<style>
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
  padding: 0;
}
</style>