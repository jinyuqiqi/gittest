import axios from 'axios'
import QS from 'qs'
// import { Message } from 'element-react';
const { remote } = require('electron');
const dialog = remote.dialog;

axios.defaults.baseURL = 'http://localhost:6900'

axios.defaults.timeout = 50000

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.error(error);
	}
)

axios.interceptors.response.use(
	response => {
		if(response.status!==200){
			dialog.showErrorBox('提示', 'ERROR!!!');
			// Message({message: response.data.message, type: 'warning'});
		}
        return response.data
	},
	error => {
		return Promise.reject(error)
	}
)

export function get(url, params={}){
    return new Promise((resolve, reject) =>{
        axios.get(url,
        {
            params: params
        })
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
    });
}

export function post(url, params={}) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res);
        })
        .catch(err => {
            reject(err)
        })
    });
}