<template>
  <div>
    <div class="title">儿童视觉训练</div>
    <el-button type="primary" plain @click="jumpToTraining">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    jumpToTraining () {
      this.$router.push({ name: 'training' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-size: 28px;
    padding-bottom: 5rem;
  }
</style>
