<template>
  <div>
    <h1>LYRIC</h1>
    <button @click="viewHome">返回</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      	
      }
    },

    methods: {
    	viewHome(){
    		this.$router.push({ path: '/' })
    	}
    }
  }
</script>

<style scoped>
  
</style>
