<template>
    <div id="createTodo">
        <div class="createTodo-content">
            <p>This list will show all tasks that you assigned to friends and they have already completed</p>
        </div>
    <div class="createTodo-task">
        <span>The task list is empty</span>
        <div class="createTodo-assign" @click="modelTodo=true">
            <i class="fas fa-tasks"></i>
            <b>Assign task</b>
        </div>

    </div>
    <ModelTodo v-show="modelTodo" @closeHandleTodo="modelTodo=false"/>
    </div>
</template>
<script>
import ModelTodo from "./ModelTodo.vue"
export default {
    components: {
        ModelTodo
    },
    data() {
        return {
            modelTodo:false
        }
    }
}
</script>
<style lang="scss" scoped>
#createTodo {
    width: 100%;
    .createTodo-content {
        width: 80%;
        margin: auto;
        font-size: 14px;
        border: 1px solid #e1e4ea;
        padding: 20px 15px;
        background: #fbfbfd;
        border-radius: 6px;
        margin-top: 40px;
        p{
           font-size: 14px;
           color: #001a33;
        }
    }
    .createTodo-task {
        text-align: center;
        margin-top: 60px;
        span{
            color: #72808e;
            font-size: 12px;
        }
        .createTodo-assign{
            position: relative;
            color: #0068ff;
            padding: 10px;
            font-size: 15px;
            margin-top: 10px;
            cursor: pointer;
            b{
                font-weight: 500;
            }
            i{
                margin-right: 7px;
                color: #0068ff;
            }
        }
    }
}
</style>