<template>
  <div>
    <el-container>
      <el-header height="78px">知乎日报</el-header>
      <el-main>
        <el-carousel
          type="card"
          trigger="click"
          height="480px"
        >
          <el-carousel-item
            v-for="item in data.top_stories"
            :key="item.id"
          >
            <router-link :to="{name:'news', params:{id:item.id}}">
              <img
                :src="item.image"
                width="760px"
                height="480px"
              >
              <div class="banner-title">{{ item.title }}</div>
            </router-link>

          </el-carousel-item>
        </el-carousel>
        <!-- 排列文章 -->
        <div class="main-content">
          <div
            class="wrap"
            v-for="item in data.stories"
            :key="item.id"
          >
            <div class="box">
              <router-link :to="{name:'news', params:{id:item.id}}">
                <img
                  :src="item.images[0]"
                  width="200px"
                  height="200px"
                >
                <span class="title">{{ item.title }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer height="260px"></el-footer>
    </el-container>
  </div>
</template>


<script>
import axios from '../plugins/axios'
export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    getNews() {
      axios.get('api/4/news/latest').then(res => {
        this.data = res.data
        console.log(res)
      })
    }
  },
  created() {
    this.getNews()
  },
  mounted() {}
}
</script>

<style scoped>
.el-header {
  color: #0084ff;
  width: 100%;
  padding: 0 25%;
  font: 45px sans-serif;
  line-height: 60px;
  position: fixed;
  background-color: #fff;
  z-index: 100;
}
.el-main {
  width: 100%;
  margin: 78px auto 0;
  padding: 0;
}
.el-carousel {
  margin: 0 auto 0px;
  width: 1520px;
  height: 520px;
}
.banner-title {
  height: 480px;
  line-height: 180px;
  padding: 300px 20px 0;
  position: relative;
  top: -484px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  background-color: rgb(0, 0, 0, 0.3);
}
.main-content {
  width: 780px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
}
.wrap {
  margin: 0px 10px 20px;
  background-color: #fff;
}
.box {
  padding: 15px;
  width: 100%;
}
.box > a > img,
span {
  display: block;
  width: 200px;
  margin: 0 auto 10px;
}
.el-footer {
  width: 100%;
  background-color: #eee;
}
</style>
