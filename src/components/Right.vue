<template>
    <div>
        <!-- 右侧盒子 -->
        <div id="right">
            <div class="userInfo">
                <div class="top">
                    <h3 style="margin:0;">还未登录哦~</h3>
                    <div class="face" :style="'left:36%;top:'+(top_h-45)+'px;'">
                        <img style="width:100%;height:100%;" src="../assets/images/default_face.jpg" alt="">
                    </div>
                </div>
                <div class="bottom">
                    <div style="margin-top:45px;">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            right_w:'',
            top_h:'',
        }
    },
    mounted() {
        this.right_w = document.querySelector("#right").scrollWidth
        this.top_h = document.querySelector("#right .top").scrollHeight
    },
}
</script>
<style scoped>
@media screen and (max-width: 990px){
  #right {
    display: none;
  }
}
/* 右侧盒子 */
#right {
    float: right;
    width: 30%;
}
#right .userInfo {
    width: 100%;
    height: 200px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
}
#right .userInfo .top {
    padding-top: 20px;
    position: relative;
    height: 60%;
    background-image: url("../assets/images/bg.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
#right .userInfo .top .face {
    box-sizing: border-box;
    border:rgba(255,255,255,.4) 4px solid;
    overflow: hidden;
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
}
#right .userInfo .bottom {
    overflow: hidden;
    height: 40%;
    background-color: #fff;
}
#right .userInfo .bottom span {
    color: #f0f;
}
</style>