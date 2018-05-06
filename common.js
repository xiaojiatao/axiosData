// config
import Qs from 'qs'
import axios from 'axios'
export default axios.create({
	// 请求的接口,在请求的时候,如axios.get(url,config);这里的url会覆盖掉config中的url
	url: '/user',
	// 请求方法同上
	method: 'get',
	// 基础url前缀
	baseUrl: 'https://some-domain.com/api',
	transformRequest: [function (data) {
		// 这里可以在发送请求之前对数据做处理,比如form-data格式化等,这里可以使用开头引入的Qs(这个模块在安装axios的时候就
		// 安装了，不需要另外安装)
		data = Qs.stringify({});
	}],
	
	transformResponse: [function (data) {
		// 这里提前处理返回的数据
		return data;
	}],
	
	// 请求信息
	headers: {
		'X-Requested-With' : 'XMLHttpRequest'
	},
	
	// parameter参数
	params: {
		ID: 12345
	},
	
	// post参数,使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象,否则会报错
	data: {
		firstName: 'Fred'
	},
	
	// 设置超时时间
	timeout: 1000,
	
	// 返回数据类型
	responseType: 'json',  // default
})
