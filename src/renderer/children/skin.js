import Vue from "vue"

const electron = require("electron");
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const ipcRenderer = electron.ipcRenderer;
const skinWin = remote.getCurrentWindow();
const { destroySkin } = require("../scripts/createChildWindow")

import '../assets/public.css'
import '../assets/font.css'
import '../assets/scroll.css'
import './skin.css'

new Vue({
	el: "#app",
	data(){
		return {
			mounted: false,
			tabAcIndex: 1,
			bgList: [
				{
					imgKey: 'bg_build',
					imgUrl: '../../../static/image/bg_build.jpg'
				},{
					imgKey: 'bg_rules',
					imgUrl: '../../../static/image/bg_rules.jpg'
				},{
					imgKey: 'bg_views',
					imgUrl: '../../../static/image/bg_views.jpg'
				},{
					imgKey: 'bg_beauty',
					imgUrl: '../../../static/image/bg_beauty.jpg'
				},{
					imgKey: 'bg',
					imgUrl: '../../../static/image/bg.jpg'
				},{
					imgKey: 'bg_2',
					imgUrl: '../../../static/image/bg_2.jpg'
				},{
					imgKey: 'bg_3',
					imgUrl: '../../../static/image/bg_3.jpg'
				},{
					imgKey: 'bg_4',
					imgUrl: '../../../static/image/bg_4.jpg'
				},{
					imgKey: 'bg_5',
					imgUrl: '../../../static/image/bg_5.jpg'
				}
			]
		}
	},

	created(){
		
	},

	mounted(){
		this.mounted = true
	},

	methods: {
		destroyWin(){
			skinWin.close() 
		},

		peeling(bgUrl){
			ipcRenderer.send('peeling', bgUrl)
		},

		tabEvent(index){
			this.tabAcIndex = index
		}
	}
})

