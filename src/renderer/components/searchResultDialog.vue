<template>
  <div class="search_r_dialog" :style="{width: inputWidth+'px', left: inputLeft+'px'}">
      <div class="r_moufle" v-for="(item, key) in searchList" :key="key">
      	 <span>{{key | filterdatatyle}}</span>
      	 <div class="r_module_list">
      	 	<div v-for="(vl, index) in item" :key="index" @click="searchDetails(vl)">
      	 		{{vl.name}}<span v-if="vl.artist"> - {{vl.artist | filterartist}}</span>
      	 		<!-- lll -->
      	 	</div>
      	 	
      	 </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSongDetail } from '@/request/api'
export default {
    data () {
      return {
        
      }
    },

    filters: {
      filterdatatyle: function (key) {
        if(key  ===  'songs')return '单曲'
        if(key  ===    'mvs')return '视频'
        if(key  === 'albums')return '专辑'
        if(key  ==='artists')return '歌手'
      },

  	  filterartist: function(artist){
  	  	if(Object.prototype.toString.call(artist)==='[object Object]'){
  	  		return artist.name
  	  	}
  	  	if(Object.prototype.toString.call(artist)==='[object Array]'){
  	  		return artist[0].name
  	  	}
  	  }
    },

    computed: {
  		...mapGetters(['inputLeft', 'inputWidth', 'searchList'])
  	},

    created(){
      
    },

    mounted(){
    	console.log(this.searchList)
    },

    methods: {
      searchDetails(value){
      	getSongDetail({id: value.id}).then(res=> {
      		console.log(res)
      	})
      	this.$store.commit('MULTIPLE_ASSIGNMENT', {
            showSRD: false
        })
      }
    },

    components: {
    	
    }
}
</script>
<style scoped>
.search_r_dialog{
	position: absolute;
	top: 44px;
	height: auto;
	background: #FFFFFF;
	z-index: 5;
	padding: 5px;
	box-shadow:0px 0px 5px 1px #999999;
	overflow: hidden;
}
.r_moufle{
	overflow: hidden;
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #dddddd;
	padding: 5px 0;
}
.r_moufle:last-child{
	border: none
}
.r_moufle span{
	width: 52px;
	padding-left: 12px;
	color: #999999;
}
.r_module_list{
	width: calc(100% - 60px);
	line-height: 32px;
}
.r_module_list div{
	width: 100%;
	height: 32px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap
}
.r_module_list div:hover{
	cursor: pointer;
	background: #F1F1F1
}
</style>
