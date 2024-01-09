<template>
  <div id="listContainer">
    <div id="brand">
      <div id="logoYello">
        <div id="logoWhite"></div>
      </div>
      <span id="brandName">Adilo</span>
    </div>
    <ul v-for="item in navItems" :key="item.id">
      <li id="active" v-if="item.active">{{ item.item }} <img :src="arrow" alt=""></li>
      <li id="notactive" v-else>{{ item.item }}</li>
    </ul>
    <div id="support">
      <div id="help">Help</div>
      <div id="vertical-line"></div>
      <div id="profile">
        <img :src="profile" alt="" id="profile-picture" />
        <div>
          <h3 id="name">Cody Fisher</h3>
          <p id="email">Cody Fisher@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import arrow from '@/assets/arrow.svg'
const navItems = ref([])
import profile from '@/assets/profile.png'
const fetchNavItems = () => {
  navItems.value = [{item:'Projects', active: false}, {item:'Tools & App', active: true}, {item:'Channels', active: false}, {item:'Contacts', active: false}, {item:'Analytics', active: false}, {item:'Settings', active: false}, ]
}

onMounted(() => {
  // Fetch data from the mock backend
  fetchNavItems()
})
</script>

<style lang="less" scoped>
#listContainer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 6% 0 1%;
  border-bottom: 1px solid rgb(218, 216, 216);
}
#notactive {
  color: rgb(160, 160, 160);
  list-style-type: none;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0;
}
#active {
  padding:n 10px 0;
  color: rgba(12, 6, 46, 0.8);
  list-style-type: none;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  border-top: 4px solid rgba(6, 133, 196, 0.7);
}
#brand {
  display: flex;
  gap: 15px;
  #brandName {
    color: rgb(59, 59, 112);
    font-weight: 700;
    font-size: 27px;
    margin-right: 20px;
  }
  #logoYello {
    background-color: rgb(236, 183, 83);
    width: 45px;
    height: 45px;
    padding: 2px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    #logoWhite {
      background-color: white;
      width: 32px;
      height: 32px;
      padding: 2px;
      border-radius: 50px;
    }
  }
}
#support {
  display: flex;
  color: black;
  align-items: center;
  #help {
    font-weight: 700;
    font-size: 20px;
    color: rgba(1, 1, 99, 0.7);
    margin-left: 100px;
  }
  #vertical-line {
    border-left: 2px solid #ccc;
    height: 45px;
    margin: 20px;
  }
  #profile {
    display: flex;
    gap: 8px;
    #name{
        font-weight: 800;
        font-size: 18px;
    }
    #email{
        color: rgb(168, 167, 167);
        font-weight: 600;
        font-size: 12px;

    }
    #profile-picture {
      width: 48px;
      height: 48px;
      border-radius: 10px;
    }
  }
}
</style>
