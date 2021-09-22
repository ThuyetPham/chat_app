<template>
  <div class="messageOption">
    <div @click="showOption = !showOption" class="titleOption"><b>{{title}}</b> <i class="fas fa-angle-down"></i>
         <ul class="allMessage" v-show="showOption">
        <li v-for="(item, index) in messages" :key="index" @click="title = item.title; iconCheck = item.id" :iconCheck="iconCheck">
          {{ item.title }} <i :class="iconCheck == item.id && 'fas fa-check'"></i>
        </li>
      </ul>
    </div>
    <div class="tickOption">Đánh dấu đã đọc</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        showOption: false,
        iconCheck: 1,
        messages: [
            {
                title: "Tất cả tin nhắn",
                id: 1,
            },
            {
                title: "Tin nhắn chưa đọc",
                id: 2,
            },
            {
                title: "Tin nhắn từ người lạ",
                id: 3,
            }
        ],
        title: '',
    };
  },
  created() {
      this.title = this.messages[0].title
  }
};
</script>
<style scoped>
.messageOption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px;
}
.tickOption {
    font-size: 13px;
    color: rgb(153, 153, 153);
    cursor: pointer;
}
b {
    font-size: 14px;
}
i {
    color: black;
}
.titleOption {
    position: relative;
    cursor: pointer;
}
.allMessage {
  position: absolute;
  background: #ffffff;
  box-shadow: 2px 2px 2px #ddd;
  font-size: 13px;
  list-style: none;
  width: 200px;
  top: 30px;
  z-index: 999;
}

.allMessage li{
  line-height: 40px;
  cursor: pointer;

}

.allMessage li:hover {
    background: rgb(241, 241, 241);
}
</style>