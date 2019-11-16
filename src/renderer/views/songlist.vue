<template>
  <div :style="{height: boxHeight+'px'}">
    <searchTopBar />
    <songHandleAction />
    <songList :boxHeight="childBoxHeight"/>
    
  </div>
</template>

<script>
import songList from '@/components/songList'
import searchTopBar from '@/components/searchTopBar'
import songHandleAction from '@/components/songHandleAction'



  export default {
    props: ['boxHeight'],
    data () {
      return {
      	childBoxHeight: 500
      }
    },

    created(){
      console.log(this.$route.params.id)
    },

    mounted(){
    },

    methods: {
    	
    },

    components: {
      songList,
      searchTopBar,
      songHandleAction
    }
  }
</script>

<style scoped>
  
</style>
