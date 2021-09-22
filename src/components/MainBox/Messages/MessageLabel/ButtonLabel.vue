<template>
    <div class="buttonLabel" >
        <button 
            :class="active && 'activeLabel'"
             @click="$emit('activeButton')"
        > 
            {{button.labelName}}
        </button>
        <i class="fas fa-pencil-alt" v-if="button.labelId != 0"></i>   
    </div>
</template>
<script>
export default {
    emits: ['activeButton'],
    props: {
        button: Object,
        active: Boolean,
    },

    created() {
        
    }
}
</script>
<style scoped>
.buttonLabel {
    position: relative;
}

.activeLabel {
    background: #6a89cc;
    color: white;
}
button {
    background: #e8eaef;
    color: #001a33;
    border: none;
    font-size: 13px;
    border-radius: 40px;
    padding: 3px 8px;
    margin: 3px 5px;
}

.buttonLabel:hover i{
    display: block;
}
.buttonLabel i {
    cursor: pointer;
    display: none;
    position: absolute;
    top: -7px;
    right: -3px;
    color: black;
    font-size: 8px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    border: 1px solid transparent;
    padding: 2px;
    background: #f5f5f5;
    box-shadow: 2px 2px 5px #ddd;
}
</style>