<template>
  <div id="two" class="login hello">
  	<!--01 start-->
  	<div class="row">
  		<input type="text" name="" id="" value="" placeholder="输入用户名" /><br />
  		<input type="password" placeholder="输入密码" /><br>
  		<button @click="login">登录</button>
  	</div><br />
  	<!--01 end-->
  	<!--table start-->
  	<table>
  		<thead>
  			<th>用户名</th>
  			<th>密码</th>
  		</thead>
  		<tbody>
  			<tr v-for="items in tableList">
  				<td>{{items.name}}</td>
  				<td>{{items.password}}</td>
  			</tr>
  		</tbody>
  	</table>
  	<!--table end-->
	</div>
</template>
<script>
	import axios from '@/config/common.js'
	export default {
		name: 'login',
		data () {
			return {
				tableList: []
			}
		},
		mounted () {
		},
		methods: {
			login () {
				var self = this
				axios.get('/static/data/data.json', {})
				.then(function(res) {
					console.log(res.data.users)
					self.tableList = res.data.users
				})
				.catch(function(err) {
					console.log(err)
				})
				// 跳转页面
				// this.$router.go(-1)
			}
		}
	}
</script>
<style scoped="scoped">
	.row input{
		width:200px;
		border:solid 1px #ccc;
		height:32px;
		margin-bottom:10px;
		border-radius:5px;
		padding:0 10px;
	}
	.row button{
		width:220px;
		border-radius:3px;
		height:35px;
		text-align:center;
		appearance: none;
		border:none;
		background:#41b883;
		color:#fff;
		cursor:pointer;
	}
</style>
