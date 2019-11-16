// import { trim } from '../untils/until'
const { trim } = require('../untils/until')

export default {
	createSingle(h){
		return new Promise((resolve, reject)=> {
			let element = document.createElement('div');
			element.className = 'float_dialog';
			element.classList.add('single_dialog');
			
			element.innerHTML  = `
				<h4 style="font-weight: normal;line-height: 46px;">新建歌单</h4>
				<div style="padding-top: 5px;">
					<input 
						id="myInput"
						style="outline: none;height: 28px;line-height: 28px;border-radius: 3px;border:1px solid #BBBBBB; width: 240px;padding: 0 5px;" 
						type="text" placeholder="请输入歌单名"/>
				</div>
				<div style="padding: 20px 0 16px;justify-content: space-around;display: flex;">
					<button type="button" id="confirm_btn" class="d-btn">创建</button>
					<button type="button" id="cancel_btn" class="d-btn">取消</button>
				</div>
				<p style="position: absolute;width:0;height:0;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #FFFFFF;left:-7px;top:50%;margin-top:-12px;"></p>
			`;
			document.getElementById('app').appendChild(element)

			let top = h - parseInt(element.offsetHeight/2)
			element.style.top = top+'px';

			document.getElementById('confirm_btn').onmouseover = function(ev){
				if(trim(document.getElementById('myInput').value)===''){
					this.style.color = '#BBBBBB';
					this.style.borderColor = '#BBBBBB';
					this.style.background = '#FFFFFF';
				}else{
					this.style.color = '#333333';
					this.style.borderColor = '#AAAAAA';
					this.style.background = '#DDDDDD';
				}
			}

			document.getElementById('confirm_btn').onmouseleave = function(ev){
				if(trim(document.getElementById('myInput').value)===''){
					this.style.color = '#BBBBBB';
					this.style.borderColor = '#BBBBBB';
					this.style.background = '#FFFFFF';
				}else{
					this.style.color = '#333333';
					this.style.borderColor = '#BBBBBB';
					this.style.background = '#FFFFFF';
				}
			}

			document.getElementById('confirm_btn').onclick = function(ev){
				const value = document.getElementById('myInput').value
				if(trim(value)==='')return false
				document.getElementById('app').removeChild(element)
				resolve(value)
			}

			document.getElementById('cancel_btn').onclick = function(ev){
				document.getElementById('app').removeChild(element)
				reject('error')
			}

			document.getElementById('myInput').oninput = (ev) => {
				let confirmBtn = document.getElementById('confirm_btn')
				if(trim(ev.target.value)!==''){
					confirmBtn.style.color = '#333333';
				}else{
					confirmBtn.style.color = '#BBBBBB';
				}
			}
		})
		
	},

	// createSearchList(data){
	// 	return new Promise((resolve)=> {
	// 		if(document.getElementsByClassName('search_result_box')[0]){
	// 			if(!data){
	// 				document.getElementById('app').removeChild(document.getElementsByClassName('search_result_box'))
	// 				document.removeEventListener('click', removeListen, false)
	// 				return
	// 			}
	// 			let HTML = ''
	// 			data.forEach( (element, index) =>{
	// 				HTML+=`
	// 					<div class="song_item" data-index="${index}">${element.name}</div>
	// 				`
	// 			});
	// 			document.getElementsByClassName('search_result_box')[0].innerHTML = HTML
	// 			return
	// 		}
	// 		if(!data)return

	// 		let searchResultBox = document.createElement('div');
	// 		searchResultBox.className = 'float_dialog';
	// 		searchResultBox.classList.add('search_result_box');
	// 		searchResultBox.style.background = '#FFFFFF';
	// 		searchResultBox.style.position = 'absolute';
	// 		searchResultBox.style.top = '44px';
	// 		searchResultBox.style.left = document.getElementsByClassName('userInfo_box')[0].offsetWidth + document.getElementsByClassName('refresh_icons')[0] .offsetWidth + 10 + 'px';
	// 		searchResultBox.style.width = document.getElementById('search_input').offsetWidth + 'px';

	// 		for(let key in data){
	// 			if()
	// 		}
	// 		let HTML = '';
	// 		data.forEach( (element, index) =>{
	// 			HTML+=`
	// 				<div class="song_item" data-index="${index}">${element.name}</div>
	// 			`
	// 		});

	// 		function createHtml()

	// 		searchResultBox.innerHTML = HTML
	// 		document.getElementById('app').appendChild(searchResultBox)

	// 		document.getElementsByClassName('song_item').onclick = function(ev){
	// 			document.addEventListener('click', removeListen, false)
	// 			resolve(parseInt(ev.target.dataset.index))
	// 		}
	// 		function removeListen(event){
	// 			if(event.target.id === 'search_input'||event.target.className.includes('search_result_box')){
	// 				return 
	// 			}
	// 			if(event.target.className==='song_item'){
	// 				document.getElementById('app').removeChild(searchResultBox)
	// 				document.removeEventListener('click', removeListen, false)
	// 				resolve(parseInt(event.target.dataset.index))
	// 				return
	// 			}
	// 			if(document.getElementsByClassName('search_result_box')[0]){
	// 				document.getElementById('app').removeChild(searchResultBox)
	// 				document.removeEventListener('click', removeListen, false)
	// 			}
				
	// 		}

	// 		document.addEventListener('click', removeListen, false)
	// 	})
	// }
}