<template>
    <div>
        <log-list></log-list>
    </div>
</template>
<script>
import logList from "../../../components/LogList.vue"
export default {
    components:{
        logList
    },
    data() {
        return {
            test: '',
        }
    }
}
</script>