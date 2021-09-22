<template>
    <div class="show-classify">
        <div>
            <button><i class="fas fa-bars"></i></button>
        </div>
        <div class="edit-delete">
            <div>
                <i class="fas fa-tag"></i> Danh sách 1
            </div>
            <div>
                <button @click="$emit('editLabelItem')"><i class="fas fa-pen"></i></button>
            
                <button> <i class="far fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 emits: ['editLabelItem']
}
</script>

<style  lang="scss" scoped>
.show-classify {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        border: none;
        background: transparent;
        i{
            color: #b3bbc2;
        }
    }

    i{
        color: #db342e;
    }
    .edit-delete {
        padding-left: 10px;
        height: 60px;
        background: #f4f5f7;
        width: 90%;
        justify-content: space-between;
        display: flex;
        align-items: center;
        button {
            margin: 0px 10px;
            i{
                color: #2c2c2c;
            }

            &:hover {
                background: #e1e4ea;
                border-radius: 4px;
            }
        }
    }
}

</style>