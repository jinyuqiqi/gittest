<template>
  <div class="container flex-container">
    <!-- <router-view name="header"></router-view> 
    <div class="bodyContent">
        <router-view name="bodyLeft" :boxHeight="scrollBoxHeight"></router-view> 
        <router-view name="bodyRight" :boxHeight="scrollBoxHeight"></router-view> 
    </div>
    <router-view name="footer"></router-view> 
     -->
  	<top-navigation-unit />

  	<div class="bodyContent">
  		  <song-single-table 
  			    :boxHeight="scrollBoxHeight" />
        <router-view class="right-views scrollList" :boxHeight="scrollBoxHeight"></router-view> 
	   <!--  <song-list 
	       :boxHeight="scrollBoxHeight" /> -->
    </div>

    <bottom-play-bar />
    <search-result-dialog v-if="showSRD"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import songList from '@/components/songList';
import bottomPlayBar from '@/components/bottomPlayBar';
import songSingleTable from '@/components/songSingleTable';
import topNavigationUnit from '@/components/topNavigationUnit';
import searchResultDialog from "@/components/searchResultDialog";

export default {
    data () {
      return {
      	scrollBoxHeight: 0,
      }
    },

    computed: {
      ...mapGetters(['showSRD'])
    },

    mounted(){
    	this.scrollBoxHeight = Math.ceil(document.getElementsByClassName('bodyContent')[0].getBoundingClientRect().height) 
    },

    methods: {
    	
    },

    components: {
    	songList,
    	bottomPlayBar,
    	songSingleTable,
    	topNavigationUnit,
      searchResultDialog
    }
}
</script>

<style scoped>
.flex-container{
	display: flex;
	flex-direction: column;
}
.bodyContent{
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-wrap: nowrap;
}
.right-views{
  flex-grow: 1;
  padding: 0 20px;
}
</style>
