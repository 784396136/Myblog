<template>
    <div>
        <log-list :data="15"></log-list>
        <page-list></page-list>
    </div>
</template>
<script>
import logList from "../../../components/LogList.vue"
import pageList from "../../../components/PageList.vue"
export default {
    created() {
        this.$progress.done()
    },
    components:{
        logList,pageList
    },
}
</script>