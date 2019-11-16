<template>
  <div class="songAction">
  	  <div class="song_type_navigation">
          <span class="active">单曲</span>
          <span>歌单</span>  
          <span>MV</span>  
          <span>专辑</span> 
          <span>歌词</span>     
      </div>
      <div class="handle_action">
      	  <span><i class="iconfont icon-bofang"></i><font>播放全部</font></span>
      	  <span><i class="iconfont icon-xiazai"></i><font>下载全部</font></span>
      	  <span><i class="iconfont icon-liebiao"></i><font>批量操作</font></span>
      </div>
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
.songAction{
  width: 100%;
  color: #FFFFFF;
}
.song_type_navigation,.handle_action {
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 0;
  border-bottom: 1px solid #E4E4E4;
}
.handle_action{
	font-size: 13px;
}
.song_type_navigation span{
  width: 70px;
  text-align: center;
}
.handle_action span{
	height: 26px;
	line-height: 26px;
	border: 1px solid #BBBBBB;
	padding: 0 15px;
	display: flex;
	align-items: center;
	border-radius: 3px;
	margin-right: 8px;
}
.handle_action span:hover{
	background: #7D9EC0;
	cursor: pointer
}
.handle_action span i{
	margin-right: 6px;
}
.song_type_navigation span:hover{
	cursor: pointer;
	color: #4876FF
}
.song_type_navigation span.active{
  font-size: 17px;
  font-weight: bold;
  position: relative
}
.song_type_navigation span.active::after{
  position: absolute;
  content: " ";
  width: 24px;
  height: 3px;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);
  background: #4876FF
}
</style>
