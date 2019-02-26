<template>
    <div>
        <header>
            <mu-container style="height:100%;">
                <ul id="nav">
                    <li>
                        <mu-button flat color="#f3e5f5" class="home to" to="/" style="height:100%;">
                            <mu-icon size="24" value="home" style="margin-right:5px;"></mu-icon>
                            主页
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat color="#f3e5f5" style="height:100%;">
                            <mu-icon value="person" style="margin-right:5px;"></mu-icon>
                            关于
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat color="#f3e5f5" style="height:100%;">
                            <mu-icon size="24" value="local_offer" style="margin-right:5px;"></mu-icon>
                            标签
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat color="#f3e5f5" style="height:100%;">
                            <mu-icon value="apps" style="margin-right:5px;"></mu-icon>
                            分类
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat color="#f3e5f5" style="height:100%;">
                            <mu-icon value="event_note" style="margin-right:5px;"></mu-icon>
                            时间轴
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat color="#f3e5f5" style="height:100%;">
                            <mu-icon value="group" style="margin-right:5px;"></mu-icon>
                            友链
                        </mu-button>
                    </li>
                </ul>             
            </mu-container>
        </header>
        <div id="nav_btn" @click="open=!open" v-if="!open">
            <div></div>
        </div>
        <mu-drawer class="nav_drawer" :open.sync="open" :docked="false" right="right">
                <mu-button flat style="position: absolute;right: 0;top:0;" @click="open=!open">
                    <mu-icon value="close"></mu-icon>
                </mu-button>
                <ul>
                    <li>
                        <mu-button flat to="/" class="nav_btn home to_sm">
                            <mu-icon value="home" left style="float:left;"></mu-icon>
                            主页
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat class="nav_btn">
                            <mu-icon value="person" left style="float:left;"></mu-icon>
                            关于
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat class="nav_btn">
                            <mu-icon value="local_offer" left style="float:left;"></mu-icon>
                            标签
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat class="nav_btn">
                            <mu-icon value="apps" left style="float:left;"></mu-icon>
                            分类
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat class="nav_btn">
                            <mu-icon value="event_note" left style="float:left;"></mu-icon>
                            时间轴
                        </mu-button>
                    </li>
                    <li>
                        <mu-button flat class="nav_btn">
                            <mu-icon value="group" left style="float:left;"></mu-icon>
                            友链
                        </mu-button>
                    </li>
                </ul>
        </mu-drawer>
        <div class="cover"></div>
    </div>
</template>
<style scoped>
    @media screen and (max-width: 990px){
        header {
            display: none;
        }
        #nav_btn {
            display: block !important;
        }
        .cover {
            background-image: url("../assets/images/cover5.jpg") !important;
            background-size: 100%;
            background-position: center  -70px !important;
            background-repeat: no-repeat;
        }
    };
    #nav {
        padding: 0px;
    }
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: rgb(175, 130, 235,0.8);
        z-index: 999;
    }

    /* 导航弹出层 */
    .nav_drawer {
        background-color: rgb(175, 130, 235,0.8);
    }
    .nav_drawer ul{
        margin-top: 40px;
        padding: 0;
    }
    .nav_drawer ul li{
        text-align: left;
        height: 50px;
    }
    .nav_drawer ul li .nav_btn {
        width: 100%;
        height: 100%;
    }

    header ul {
        margin: 0;
        height: 100%;
        overflow: hidden;
    }
    /* 小屏显示的按钮 */
    #nav_btn {
        display: none;
        position: absolute;
        right: 30px;
        top: 15px;
        width: 28px;
        height: 38px;
        cursor: pointer;
        z-index: 999;
    }
    #nav_btn div {
        width: 100%;
        height: 2.5px;
        background-color: #af82eb;
    }
    #nav_btn div::before {
        content: '';
        width: 100%;
        height: 2.5px;
        margin-top: 7px;
        background: #af82eb;
        position: absolute;
        left: 0;
        -webkit-transition: .2s;
        transition: .2s;
    }
    #nav_btn div::after {
        content: '';
        width: 100%;
        height: 2.5px;
        margin-top: 14px;
        background: #af82eb;
        position: absolute;
        left: 0;
        -webkit-transition: .2s;
        transition: .2s;
    }

    header ul li {
        float: left;
        height: 100%;
    }
    .cover {
        width: 100%;
        height: 320px;
        background-image: url("../assets/images/cover1.png");
        background-size: center;
        background-position: center  -100px;
        background-repeat: no-repeat;
    }
</style>
<script>
export default {
    data() {
        return {
            open: false,  // 导航弹出层是否打开
        }
    },
}
</script>