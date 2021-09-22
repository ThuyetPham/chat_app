<template>
  <div class="row chatItem" :class="mess.sender == $store.state.AUTH.user._id && 'chatItem-box'">
    <div :class="mess.sender == $store.state.AUTH.user._id ? 'sender' : 'receiver'">
      {{ mess.message }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mess: Object,
  },
  /* directives: {
    messageStyle: {
      updated(el, binding) {       
        if (binding.value.sender == 1) {
          el.classList.add('sender')
        } else {
          el.classList.add('receiver')
        }
      },
    },
  },

  created() {
    console.log(this.$store.state.friend.id, this.mess.sender)
  }
  */
};
</script>
<style scoped>
.chatItem-box {
  width: 100%;
  justify-content: flex-end;
}

.sender {
  /* position: absolute; */
  background: #ffffff;
  border-radius: 7px;
  box-shadow: 0px 0px 3px #ddd;
  padding: 8px;
  margin: 5px;
  width: fit-content;
  left: 0;
}

.receiver {
  /* position:absolute; */
  background: rgb(228, 228, 247);
  border-radius: 10px;
  box-shadow: 2px 2px 2px #ddd;
  padding: 5px;
  margin: 5px;
  width: fit-content;
  justify-content: flex-end;
}
</style>