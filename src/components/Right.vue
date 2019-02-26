<template>
    <div>
        <!-- 右侧盒子 -->
        <div id="right">
            <!-- 用户信息 -->
            <div class="userInfo children">
                <div class="top">
                    <div class="face" :style="'left:36%;top:'+(top_h-45)+'px;'">
                        <img style="width:100%;height:100%;" src="../assets/images/default_face.jpg" alt="">
                    </div>
                </div>
                <div class="bottom">
                    <div style="margin-top:45px;height:35px;line-height:35px;">
                        <a href="javascript:;" style="color:#333;transition:all .3s;">点击登录</a>
                    </div>
                </div>
            </div>

            <!-- 最近评论 -->
            <div class="comment children">
                <div class="top">
                    <span>最近评论</span>
                </div>
                <!-- li 最多五个 -->
                <ul>
                    <li>
                        <!-- 用户头像 -->
                        <img src="../assets/images/default_face.jpg" title="最爱の蕾姆">
                        <!-- 用户昵称 -->
                        <div class="nickName">最爱の蕾姆</div><br/>
                        <!-- 评论内容 -->
                        <div title="蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶" class="content">蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶</div>
                    </li>
                    <li>
                        <img src="../assets/images/cover3.jpg" title="最爱の蕾姆">
                        <div class="nickName">终爱の蕾姆</div><br/>
                        <div title="蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶" class="content">蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶</div>
                    </li>
                    <li>
                        <img src="../assets/images/cover5.jpg" title="最爱の蕾姆">
                        <div class="nickName">一生の蕾姆</div><br/>
                        <div title="蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶" class="content">蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶</div>
                    </li>
                    <li>
                        <img src="../assets/images/cover4.jpg" title="最爱の蕾姆">
                        <div class="nickName">蕾姆赛高</div><br/>
                        <div title="蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶" class="content">蕾姆赛高！！最爱蕾姆٩(๑>◡<๑)۶</div>
                    </li>
                    <li>
                        <img src="../assets/images/cover6.jpg" title="最爱の艾米莉亚">
                        <div class="nickName">最爱の艾米莉亚</div><br/>
                        <div title="没想到吧 我是来挑事的 艾米莉亚赛高罒ω罒" class="content">没想到吧 我是来挑事的 艾米莉亚赛高罒ω罒</div>
                    </li>
                </ul>
            </div>

            <!-- 要个饭(╥╯^╰╥) 要恰饭的啊 -->
            <div class="beg children">
                <img src="../assets/images/qiakoufan.png" width="100%">
            </div>

            <!-- 文章类型 -->
            <div class="type children">
                <mu-tabs :value.sync="active" inverse indicator-color="#51aded" color="#51aded" full-width style="background-color:#fff;border-bottom:2px solid #f2f2f2;">
                    <mu-tab>最新</mu-tab>
                    <mu-tab>最热</mu-tab>
                    <mu-tab>随机</mu-tab>
                </mu-tabs>
                <!-- 最新 -->
                <div class="demo-text" v-if="active === 0">
                    <ul>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>日常cos蕾姆 蕾姆世界第一可爱 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>日常cos蕾姆 蕾姆世界第一可爱 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>日常cos蕾姆 蕾姆世界第一可爱 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>日常cos蕾姆 蕾姆世界第一可爱 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>日常cos蕾姆 蕾姆世界第一可爱 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>日常cos蕾姆 蕾姆世界第一可爱 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- 最热 -->
                <div class="demo-text" v-if="active === 1">
                    <ul>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>最热 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>最热 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>最热 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>最热 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>最热 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>最热 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- 随机 -->
                <div class="demo-text" v-if="active === 2">
                    <ul>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>随机 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>随机 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>随机 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>随机 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>随机 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <mu-icon value="library_books" style="vertical-align:middle;margin-right:5px;"></mu-icon>随机 ٩(๑>◡<๑)۶
                            </router-link>
                        </li>
                    </ul>
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
            active:0,
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
.mu-tab {
    min-width: 33.33% !important;
}
/* 右侧盒子 */
#right {
    position: relative;
    float: right;
    width: 30%;
}
#right .children {
    background-color: #fff;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    overflow: hidden;
}
#right .children:last-child {
    margin-bottom: 0;
}
/* 用户信息S */
#right .userInfo {
    height: 200px;
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
#right .userInfo .bottom a:hover {
    color: #51aded !important;
}
/* 用户信息E */

/* 最近评论S */
.comment {
    padding: 15px;
    padding-bottom: 0;
}
.comment .top {
    padding-bottom: 5px;
    text-align: left;
    border-bottom: 2px solid #e7e7e7;
}
.comment .top span {
    border-bottom: 2px solid #51aded;
    padding-bottom: 8px;
}
.comment ul li {
    overflow: hidden;
    text-align: left;
    padding: 8px 0;
}
.comment ul li img {
    float: left;
    margin-right: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 0.125rem 1.0625rem 0 rgba(0,0,0,.1);
}
.comment ul li .nickName {
    float: left;
    font-size: 13px;
    color: #848484;
}
.comment ul li .content {
    cursor: default;
    color: #4c4c4c;
    margin-top: 5px;
    float: right;
    width: 77%;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
/* 最新评论E */

/* 文章类型S */
.type {
    padding:0 15px;
}
.type ul li {
    width: 100%;
    padding: 5px 10px;
    text-align: left;
    border-bottom: 1px dashed #b4afaf;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.type ul li:last-child {
    border:none;
}
.type ul li a {
    color: #666;
    transition: color .3s;
}
.type ul li a:hover {
    color: #000;
}
</style>