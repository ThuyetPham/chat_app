<template>
  <div id="add-Classify">
    <div
      class="iconDrop"
      :class="addDrop ? 'activeDrop' : ''"
      @click="addDrop = !addDrop"
    >
      <i class="fas fa-caret-down"></i>
      <p>Phân loại</p>
    </div>
    <div class="tag-Classify">
      <ButtonLabel 
        v-for="(button, index) in buttonLabels" 
        :key="index" 
        :button="button" 
        :active="activeLabel == button.labelId"
        @activeButton="activeLabel = button.labelId"
      />
      <button @click="showClassify = true">
        <i class="fas fa-sliders-h"></i>
      </button>
      <ModalList v-show="showClassify" @closeModal="showClassify = false" />
    </div>
  </div>
</template>
<script>
import ModalList from './ModalList.vue'
import ButtonLabel from './ButtonLabel.vue'
export default {
    components: {
        ModalList,
        ButtonLabel    
    },
    data() {
        return {
            showClassify: false,
            addDrop: false,
            activeLabel: 0,
            buttonLabels:
            [
                {
                    labelName: "tat ca",
                    labelId: 0
                },
                {
                    labelName: "Danh sach 1",
                    labelId: 1
                },
                {
                    labelName: "Danh sach 2",
                    labelId: 2
                },
                {
                    labelName: "Danh sach 3",
                    labelId: 3
                }

            ],
        }
    }
}
</script>
<style lang="scss" scoped>
#add-Classify {
  margin: 0px 10px;
  .iconDrop {
    display: flex;
    align-items: center;
    i {
      color: black;
      margin-right: 5px;
    }
    p {
      margin: 0 !important;
      font-weight: 500;
    }

    &.activeDrop {
      i {
        transform: rotate(-90deg);
      }
    }
  }
  .tag-Classify {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    button {
      border-radius: 40px;
      background: #e7e9ee;
      color: black;
      font-size: 13px;
      border: none;

      i {
        color: black;
      }
    }
  }
  .info-classify-full {
    position: absolute;
    background: #7f7f7f3d;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 999;
    left: 0;
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
       @media (max-width:800px) {
                width: 90%;
            }
      .info-classify-title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        padding-bottom: 10px;
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 17px;
          font-weight: 600;
          color: #72808e;
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
      p {
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
      i {
        color: #217bfd;
        font-size: 13px;
      }
      &:hover {
        background: #e5efff;
      }
    }
  }
}
</style>