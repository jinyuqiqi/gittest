<template>
  <div class="search_top_bar">
    <div style="width: 100%;display: flex;flex-direction:nowrap;justify-content: space-between;">
    	<h4 style="font-weight: normal;color: #FFFFFF;font-size: 16px;">搜索&nbsp;"<b>{{searchValue}}</b>"&nbsp;的结果</h4>
    	<div class="satis_btns">对搜索结果 &nbsp;
    		<span class="pointer">满意</span>&nbsp;&nbsp;
    		<span class="pointer">不满意</span>
    	</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      	searchValue: '你好',
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
    }
  }
</script>

<style scoped>
.search_top_bar{
	width: 100%;
	padding-top: 18px;
}  
.satis_btns{
	color: #EEEEEE;
}
.satis_btns span{
	color: #FFFFFF
}
.satis_btns span:hover{
	color: #4876FF
}
</style>
