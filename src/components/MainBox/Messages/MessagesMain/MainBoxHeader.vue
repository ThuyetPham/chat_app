<template>
    <div class="header-box">
       <div class="header-box-item">
           <div class="header-box-item-icon" @click="$store.state.showSideBar=true">
               <i class="fas fa-angle-left"></i>
           </div>
            <BaseAvatar v-if="$store.state.friend" :img="$store.state.friend.avatar || $store.getters['SOCKET/room'].avatar" :online="$store.state.friend.online"/>
            <div class="name-friend">
                <p>{{$store.state.friend.firstName ? $store.state.friend.firstName + ' '+$store.state.friend.lastName : $store.getters['SOCKET/room'].name }}</p>
                <span v-if="$store.state.friend.online">Just now</span>
            </div>
       </div>
       <div class="header-box-icon">
           <MainBoxIcon v-for="(icon, index) in iconHeader" :key="index" :icon="icon"/>
       </div>
    </div>
</template>
<script>
import BaseAvatar from '@/components/BaseComponent/BaseAvatar.vue'
import MainBoxIcon from './MainBoxIcon.vue'
export default {
    emits: ['handleView'],
    components: {
        BaseAvatar,
        MainBoxIcon
    },

    data() {
        return {
            img: require("@/assets/images/user01.jpg"),
             iconHeader: [
                'fas fa-search',
                'fas fa-phone-alt',
                'fas fa-video',
            ],
        }
    }
    
}
</script>
<style lang="scss" scoped>
.header-box {
    display: flex;
    width: 100%;
    justify-content:space-between;
    align-items: center;
    height: 67px;
    box-shadow: 0px 1px 3px #ddd;
    padding: 0px 10px;
    .header-box-item {
        display: flex;
        align-items: center;
        .header-box-item-icon {
            width: 40px;
            height: 40px;
            text-align: center;
            margin: 0px 10px;
            padding-top: 7px;
            cursor: pointer;
            border: 1px solid rgb(255, 255, 255);
            border-radius: 50%;
            display: none;
            i {
                color: rgb(71, 71, 71);
                font-size: 18px;
            }
            &:hover {
                background: #ddd;
                border: 1px solid #ddd;
                 border-radius: 50%;
            }
             @media (max-width:990px) {
            display: block;
        }
        }
        .name-friend {
            margin-left: 10px;
            p {
                font-weight: 700;
                font-size: 16px;
                margin: 0;
            }

            span {
                font-size: 14px;
                color: rgb(133, 133, 133);
            }
        }
    }

    .header-box-icon {
        display: flex;
    }
}
</style>