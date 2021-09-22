<template>
    <div>
        <img :src="img" alt="">
        <span v-if="online"></span>    
    </div>
</template>
<script>
export default {
    props: {
        img:String,
        online:Boolean
    },
}
</script>
<style scoped>

img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #ffffff;
    cursor: pointer;
}
span {
    border: 2px solid white;
    position: absolute;
    width: 12px;
    margin-top: 37px;
    height: 12px;
    background: #50a350;
    border-radius: 50%;
    margin-left: -12px;
}

</style>