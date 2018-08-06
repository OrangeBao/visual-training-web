<template>
  <div class="hello">
    <svg viewBox="0,0,130,100" width="400" height="300">
      <rect x="50" y="50" width="0.1" height="0.1" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_1"
          ref="rootA"
          attributeName="stroke-opacity"
          values="0;1"
          begin="indefinite"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="45" y="45" width="10" height="10" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_2"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_1.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="40" y="40" width="20" height="20" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_3"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_2.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="35" y="35" width="30" height="30" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_4"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_3.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="30" y="30" width="40" height="40" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_5"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_4.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="25" y="25" width="50" height="50" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_6"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_5.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="20" y="20" width="60" height="60" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_7"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_6.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="15" y="15" width="70" height="70" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_8"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_7.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="10" y="10" width="80" height="80" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_9"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_8.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
      <rect x="5" y="5" width="90" height="90" fill="transparent" stroke-width="1" stroke="#409eff" stroke-opacity="0">
        <animate
          id="trainQ_10"
          attributeName="stroke-opacity"
          values="0;1"
          begin="trainQ_9.end"
          dur="1s"
          fill="freeze"
        />
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TrainQ',
  data () {
    return {
      radius: new Array(10).fill(1).map((item, index) => {
        if (index === 0) {
          // 中心的那个方框 半径不能为0
          return 0.1
        }
        return 5 * index
      })
    }
  },
  methods: {
    startAnimate () {
      this.$refs.rootA.beginElement()
      // setTimeout(() => this.startAnimate(), 3000)
    }
  },
  mounted () {
    this.startAnimate()
  }
}
</script>

<style scoped>
  .r {
    transform-origin: 50% 50%
  }
</style>
