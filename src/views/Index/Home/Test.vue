<template>
    <div>
        <mu-container>
            <mu-flex justify-content="center">
                <mu-button @click="openSimpleDialog">Open Dialog</mu-button>
            </mu-flex>
            <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
                this is simple Dialog
                <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
            </mu-dialog>
        </mu-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            test: '',
            openSimple: false
        }
    },
    methods :{
        openSimpleDialog () {
        this.openSimple = true;
        },
        closeSimpleDialog () {
        this.openSimple = false;
        }
    }
}
</script>
<style>
.nprogress-wrap .mu-button{
  margin: 6px 8px;
}
</style>