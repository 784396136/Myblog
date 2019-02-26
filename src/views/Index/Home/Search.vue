<template>
    <div>
        <div class="result">
            <h1> 搜索结果： {{search_info}}</h1>
        </div>
        <log-list :data="15"></log-list>
        <page-list></page-list>
    </div>
</template>
<style scoped>
    .result {
        text-align: left;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
        transition: all .6s ease;
        overflow: hidden;
        margin-bottom: 15px;
    }
    .result h1 {
        margin: 20px;
        font-weight: 400;
        font-size: 18px;
    }
</style>
<script>
import logList from "../../../components/LogList.vue"
import pageList from "../../../components/PageList.vue"
export default {
    components:{
        logList,pageList
    },
    data() {
        return {
            search_info: '',
        }
    },
    created() {
        var info = this.$store.state.search_info || localStorage.getItem("search_value")
        if(!info)
            this.$router.go(-1)
        else
        {
            this.$store.state.search_info = info
            this.search_info = info
            localStorage.setItem("search_value",info)
        }
    },
    computed: {
        search_value() {
            return this.$store.state.search_info;
        }
    },
    watch: {
        search_value(newVal,oldVal){
            this.search_info = newVal
        }
    }
}
</script>