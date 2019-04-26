<template>
    <div>
        <div class="box">
            <header>
                <h1 style="font-size:30px;margin-bottom:15px;">这是标题</h1>
                <!-- 发布时间 -->
                <span class="info">
                    <mu-icon  value="date_range" size="15" style="vertical-align: sub;"></mu-icon>&nbsp;2019-1-16
                </span>
                <!-- 评论数 -->
                <span class="info">
                    <mu-icon value="message" size="15" style="vertical-align: sub;"></mu-icon>&nbsp; 0条评论
                </span>
                <!-- 浏览量 -->
                <span class="info">
                    <mu-icon value="visibility" size="15" style="vertical-align: sub;"></mu-icon>&nbsp; 0次浏览量
                </span>
                <!-- 点赞数 -->
                <span class="info">
                    <mu-icon value="thumb_up_alt" size="15" style="vertical-align: sub;"></mu-icon>&nbsp; 0人点赞
                </span>
                <!-- 发布用户 -->
                <span class="info">
                    <mu-icon value="perm_identity" size="15" style="vertical-align: sub;"></mu-icon>&nbsp;蕾姆の永远
                </span>
            </header>
            <div class="content">
                <s>测试</s>稍微不同的是呢，我这不是固定在左下角的，和以前用的spig一样，可以瞎**飘( :huaji15: 半身模型飘起来是不是很刺激？)。
                <h2>一、Windows 系列</h2>
                对于 Windows 10 ，目前有数字权利工具 (通过模拟升级获取 Ticket 进行激活) 直接获取数字权利，可以考虑不使用 KMS 。

                下面列出了所有可以通过 KMS 激活的版本及其 KMS 密钥，请选择对应的版本。
                <img src="../../../assets/images/0e53ab0defad4dc2bae9ecf4b0131710.jpeg">
                首先需要明确的是， Visio 和 Project 是独立于 Office 的不同软件 (Mondo 测试许可除外)，需要单独激活，并且它们比 Office 贵得多！以及 Office 中的每一个套件也都是有独立许可版本的，但是太麻烦了建议还是直接使用 Office 比较好。
            </div>
            <div style="margin:0 10px 10px;">
                <div class="notes">
                    本文章仅为个人理解
                </div>
                <div class="btns">
                    <a href="#" class="donate" @click.prevent="openReward"><mu-icon value="local_atm" style="margin-top:7px;vertical-align: bottom;"></mu-icon> 打赏</a>
                    <a href="javascript:;" class="love"><mu-icon value="thumb_up" style="margin-top:7px;vertical-align: bottom;"></mu-icon> 点赞</a>
                </div>
                <mu-dialog width="360" :open.sync="reward" class="reward">
                    <div class="title">
                        打赏作者
                        <i class="fa fa-close" style="float:right;margin-top:12px;cursor:pointer;" @click="closeReward"></i>
                    </div> 
                    <h3 style="margin:12px 0;color:#333;font-size:16px;font-weight:600;text-align:center;">扫码支付</h3>
                    <!-- 二维码 -->
                    <img v-show="pay_type==true" style="display:block;width:200px;height:200px;margin:0 auto;" src="../../../assets/images/alipay.png">
                    <img v-show="pay_type==false" style="display:block;width:200px;height:200px;margin:0 auto;" src="../../../assets/images/wxpay.png">
                    <div class="reward_btn">
                        <div :class="{active:pay_type==true}" @click="pay_type=true"><img style="height:26px;" src="../../../assets/images/alipay_btn.png"></div> 
                        <div :class="{active:pay_type==false}" @click="pay_type=false"><img style="height:26px;" src="../../../assets/images/wechat_btn.png"></div> 
                    </div>
                </mu-dialog>
                <!-- 文章标签 -->
                <div class="last">
                    <i class="fa fa-tags fa-lg"></i>
                    <router-link to="/" class="to">日常</router-link>
                    <router-link to="/" class="to">娱乐</router-link>
                    <!-- 文章修改日志 -->
                    <span>最后编辑: 2019年2月25日</span>
                </div>
            </div>
        </div>
        <!-- 上一页 下一页 -->
        <div class="page">
            <router-link to="/content" class="to prev" title="上一页的标题" v-html="'< 上一页'"></router-link>
            <router-link to="/content" class="to next" title="下一页的标题" v-html="'下一页 >'"></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 控制打赏窗口是否打开
            reward: false,
            // 支付方式 true是支付宝 false是微信
            pay_type: true,
        }
    },
    created() {
        // 关闭进度条
        this.$progress.done()
    },
    mounted() {
        // 点击后滚动条到正文
        $('.to').click(function(){
            $("html,body").animate({scrollTop:'270px'},650)
        })
    },
    methods: {
        // 打开窗口
        openReward() {
            this.reward = true
        },
        // 关闭窗口
        closeReward() {
            this.reward = false
        }
    }
}
</script>
<style scoped>
    .reward .title {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        padding: 0 25px;
        background-color: #f8f8f8;
    }
    .reward .reward_btn div{
        cursor: pointer;
        text-align: center;
        width: 45%;
        height: 45px;
        border: 1px solid #e6e6e6;
        display: inline-block;
    }
    .reward .reward_btn .active {
        border: 1px solid #0092ee;
    }
    .reward .reward_btn div:last-child {
        float:right;
    }
    .reward .reward_btn {

        width: 80%;
        margin: 20px auto;
    }
    .reward .reward_btn div img {
        margin-top: 8.5px;
    }
    @media screen and (max-width: 530px){
        .box header .info:nth-child(6){
            display: none;
        }
        .box header .info:nth-child(5){
            display: none;
        }
    }
    h1 {
        font-weight: 400;
        color: #333;
        padding: 0;
        margin: 0;
    }
    .box {
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
        padding: 25px 10px 18px;
        overflow: hidden;
    }
    .box header {
        text-align: center;
        margin-bottom: 15px;
    }
    .box header .info {
        color: #777;
        margin-right: 12px;
        cursor:default;
    }

    .box .content {
        margin: 10px;
        line-height: 1.8;
        font-size: 16px;
        color: #666;
    }
    .box .notes {
        margin-top: 25px;
        text-align: center;
        background-color: #dcdcdc;
        color: #666;
        font-size: 13px;
        padding: 10px
    }
    .box .content h2 {
        font-weight: 400;
        color: #333;
        margin: 15px -20px;
        padding: 0 20px;
        border-left: 5px solid #51aded;
        background-color: rgba(243,243,243,.7);
        font-size: 20px;
        line-height: 40px;
    }
    .box .content img {
        height: auto;
        max-width: 100%; 
        display: block;
        margin: 0 auto;
    }
    .box .btns {
        text-align: center;
        margin-top: 20px;
        width: 100%;
        height: 40px;
    }
    .box .btns a {
        box-sizing: border-box;
        display: inline-block;
        width: 130px;
        height: 40px;
        margin: 0 5px;
        transition: all .5s;
    }
    .box .btns .donate {
        border: 1px solid #3496e6;
        color: #3496e6;
    }
    .box .btns .donate:hover {
        background-color: #3496e6;
        color: #fff;
    }
    .box .btns .love {
        border: 1px solid #e87461;
        color: #e87461;
    }
    .box .btns .love:hover {
        background-color: #e87461;
        color: #fff;
    }
    .box .last {
        margin-top: 20px;
        color: #9d9d9d;
    }
    .box .last a {
        font-size: 12px;
        display: inline-block;
        padding: 2px 7px 0;
        background-color: #9d9d9d;
        color: #fff;
        margin-left: 10px;
        transition: all .5s;
    }
    .box .last a:hover {
        background-color: #8d8d8d;
    }
    .box .last span {
        float: right;
    }
    .page {
        margin-top: 15px;
    }
    .page a {
        display: inline-block;
        padding: 7px 18px;
        box-shadow: 0 1px 5px rgba(0,0,0,.1);
        background-color: #fff;
        color: #5a5a5a;
        transition: color .8s;
    }
    .page a:hover {
        color: #51aded;
    }
    .page .prev {
        margin-left: 1px;
        float: left;
    }
    .page .next {
        margin-right: 1px;
        float: right;
    }
</style>