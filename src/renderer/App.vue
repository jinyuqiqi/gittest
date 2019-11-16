<template>
  <div id="app" class="container" :style="{ backgroundImage: 'url(../../static/image/'+background+'.jpg)' }">
    <router-view></router-view>
  </div>
</template>

<script>
const electron = require("electron")
const ipcRenderer = electron.ipcRenderer
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { throttle } from '@/untils/until'
export default {
  	data(){
  		return {
  			
  		}
  	}, 

  	computed: {
  		...mapGetters(['background','inputWidth'])
  	},

  	created(){
      const that = this
      if(sessionStorage.getItem("store")){
        this.$store.replaceState(JSON.parse(sessionStorage.getItem("store")));
        sessionStorage.removeItem("store")
      }else{
        this.getSingle()
      }

      window.onresize = throttle(()=> {
        let srd = that.getSearchDialogSetting()
        that.MULTIPLE_ASSIGNMENT(srd)
      }, 350)
      
  		ipcRenderer.on('perform-peeling', (events, data)=> {
        that.MULTIPLE_ASSIGNMENT({
          'background': data
        })
  		})
  	},

  	mounted(){
  		let skeleton = document.getElementById('skeleton')
  		// document.body.removeChild(document.getElementById('skeleton'))
  		document.getElementById('app').style.opacity = '1'
  		skeleton.style.opacity = '1'
  		let timer = setInterval(()=> {
  			if(skeleton.style.opacity<=0.2){
  				clearInterval(timer)
  				timer = null
  				document.body.removeChild(skeleton)
  			}
  			skeleton.style.opacity = ''+parseFloat(skeleton.style.opacity)-0.05 +''
  		}, 150)

      let srd = this.getSearchDialogSetting()
      this.MULTIPLE_ASSIGNMENT(srd)
  	},

    methods: {
      ...mapActions(['getSingle']),
      ...mapMutations(['MULTIPLE_ASSIGNMENT']),

      getSearchDialogSetting(){
        let inputLeft = document.getElementsByClassName('userInfo_box')[0].offsetWidth + document.getElementsByClassName('refresh_icons')[0] .offsetWidth + 10
        let inputWidth = parseInt(document.getElementById('search_input').offsetWidth)

        return {
          inputLeft,
          inputWidth
        }
        
      }
    }
}
</script>
<style>
#app{
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: 100% 100%;
	opacity: 0
}
</style>

