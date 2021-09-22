<template>
    <div id="icon-MainBox">
        <i :class="icon"></i>
    </div>
</template>
<script>
export default {
    props: {
        icon: String,
    },
}
</script>
<style lang="scss" scoped>
#icon-MainBox {
    i {
        color: rgb(80, 79, 79);
        padding: 10px;
        border-radius: 10px;
        margin: 0px 3px;
        font-size: 18px;
        transition: all 0.25s;
        &:hover {
            background: rgb(245, 245, 245);
        }
    }
}
</style>