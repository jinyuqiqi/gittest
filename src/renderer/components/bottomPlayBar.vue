<template>
  <div class="playSettingBar">
    顶部导航
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },

    methods: {
    	viewLyric(){
    		this.$router.push({ path: '/lyric' })
    	}
    },

    components: {
    	
    }
  }
</script>

<style scoped>
.playSettingBar{
	width: 100%;
	height: 66px;
}
</style>
