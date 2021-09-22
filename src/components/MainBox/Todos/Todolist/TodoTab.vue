<template>
  <div id="todo">
    <div class="todo-title" @click="$emit('handleTodo')">
      <b>To-Do</b>
      <i class="far fa-list-alt"></i>
    </div>
    <div class="todo-search">
      <i class="far fa-comment-dots"></i>
      <i class="fas fa-search"></i>
    </div>
  </div>
  <div id="todo-user">
    <div class="todo-info">
      <div
        class="todo-chosse"
        v-for="(item, index) in todos"
        :key="index"
        @click="todoActive = item.id,
         doing=item.doing,
         completed=item.completed,
         $emit('todotask',doing) "
        :class="todoActive == item.id ? 'activeChoose' : 'active'"
      >
        <b>{{ item.title }}</b>
        <span>{{ item.number }}</span>
      </div>
    </div>
    <div class="todo-info-accept">
      <div  class="todo-doing" @click="todoAccept=true, $emit('changedoing', doing)" :class="todoAccept? 'activeChoose' : 'active'">
        <b>Doing:</b>
        <span>{{doing}}</span>
      </div>
      <div  class="todo-doing" @click="todoAccept=false, $emit('changecompleted', completed)" :class=" !todoAccept? 'activeChoose' : 'active'">
        <b>Completed:</b>
        <span>{{completed}}</span>
      </div>
     
      <div class="todo-doing">
        <b>More</b>
        <i class="fas fa-sort-down"></i>
      </div>
    </div>
  </div>
  <div></div>
</template>
<script>
export default {
  emits: ['handleTodo','todotask','changedoing','changecompleted'],
  data() {
    return {
      completed:0,
      todoActive: 1,
      todoAccept: true,
      todos: [
        {
          title: "ASSIGNED",
          number: 1,
          id: 1,
          doing:1,
          completed:0,
        },
        {
          title: "RECEIVED",
          id: 2,
          number: 2,
           doing:0,
          completed:2,
        },
        {
          title: "FOLLOW",
          id: 3,
        },
      ],
      todosAccept: [
        {
          title: "Doing:",
          idAccept: 1,
        },
        {
          title: "Completed:",
          idAccept: 2,
        },
      ],
      doing:'',
      comple:'',
    };
  },
  created() {
    this.doing = this.todos[0].doing,
    this.comple = this.todos[0].completed
  }
};
</script>
<style lang="scss" scoped>
#todo {
  display: flex;
  width: 92%;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  .todo-title {
    display: flex;
    align-items: center;
    b {
      font-size: 20px;
      font-weight: 400;
    }
    i {
      color: black;
      font-size: 20px;
      margin-left: 8px;
    }
  }
  .todo-search {
    i {
      color: black;
      font-size: 20px;
      margin-left: 23px;
    }
  }
}

#todo-user {
  display: block;
  .todo-info {
    display: flex;
    width: 100%;
    justify-content: center;
    .todo-chosse {
      width: calc(100% / 3);
      text-align: center;
      height: 50px;
      line-height: 50px;
      b {
        font-size: 15px;
        font-weight: 500;
      }
      span {
        border: 1px soid #ddd;
        background: #ddd;
        padding: 0px 2px;
        border-radius: 40px;
        font-size: 13px;
        margin: 0px 0px 2px 3px;
      }
      &.activeChoose {
        border-top: 1px solid #ebedf1;
        border-right: 1px solid #ebedf1;
        border-left: 1px solid #ebedf1;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        background: white;
        b {
          color: #001a33;
        }
        span {
          color: #0068ff;
          background: #e5efff;
        }
      }
      &.active {
        border-bottom: 1px solid #ebedf1;
        background: #fbfbfd;
        b {
          color: #72808e;
        }
        span {
          color: #72808e;
          background: #e1e4ea;
        }
      }
    }
  }
  .todo-info-accept {
    display: flex;
    width: 100%;
    justify-content: center;
    height: 40px;
    align-items: center;
    .todo-doing {
      width: calc(100% / 3);
      text-align: center;

      i {
        color: #72808e;
        margin: 0px 0px 2px 2px;
      }
      b {
        font-size: 13px;
        font-weight: 500;
        color: #72808e;
      }
      span {
        font-size: 13px;
      }
      &:hover {
        b {
          color: #0068ff;
        }
        i {
          color: #0068ff;
        }
      }
      &.activeChoose {
        border: 1px solid #e5efff;
        background: #e5efff;
        border-radius: 40px;
        b {
          color: #0068ff;
        }
        span {
          color: #0068ff;
        }
      }
      &.active {
        b {
          color: #72808e;
        }
        span {
          color: #72808e;
        }
        &:hover {
          b,
          span {
            color: #0068ff;
          }
        }
      }
    }
  }
}
</style>