<template>
  <div class="info-classify">
      <div class="info-classify-title">
         <div class="info-classify-title-add" >
            <i class="fas fa-angle-left" @click="$emit('prevLabel')"></i>
            <h3> {{editHeader}} </h3>
         </div>
        <i class="fas fa-times" @click="$emit('closeModal')"></i>
      </div>
      <p>Tên thẻ phân loại</p>
      <div class="addLabelInput">
        <input type="text" placeholder="Nhập tên thẻ phân loại" />
        <i class="fas fa-tag"></i>
      </div>
      <p>Hội thoại được gắn thẻ</p>
      <button class="moreClassify">
        <i class="fas fa-plus"></i> Thêm hội thoại
      </button>

      <div class="delete-add-newLabel">
          <button class="delete-newLabel" @click="$emit('prevLabel')">Hủy</button>
          <button class="add-newLabel">{{editButtonName}}</button>
      </div>
    </div>
</template>
<script>
export default {
  emits: ['prevLabel','closeModal'],
  props: {
    editHeader:String,
    editButtonName:String
  }
};
</script>
<style lang="scss" scoped>
 .info-classify {
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
      .info-classify-title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        .info-classify-title-add {
          display: flex;
          h3{
            font-size: 19px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 600;
            color: #72808e;
            margin-left: 10px;
          }
        }
        i {
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
      .addLabelInput {
        position: relative;
        input{
          width: 100%;
          height: 40px;
          padding-left: 10px;
          outline: none;
          border-radius: 4px;
          border: 1px solid rgb(173, 173, 173);
          &:focus {
            border: 1px solid rgb(108, 108, 255);
          }
        }

        i{
          color: brown;
          position: absolute;
          right: 10px;
          top:10px;
        }
      }
      p {
        font-size: 13px;
        color: #001a33;
        margin-top: 10px;
      }
    }

    .moreClassify {
      border: transparent;
      color: #217bfd;
      background: transparent;
      height: 50px;
      font-weight: 600;
      text-align: left;
      font-size: 14px;
      letter-spacing: normal;
      line-height: 30px;
      i {
        color: #217bfd;
        font-size: 13px;
      }
      &:hover {
        background: #e5efff;
      }
    }

    .delete-add-newLabel {
      button {
        margin: 0px 5px;
      }
      .add-newLabel {
        background: #6a89cc;
        color: white;
         border-radius: 4px;
         height: 40px;
         border: none;
         padding: 0px 9px;
        float: right;

      }

      .delete-newLabel {
        background: rgb(228, 222, 222);
        color: black;
        border-radius: 4px;
        height: 40px;
        border: none;
        padding: 0px 9px;
        float: right;
      }
    }
</style>