<template>
    <div class="MainBox-chat">
        <MainBoxHeader/>
        <MainBox/>
        <MainBoxFooter/>
        
    </div>
</template>
<script>
import MainBoxHeader from './MainBoxHeader.vue'
import MainBox from './MainBox.vue'
import MainBoxFooter from './MainBoxFooter.vue'
export default {
    components: {
        MainBoxHeader,
        MainBox,
        MainBoxFooter
    },
}
</script>
<style>
.MainBox-chat {
    position: relative;
}
</style>