<template>
  <div>
    <div class="container-iner">
      <div class="question">
        <div v-html="data.body"></div>
      </div>
    </div>
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
      axios.get(`/api/4/news/${this.$route.params.id}`).then(res => {
        this.data = res.data
      })
    }
  },
  created() {
    this.getNews()
  }
}
</script>

<style scoped>
.container-iner {
  width: 600px;
  margin: 0 auto;
  background-color: #fefefe;
}
.question {
  width: 520px;
  margin: 0 auto;
}
.question >>> .meta {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
  color: #b8b8b8;
}
.question >>> .meta span {
  vertical-align: middle;
}
.question >>> .meta .source-icon {
  width: 20px;
  height: 20px;
}
.question >>> .meta .time {
  float: right;
  margin-top: 2px;
}
.question >>> .meta .source-icon {
  margin-right: 4px;
}
.question >>> .meta .source {
  vertical-align: middle;
}
.question >>> .content {
  color: #444;
  line-height: 2em;
  margin: 10px 0 25px;
}
.question >>> .content img {
  max-width: 100%;
  margin: 10px 0;
  display: block;
}
.question >>> .content img[src*='zhihu.com/equation'] {
  display: inline-block;
  margin: 0 3px;
}
.question >>> .content a {
  color: #105cb6;
  text-decoration: none;
}
.question >>> .content a:hover {
  text-decoration: underline;
}
</style>


