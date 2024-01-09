<template>
  <div id="container">
    <div id="header">
      <HeaderNav />
    </div>
    <div id="main">
      <div id="parent">
        <div id="child1">
          <div id="header-title">
            <p id="red-dot1">
              <span id="red-dot2"></span>
            </p>
            <h4>Live preview</h4>
          </div>
          <div id="text"></div>
        </div>
        <div id="child2"></div>
        <div id="button">
        <button>Start Recording</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from './HeaderNav.vue'
</script>

<style lang="less" scoped>
#main {
  background-color: rgba(79, 253, 253, 0.1);
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
//   align-items: center;
  #parent {
    width: 60%;
    height: 60%;
    margin-top: 30px;
    #child1 {
      #header-title {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 5px;
        h4 {
          color: rgba(104, 122, 162, 0.7);
          font-weight: 600;
        }
        #red-dot1 {
          border: 1px solid red;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          #red-dot2 {
            background-color: blue;
            width: 50%;
            background-color: red;
            height: 78%;
            border-radius: 50%;
            padding: 0 7px;
          }
        }
      }
    }
    #child2 {
      width: 100%;
      height: 100%;
      background-color: rgb(11, 29, 45);
      border-radius: 7px;
    }
    #button{
        text-align: center;
        button{
            background-color: rgba(6, 133, 196, 0.4);
            color: white;
            border: none;
            padding: 18px 60px;
            border-radius: 50px;
            margin: 20px 0;
            font-weight: 600;
            font-size: 15px;
        }
      }
  }
}
</style>
