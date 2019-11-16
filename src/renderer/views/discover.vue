<template>
  <div>
    <h1 class="pointer" @click="request">发现</h1>
    <rand-cover>
        <div slot="header">
           头部插槽
        </div>
        <div>
          满城尽带黄金甲
        </div>
        <div slot="footer">
           底部插槽
        </div>
    </rand-cover>
  </div>
</template>

<script>
import RandCover from '@/components/randcover'
import { getOuterLinkTest } from "../request/api"
import mixin from '../scripts/mixin' 
  export default {
    mixins: [mixin],
    data () {
      return {
      	
      }
    },

    methods: {
    	request(){
        getOuterLinkTest().then(res=> {
          console.log(res)
        }).catch(err=> {
          console.log(err)
        })
      }
    },

    components: {
      RandCover
    }
  }
</script>

<style scoped>
  
</style>
