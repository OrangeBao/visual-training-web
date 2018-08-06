<template>
  <div id="training">
    <!-- 当前进度: {{ currentStep }}/{{ totalStep }} -->
    <TrainQ />
  </div>
</template>

<script>
import TrainQ from '@/components/TrainQ'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('training')

export default {
  name: 'Training',
  components: {
    TrainQ
  },
  computed: {
    ...mapGetters([
      'currentStep',
      'totalStep'
    ])
  }
}
</script>

<style lang="scss" scoped>
  #training {
    color: red
  }
</style>
