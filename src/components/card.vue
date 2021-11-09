<template>
   <div>
     <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#13C26B" inactive-color="#C6CAD3" safe-area-inset-bottom>
        <van-tabbar-item >
          <img :src="active == '0' ? require('@/assets/icon/punchActive.png') : require('@/assets/icon/punch.png')" width="40%"/>
          <div>BCA</div>
        </van-tabbar-item>
        <van-tabbar-item @click="record">
          <img :src="active == '1' ? require('@/assets/icon/recordActive.png') : require('@/assets/icon/record_no.png')" width="40%"/>
          <div>BCB</div>
        </van-tabbar-item>
        <van-tabbar-item @click="record">
          <img :src="active == '2' ? require('@/assets/icon/recordActive.png') : require('@/assets/icon/record_no.png')" width="40%"/>
          <div>BCC</div>
        </van-tabbar-item>
    </van-tabbar>
   </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    //
  },
  methods: {
    record () {
      console.log('000')
    }
  },
  created () {
    //
  }
}
</script>
