<template>
    <div>
        <!-- 左侧内容 -->
        <div class="left">
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
@media screen and (max-width: 990px){
  
  .left {
    width: 100% !important;
  }
  
}

 /* 左侧盒子 */
.left {
  float: left;
  width: 67%;
  padding-bottom: 15px;
  overflow: hidden;
}
</style>