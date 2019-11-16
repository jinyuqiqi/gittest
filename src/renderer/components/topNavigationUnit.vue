<template>
  <div class="menuSettingBar">
    <div class="userInfo_box">
    	<div class="userImg pointer"><img src="../../../static/image/fuck.jpg"></div>
    	<div class="userName">
    		<h4 class="pointer">金玉其外</h4>
    		<div class="badge">
    			<span class="pointer">开通会员</span>
    			<span class="pointer">LV.7</span>
    		</div>
    	</div>
    </div>
    <div class="search_box">
        <div class="refresh_icons">
            <i @click="systemEvent(10)" class="iconfont pointer icon-jiantou3"></i>&nbsp;&nbsp;&nbsp;  
            <i @click="systemEvent('reload')" class="iconfont pointer icon-shuaxin"></i>          
        </div>
        <div class="search_input">
            <div>
              <input @input="showList" v-model="searchWords" placeholder="请输入歌名，歌手名或专辑名" type="text" id="search_input">
              <i class="iconfont icon-sousuo"></i>
            </div>
        </div>
    </div>
    <div class="system_box">
        <span @click="systemEvent(0)" class="pointer">回到旧版</span>
        <span @click="systemEvent(1)" class="pointer">
          反馈&nbsp;<i class="iconfont icon-yijianfankui"></i>
        </span>
        <span><i @click="systemEvent(3)" class="iconfont pointer icon-xinxi"></i></span>
        <span><i @click="systemEvent(2)" class="iconfont pointer icon-shouji-copy"></i></span>
        <span><i @click="systemEvent(4)" class="iconfont pointer icon-caidan"></i></span>
        <span><i @click="systemEvent(5)" class="iconfont pointer icon-yifu"></i></span>
        <span><i @click="systemEvent(6)" class="iconfont pointer icon-shezhi"></i></span>
        <span><i @click="systemEvent(7)" class="iconfont pointer icon-suoxiaotuichuquanpingshouhui"></i></span>
        <span><i @click="systemEvent('min')" class="iconfont pointer icon-minimum"></i></span>
        <span><i @click="systemEvent(9)" class="iconfont pointer icon-guanbi-"></i></span>
    </div>
  </div>
</template>

<script>
import '@/assets/font.css'
import createDialog from '@/scripts/createDialog'
import { searchRessult } from "@/request/api"
import { trim, throttle } from "@/untils/until"
import { mapGetters, mapActions, mapMutations } from 'vuex'
const electron = require("electron")
const app = electron.remote.app
const ipcRenderer = electron.ipcRenderer
const childWindow = require('../scripts/createChildWindow')
export default {
    data () {
      return {
        searchWords: '',
        searchResultList: []
      }
    },

    created(){
      // ipcRenderer.on('peeling', (event, data)=> {
      //   console.log('lll')
      // })
    },

    
    computed: {
      ...mapGetters(['showSRD'])
    },

    methods: {
      systemEvent(arg){
        let TYPE = Object.prototype.toString.call(arg)
        if(TYPE === '[object String]'){
          if(arg==='reload'){
            sessionStorage.setItem("store",JSON.stringify(this.$store.state))
          }

          ipcRenderer.send(arg, null)
        }
        if(arg===5){
          childWindow.createSkinWin('skinWin')
        }
        if(arg===9)app.quit()
        
      },

      showList(){
        if(trim(this.searchWords)===''&&!this.showSRD){
          this.$store.commit('MULTIPLE_ASSIGNMENT', {
              showSRD: false
          })
          return
        }

        searchRessult({keywords: this.searchWords}).then(res=> {
            if(res.code===1000){
              let data = JSON.stringify(res.data) == "{}"?null:res.data
              this.$store.commit('MULTIPLE_ASSIGNMENT', {
                searchList: data
              })
              if(data){
                delete data.order
                if(!this.showSRD){
                  this.$store.commit('MULTIPLE_ASSIGNMENT', {
                      showSRD: true
                  })
                }
                return
              }
              if(this.showSRD){
                this.$store.commit('MULTIPLE_ASSIGNMENT', {
                    showSRD: false
                })
              }
            }
            
        }).catch(err=> {
            console.log(err)
        })
      }
        // 
    },

    components: {
    	
    }
}
</script>

<style scoped>
.menuSettingBar{
	width: 100%;
	height: 50px;
  color: #FFFFFF;
  display: inline-flex;
  overflow: hidden;
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
.userInfo_box{
	width: 210px;
	height: 100%;
	display: inline-flex;
	flex-wrap: nowrap;
	align-items: center;
  padding-left: 28px;
  padding-top: 5px;
}
.userImg img{
	width: 36px;
	height: 36px;
	dispaly: block;
  border-radius: 50%;
  -webkit-app-region: no-drag;
}
.userName {
	line-height: 18px;
  margin-left: 10px;
}
.userName h4{
  font-size: 12px;
  -webkit-app-region: no-drag;
}
.userName .badge{
  display: inline-flex;
}
.userName .badge span{
  height: 12px;
  line-height: 14px;
  display: block;
  border: 1px solid #FFFFFF;
  font-size: 10px;
  padding: 0 5px;
  border-radius: 7px;
  margin-right: 5px;
  -webkit-app-region: no-drag;
}
.userName .badge span:first-child{
  color: orange;
  border-color: orange;
}
.search_box{
  flex-grow: 1;
  height: 100%;
  line-height: 50px;
  display: inline-flex;
  flex-wrap: nowrap
}
.search_box .refresh_icons{
  height: 100%;
  line-height: 48px;
  width: 75px;
  display: flex;
  justify-content: space-around;
  padding: 0 13px;
  margin-right: 10px;
}
.search_box .refresh_icons i{
  font-size: 14px;
  color: #F2F2F2;
  opacity: 0.9;
  -webkit-app-region: no-drag;
}
.search_box .refresh_icons i:hover{
  color: #FAFAFA;
  opacity: 1
}
.search_box .search_input{
  flex-grow: 1;
}
.search_box .search_input>div{
   width: 80%;
   position: relative;
   min-width: 300px;
}
.search_box .search_input i{
  position: absolute;
  height: 24px;
  top: 50%;
  right: 12px;
  color: #F8F8F8;
  transform: translateY(-50%);
  -webkit-app-region: no-drag;
  line-height: 26px;
}
.search_box .search_input input{
  width: 100%;
  color: #FFFFFF;
  border: none;
  outline: none;
  background: #CDC5BF;
  height: 26px;
  line-height: 26px;
  border-radius: 13px;
  padding: 0 36px 0 12px;
  box-sizing: border-box;
  -webkit-app-region: no-drag;

}
.system_box{
  width: 370px;
  height: 100%;
  line-height: 50px;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 12px;
}
.system_box span{
  margin-left: 15px;
  color: '#F8F8F8';
  opacity: 0.8;
  -webkit-app-region: no-drag;
}
.system_box span:first-child{
  margin-left: 0
}
.system_box span i.iconfont{
  font-size: 15px;
}
.system_box span:hover{
  color: '#FFFFFF';
  opacity: 1
}
</style>
