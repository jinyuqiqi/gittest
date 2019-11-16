<template>
  <div class="songSingleList">
  	<div class="scrollList" :style="{height: boxHeight+'px'}">
  		<div class="single_module">
          <h5>
            <span>在线音乐</span>
          </h5>  
          <div class="single_list">
              <router-link 
                to="/index/discover" 
                tag="div" 
                exact 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-faxian"></i>
                  <span class="pointer">发现</span>
              </router-link>
              <router-link 
                to="/index/sinatv" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-zhibo"></i>
                  <span class="pointer">直播</span>
              </router-link>
              <router-link 
                to="/index/video" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-shipinguanli"></i>
                  <span class="pointer">视频</span>
              </router-link>
          </div>
      </div>
      <div class="single_module">
          <h5><span>我的音乐</span></h5>  
          <div class="single_list">
              <router-link 
                to="/index/songlist/default" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-yinleliebiao-"></i>
                  <span class="pointer">默认列表</span>
              </router-link>
              <router-link 
                to="/index/songlist/recent" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-zuijinbofang"></i>
                  <span class="pointer">最近播放</span>
              </router-link>
              <router-link 
                to="/index/songlist/favorite" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-shoucang1"></i>
                  <span class="pointer">我的收藏</span>
              </router-link>
              <router-link 
                to="/index/songlist/download" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-dianshi"></i>
                  <span class="pointer">本地与下载</span>
              </router-link>
              <router-link 
                to="/index/songlist/clound" 
                tag="div" 
                class="single-item"
                active-class="single-item-current">
                  <i class="iconfont pointer icon-Group-"></i>
                  <span class="pointer">私人音乐云盘</span>
              </router-link>
          </div>
      </div>
      <div class="single_module" style="position: relative">
          <h5 class="icon-title">
            <span>自建歌单({{createCount}})</span>
            <i @click="createSingleList" class="iconfont pointer icon-jiahao"></i>
            <i @click="toggleSingleList(false)" v-if="isFold" class="iconfont pointer icon-xiangshangshouqi-xianxingyuankuang"></i>
            <i @click="toggleSingleList(true)" v-else class="iconfont pointer icon-xiangxiazhankai-xianxingyuankuang"></i>
          </h5>  
          <div class="single_list single_create_self" 
               v-if="createCount" 
               v-show="isFold">
              <div 
                  v-for="(item, index) in createList"
                  :key="index"
                  :class="currentSingleId==item.id?'single-item-current':''" 
                  class="single-item">
                  <i v-if="item.id===1" class="iconfont pointer icon-yulanshoucang"></i>
                  <i v-else class="iconfont pointer icon-musicyinle"></i>
                  <span class="pointer">{{item.single_name}}</span>
              </div>
          </div>
      </div>
      <!-- <div class="single_module">
          <h5><span>收藏歌单</span></h5>  
          <div class="single_list" v-if="favoriteList.length"> 
              <div 
                  v-for="(item, index) in favoriteList"
                  :key="index"
                  :class="currentSingleId==item.keyIndex?'single-item-current':''" 
                  class="single-item"><span>{{item.single_title}}</span>
              </div>
          </div>
      </div> -->
  	</div>
  </div>
</template>

<script>
const { remote } = require("electron");
const dialog = remote.dialog;
import createDialog from'../scripts/createDialog'
import { selectSingle, createSingle } from '../request/api'
import { mapGetters, mapActions } from 'vuex'
import '@/assets/scroll.css'
  export default {
  	props: ['boxHeight'],
    data () {
      return {
        isFold: true,
      	scrollHeight: 0,
        favoriteList: [
          {
            keyIndex: 'leslie',
            single_title: '最爱张国荣'
          },
          {
            keyIndex: 'jacky',
            single_title: '歌神张学友'
          },
          {
            keyIndex: 'Jay',
            single_title: '无与伦比周杰伦'
          },
          {
            keyIndex: 'britney',
            single_title: '小甜甜布兰妮'
          }
        ],
        currentSingleId: 'default',
      }
    },

    computed: {
      ...mapGetters(['createList', 'createCount'])
    },

    created(){
    	// console.log(document.getElementsByClassName('songSingleList')[0].getBoundingClientRect())
    	// this.scrollHeight = 
    },

    mounted(){
      
    	// this.scrollHeight = Math.ceil(document.getElementsByClassName('bodyContent')[0].getBoundingClientRect().height) 
    },

    methods: {
      ...mapActions(['getSingle']),

      createSingleList(event){
        console.log(event.clientY)
        createDialog.createSingle(event.clientY).then(singlename=> {
           createSingle({singlename: singlename}).then(result=> {
              if(result.code===1000){
                this.getSingle()
              }else{

              }
           })
        }).catch(err=> {
          dialog.showErrorBox('提示','创建失败');
        })
      },

      toggleSingleList(bool){
        this.isFold = bool
      }
    },

    components: {
    	
    }
  }
</script>

<style scoped>
.songSingleList{
	width: 210px;
	height: 100%;

  overflow: visible;
  color: #FFFFFF;
}
.single_module{
  padding-top: 15px;
}
.single_module h5{
  padding-left: 25px;
  font-size: 13px;
  font-weight: normal;
  color: #EFEFEF;
}
.single_module h5{
  height: 24px;
  line-height: 24px;
}
.single_module h5.icon-title{
  position: relative;

}
.single_module h5.icon-title .iconfont{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: normal;
}
.single_module h5.icon-title .iconfont:hover{
  color: blue
}
.single_module h5.icon-title .iconfont.icon-jiahao{
    left: 140px;
}
.single_module h5.icon-title .iconfont.icon-xiangshangshouqi-xianxingyuankuang, 
.single_module h5.icon-title .iconfont.icon-xiangxiazhankai-xianxingyuankuang{
  left: 170px;
}
.single_list .single-item{
  height: 34px;
  line-height: 34px;
  padding-left: 25px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: default;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.single_list .single-item:hover{
  background: rgba(200,200,200,0.5)
}
.single_list .single-item .iconfont{
  font-size: 18px;
  margin-right: 12px;
}
.single_list .single-item .icon-yulanshoucang{
  color: #F08080
}
.single_list.single_create_self .single-item .iconfont{
  font-size: 22px;
}

.single_list .single-item-current::before{
  content: "";
  width: 0;
  height: 0;
  border-left: 4px solid blue;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 29px;
  top: 0;
  left: 0;
  position: absolute;
}
</style>
