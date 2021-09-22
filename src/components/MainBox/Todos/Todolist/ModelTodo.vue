<template>
  <div id="model-todo">
    <div class="model-todo">
      <div class="model-todo-Assign">
        <b>Assign new task</b>
        <i class="fas fa-times" @click="$emit('closeHandleTodo')"></i>
      </div>
      <form action="" class="form-todo">
        <label for="title">Title</label>
        <input type="text" placeholder="Enter title" id="title" />
        <label for="Content">Content <span>*</span></label>
        <textarea
          name=""
          id="Content"
          cols="30"
          rows="10"
          placeholder="Enter your task content"
        ></textarea>
        <label for="Assignee">Assignee <span>*</span></label>
        <div class="model-todo-plus">
          <input type="text" placeholder="Yourself" id="Assignee" />
          <i class="fas fa-plus"></i>
        </div>
        <label for="date">Due date</label>
        <input type="datetime-local" name="" id="date" value="No due date" />
        <div class="model-todo-Cancel">
         <div  @click="$emit('closeHandleTodo')">
              <button class="Cancel">Cancel</button>
         </div>
          <div>
              <button class="assigntask">Assign task</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
    emits: ['closeHandleTodo'],
};
</script>
<style lang="scss" scoped>
#model-todo {
  position: absolute;
  top: 0;
  background: #7d7d7e8c;
  width: auto;
  z-index: 999;
  bottom: 0;
  height: 100%;
  margin: auto;
  left: 0;
  right: 0;
  padding-top: 50px;
  .model-todo {
    width: 440px;
    margin: auto;
    background: #ffffff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #eeeff2;
    .model-todo-Assign {
      position: relative;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      b {
        font-size: 17px;
        font-weight: 600;
        color: #001a33;
      }
      i {
        position: absolute;
        right: 0;
        top: 3px;
        color: #72808e;
        font-size: 18px;
      }
    }
    .form-todo {
      label {
        font-size: 13px;
        font-weight: 600;
        color: #001a33;
        margin: 12px 0px 8px 0px;
        span {
          color: #db342e;
        }
      }
      input {
        height: 40px;
        padding: 0 12px;
        background-color: #fff;
        border-radius: 4px;
        background-image: none;
        border: none;
        width: 100%;
        border: 1px solid #b3bec9;
        outline: none;
        font-size: 14px;
        &:focus {
          font-size: 14px;
          border: 1px solid #0068ff;
        }
        &::placeholder {
          line-height: normal;
          font-weight: 400;
          text-align: left;
          font-size: 14px;
          letter-spacing: normal;
          color: #b3bec9;
        }
      }
      textarea {
        height: 80px;
        padding: 12px;
        background-color: #fff;
        border-radius: 4px;
        background-image: none;
        border: none;
        width: 100%;
        border: 1px solid #b3bec9;
        font-size: 14px;
        outline: none;
        &:focus {
          font-size: 14px;
          border: 1px solid #0068ff;
        }
        &::placeholder {
          line-height: normal;
          font-weight: 400;
          text-align: left;
          font-size: 14px;
          letter-spacing: normal;
          color: #b3bec9;
        }
      }
      .model-todo-Cancel {
        margin: 20px 0px 10px 20px;
        display: flex;
        justify-content: right;
        button {
          outline: none;
          height: 40px;
          width: 100px;
          text-align: center;
          font-size: 14px;
          border: none;
          font-weight: 600;
          margin: 0px 10px;
        }
        .Cancel {
          background: #e8eaef;
          color: black;
        }
        .assigntask {
          background: #0068ff;
          color: white;
        }
      }
    }
  }
}
.model-todo-plus {
  position: relative;
  i {
    position: absolute;
    color: #0068ff;
    right: 12px;
    top: 13px;
    font-size: 15px;
  }
}

@media (max-width:776px) {
  #model-todo {
  position: absolute;
  top: 0;
  background: #7d7d7e8c;
  width: auto;
  z-index: 999;
  bottom: 0;
  height: 100%;
  margin: auto;
  left: 0;
  right: 0;
  padding-top: 50px;
  .model-todo {
    width: 100%;
    margin: auto;
    background: #ffffff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #eeeff2;
    .model-todo-Assign {
      position: relative;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10px;
      b {
        font-size: 17px;
        font-weight: 600;
        color: #001a33;
      }
      i {
        position: absolute;
        right: 0;
        top: 3px;
        color: #72808e;
        font-size: 18px;
      }
    }
    .form-todo {
      label {
        font-size: 13px;
        font-weight: 600;
        color: #001a33;
        margin: 12px 0px 8px 0px;
        span {
          color: #db342e;
        }
      }
      input {
        height: 40px;
        padding: 0 12px;
        background-color: #fff;
        border-radius: 4px;
        background-image: none;
        border: none;
        width: 100%;
        border: 1px solid #b3bec9;
        outline: none;
        font-size: 14px;
        &:focus {
          font-size: 14px;
          border: 1px solid #0068ff;
        }
        &::placeholder {
          line-height: normal;
          font-weight: 400;
          text-align: left;
          font-size: 14px;
          letter-spacing: normal;
          color: #b3bec9;
        }
      }
      textarea {
        height: 80px;
        padding: 12px;
        background-color: #fff;
        border-radius: 4px;
        background-image: none;
        border: none;
        width: 100%;
        border: 1px solid #b3bec9;
        font-size: 14px;
        outline: none;
        &:focus {
          font-size: 14px;
          border: 1px solid #0068ff;
        }
        &::placeholder {
          line-height: normal;
          font-weight: 400;
          text-align: left;
          font-size: 14px;
          letter-spacing: normal;
          color: #b3bec9;
        }
      }
      .model-todo-Cancel {
        margin: 20px 0px 10px 20px;
        display: flex;
        justify-content: right;
        button {
          outline: none;
          height: 40px;
          width: 100px;
          text-align: center;
          font-size: 14px;
          border: none;
          font-weight: 600;
          margin: 0px 10px;
        }
        .Cancel {
          background: #e8eaef;
          color: black;
        }
        .assigntask {
          background: #0068ff;
          color: white;
        }
      }
    }
  }
}
}
</style>