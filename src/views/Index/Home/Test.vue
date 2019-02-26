<template>
    <div>
        <h1>测试页面</h1>
        <mu-container class="nprogress-wrap">
            <mu-button color="primary" @click="$progress.start();">start</mu-button>
            <mu-button color="secondary" @click="$progress.done();">Done</mu-button>
        </mu-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: '',
        }
    }
}
</script>
<style>
.nprogress-wrap .mu-button{
  margin: 6px 8px;
}
</style>