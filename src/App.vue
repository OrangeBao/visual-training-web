<template>
  <div id="app">
    <!-- <el-button @click="fetchData">默认按钮</el-button>
    <span>{{ userName }}</span> -->
    <router-view/>
  </div>
</template>

<script>
import { getTest } from '@/api/test'

export default {
  name: 'App',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    fetchData () {
      getTest().then(data => {
        this.userName = data.data.userName
      })
    }
  }
}
</script>
