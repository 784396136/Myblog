<template>
    <div>
        <div>
            <img src="../assets/images/2017042412201184.png">
            <div class="footer">
                <a href="javascript:;" style="color:#fff;">{{hitokoto}}<span class="my-face">(●'◡'●)ﾉ♥</span></a>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            hitokoto: '',
        }
    },
    created() {
        // 备用端口     https://v1.hitokoto.cn/?encode=json
        this.axios.get("https://v1.hitokoto.cn/?encode=json").then((res)=>{
            this.hitokoto = res.data.hitokoto
        }).catch((res)=>{
            this.axios.get("https://api.fczbl.vip/hitokoto/?encode=json").then((res)=>{
                this.hitokoto = res.data.hitokoto
            })
        })
    }
}
</script>
<style scoped>
    img {
        margin: 0 auto -80px;
    }
    .footer {
        color: aliceblue;
        padding: 40px 0 30px;
        background-color: rgba(35,40,45,1);
    }
    .footer a {
        padding-bottom: 5px;
        border-bottom:1px solid #af82eb;
    }
    .my-face {
        color: #af82eb;
        animation: my-face 5s infinite ease-in-out;
        display: inline-block;
        margin: 0 5px; 
    }

    @keyframes my-face {
    2% {
        transform: translateY(1.5px) rotate(1.5deg);
    }
    4% {
        transform: translateY(-1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translateY(1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translateY(-1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translateY(2.5px) rotate(1.5deg);
    }
    12% {
        transform: translateY(-0.5px) rotate(1.5deg); 
    }
    14% {
        transform: translateY(-1.5px) rotate(1.5deg);
    }
    16% {
        transform: translateY(-0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translateY(0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translateY(-1.5px) rotate(2.5deg);
    }
    22% {
        transform: translateY(0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translateY(1.5px) rotate(1.5deg);
    }
    26% {
        transform: translateY(0.5px) rotate(0.5deg);
    }
    28% {
        transform: translateY(0.5px) rotate(1.5deg);
    }
    30% {
        transform: translateY(-0.5px) rotate(2.5deg);
    }
    32% {
        transform: translateY(1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translateY(1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translateY(-1.5px) rotate(2.5deg);
    }
    38% {
        transform: translateY(1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translateY(-0.5px) rotate(2.5deg);
    }
    42% {
        transform: translateY(2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translateY(1.5px) rotate(0.5deg);
    }
    46% {
        transform: translateY(-1.5px) rotate(2.5deg);
    }
    48% {
        transform: translateY(-0.5px) rotate(0.5deg);
    }
    50% {
        transform: translateY(0.5px) rotate(0.5deg);
    }
    52% {
        transform: translateY(2.5px) rotate(2.5deg);
    }
    54% {
        transform: translateY(-1.5px) rotate(1.5deg);
    }
    56% {
        transform: translateY(2.5px) rotate(2.5deg);
    }
    58% {
        transform: translateY(0.5px) rotate(2.5deg);
    }
    60% {
        transform: translateY(2.5px) rotate(2.5deg);
    }
    62% {
        transform: translateY(-0.5px) rotate(2.5deg);
    }
    64% {
        transform: translateY(-0.5px) rotate(1.5deg);
    }
    66% {
        transform: translateY(1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translateY(-1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translateY(1.5px) rotate(0.5deg);
    }
    72% {
        transform: translateY(2.5px) rotate(1.5deg);
    }
    74% {
        transform: translateY(-0.5px) rotate(0.5deg);
    }
    76% {
        transform: translateY(-0.5px) rotate(2.5deg);
    }
    78% {
        transform: translateY(-0.5px) rotate(1.5deg);
    }
    80% {
        transform: translateY(1.5px) rotate(1.5deg);
    }
    82% {
        transform: translateY(-0.5px) rotate(0.5deg);
    }
    84% {
        transform: translateY(1.5px) rotate(2.5deg);
    }
    86% {
        transform: translateY(-1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translateY(-0.5px) rotate(2.5deg);
    }
    90% {
        transform: translateY(2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translateY(0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translateY(2.5px) rotate(0.5deg);
    }
    96% {
        transform: translateY(-0.5px) rotate(1.5deg);
    }
    98% {
        transform: translateY(-1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0) rotate(0);
    }
}
</style>