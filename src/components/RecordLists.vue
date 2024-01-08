<template>
  <!-- <h1>Video Recording Application</h1> -->
  <div id="app">
    <HeaderComponent/>
    <table class="custom-table">
      <thead id="">
        <tr>
          <th>Recordings</th>
          <th>Title</th>
          <th>Views</th>
          <th>Size</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody id="recs">
        <tr id="row" v-for="video in videos" :key="video.id">
          <td id="imgContainer">
            <img :src="video.imageSrc" alt="" id="imgSrc" />
            <span id="lapse">{{ video.lapseTime }}</span>
        </td>
          <td id="title-container">
            <h3>{{ video.title }}</h3>
            <p>{{ video.description }}</p>
          </td>
          <td>{{ video.view }}</td>
          <td>{{ video.size }}</td>
          <td>{{ video.modified }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import img1 from '@/assets/rec1.jpg'
import img2 from '@/assets/rec2.jpg'
import img3 from '@/assets/rec3.jpg'
import img4 from '@/assets/rec4.jpeg'
import img5 from '@/assets/rec5.png'
import HeaderComponent from './HeaderComponent.vue'

const videos = ref([])

const fetchVideos = () => {

  videos.value = [
    {
      id: 1,
      title: 'Getting it right the first time',
      description: 'The video description is shown here if the user has added it',
      view: 324,
      size: '923KB',
      modified: '3 months ago',
      imageSrc: img1,
      lapseTime: "00:14"
    },
    {
      id: 2,
      title: 'Getting it right the first time',
      description: 'The video description is shown here if the user has added it',
      view: 324,
      size: '923KB',
      modified: '3 months ago',
      imageSrc: img2,
      lapseTime: "00:14"
    },
    {
      id: 3,
      title: 'Getting it right the first time',
      description: 'The video description is shown here if the user has added it',
      view: 324,
      size: '923KB',
      modified: '3 months ago',
      imageSrc: img3,
      lapseTime: "00:14"
    },
    {
      id: 4,
      title: 'Getting it right the first time',
      description: 'The video description is shown here if the user has added it',
      view: 324,
      size: '923KB',
      modified: '3 months ago',
      imageSrc: img4,
      lapseTime: "00:14"
    },
    {
      id: 5,
      title: 'Getting it right the first time',
      description: 'The video description is shown here if the user has added it',
      view: 324,
      size: '923KB',
      modified: '3 months ago',
      imageSrc: img5,
      lapseTime: "00:14"
    }
  ]
}

onMounted(() => {
  fetchVideos()
})
</script>

<style lang="less" scoped>
@primary-color: rgba(0, 0, 17, 0.6);
@secondary-color: rgb(215, 215, 215);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 75%;
  background-color: white;
  padding: 20px 1px 20px 50px;
  h3 {
    font-size: 16px;
    margin-bottom: 20px;
    color: @primary-color;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: darken(@secondary-color, 12%);
    font-weight: 400;
  }

  .custom-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th,
    td {
      // border: 1px solid #ddd;
      padding: 6px 10px;
      text-align: left;
      font-weight: 600;
    //   color: darken(@primary-color, 20%);
    color: @primary-color;
    }
    th {
        font-weight: 700;
        font-size: 18px;
    }
    #title-container {
      width: 350px;
      padding-right: 100px;
    }
    #imgContainer{
        position: relative;
        width: 170px;
        // border: 2px solid red;
        #lapse{
            position: absolute;
            bottom: 18px;
            right: 14px;
            background-color: black;
            color: white;
            width: 50px;
            text-align: center;
            padding: 2px;
            border-radius: 3px;
            font-weight: 400;
            font-size: 12px;
        }
    }

    #imgSrc {
      width: 100%;
      height: 80px;
      border-radius: 8px;
    }
  }
}
</style>
