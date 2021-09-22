<template>
    <div class="info-classify-full">
    <div class="info-classify">
        <div class="info-classify-title">
            <h3>Quản lý thẻ phân loại</h3>
            <i class="fas fa-times" @click="$emit('closeModal')"></i>
        </div>
        <p>Danh sách thẻ phân loại</p>
        <ModalListItem 
            @editLabelItem="editLabel = true"/>
        <button class="moreClassify" @click="addLabel = true">
            <i class="fas fa-plus"></i> Thêm phân loại
        </button>
            <div class="AddLabel" v-show="addLabel">
                <ModalAddLabel 
                    @prevLabel="addLabel= false" 
                    @closeModal="$emit('closeModal')"
                    :editHeader="'Thêm mới thẻ phân loại'"
                    :editButtonName="'Thêm phân loại'"
                />
            </div>

            <div v-show="editLabel">
                  <ModalAddLabel 
                    @prevLabel="editLabel= false"
                    @closeModal="$emit('closeModal')"
                    :editHeader="'Chi tiết phân loại'"
                    :editButtonName="'Cập nhật'"
                />
            </div>
        </div>
    </div>
</template>
<script>
import ModalListItem from "./ModalListItem.vue";
import ModalAddLabel from "./ModalAddLabel.vue"
export default {
  components: {
    ModalListItem,
    ModalAddLabel
  },
  emits: ['closeModal'],
  data() {
      return {
          addLabel:false,
          editLabel:false    
      }
  }
};
</script>
<style lang="scss" scoped>
.info-classify-full {
         position: absolute;
        background: #7f7f7f3d;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
         .info-classify{ 
            background: #ffffff; 
            margin: auto;
            width: 500px;
            border: 1px solid #ddd;
            padding: 27px;
            border-radius: 10px;
            box-shadow: 1px 1px 2px #e8e8e8;
            position: absolute;
            top: 0;
            height: 300px;
            bottom: 0;
            left: 0;
            overflow-y: visible;
            right: 0;
            @media (max-width:800px) {
                width: 90%;
            }
            .info-classify-title {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                padding-bottom: 10px;
                h3{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 17px;
                    font-weight: 600;
                    color: #72808e;
                }
                i{
                    width: 28px;
                    height: 28px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    color: #72808e;
                    border: 1px solid transparent;
                    border-radius: 50%;
                    font-size: 20px;
                    margin-top: -2px;
                    transition: all 0.25s;
                    cursor: pointer;
                    &:hover {
                        background: rgb(233, 233, 233);
                    }
                }
            }
             p{
                    font-size: 13px;
                    color: #001a33;
                    margin-top: 10px;
                }
        }

        .moreClassify {
            margin-top: 10px;
            border: transparent;
            color: #217bfd;
            background: transparent;
            height: 50px;
            margin-left: 40px;
            font-weight: 600;
            text-align: left;
            font-size: 14px;
            letter-spacing: normal;
            line-height: 30px;
            i{
                color: #217bfd;
                font-size: 13px;
            }
            &:hover {
                background: #e5efff;
            }
        }
    }
</style>