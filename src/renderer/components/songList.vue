<template>
  <div class="songList">
    <div class="scrollList" :style="{height: boxHeight+'px'}">
  		  <div class="songColumn">
            <span>歌曲名</span>  
            <span>歌手</span>  
            <span>专辑</span>  
            <span>时间</span>  
        </div>
        <div class="song_list">
            <div class="songColumn">
                <span><i class="iconfont icon-shoucang1"></i>断桥残雪</span>  
                <span>
                    <i class="iconfont icon-bofang"></i>
                    <i class="iconfont icon-xiazai"></i>
                    <i class="iconfont icon-gengduo"></i>
                    许嵩
                </span>  
                <span>《vae新歌》</span>  
                <span>03:47</span>  
            </div>
        </div>
  	</div>
  </div>
</template>

<script>
import '@/assets/scroll.css'
export default {
  	props: ['boxHeight'],
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
.songList{
	flex-grow: 1;
	height: 100%;
	overflow: hidden;
  color: #FFFFFF;
}
.song_list{width: 100%}
.songColumn{
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 13px;
  color: #EFEFEF;
  border-bottom: 1px solid #E1E1E1;
}
.song_list .songColumn{
  color: #FFFFFF;
  font-size: 14px;
  position: relative;
}
.song_list .songColumn:hover{
  background: #7D9EC0
}
.song_list .songColumn span:first-child{
  position: relative
}
.song_list .songColumn span:nth-child(2){
  position: relative
}
.song_list .songColumn span .iconfont{
  height: 30px;
  position: absolute;
  top: 50%;
  font-size: 18px;
  transform: translateY(-50%)
}
.song_list .songColumn span:first-child .icon-shoucang1{
  left: 5px;
}
.song_list .songColumn span:nth-child(2) .icon-bofang{
  left: -100px;
}
.song_list .songColumn span:nth-child(2) .icon-xiazai{
  left: -70px;
}
.song_list .songColumn span:nth-child(2) .icon-gengduo{
  left: -40px;
}
.song_list .songColumn span .iconfont:hover{
  color: #4876FF;
  cursor: pointer; 
}
.songColumn span{
  box-sizing: border-box
}
.songColumn span:first-child{
  flex-grow: 1;
  padding-left: 30px;
}
.songColumn span:nth-child(2){
  width: 110px;
}
.songColumn span:nth-child(3){
  width: 160px;
}
.songColumn span:last-child{
  width: 70px;
}
</style>
