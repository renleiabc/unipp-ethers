<script module="web3" lang="renderjs">
let web3
export default {
	mounted() {
		if (typeof window.Web3 === 'function') {
			this.handleInitEcharts()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			script.src = 'static/web3/web3.min.js'
    //  script.type="text/plain"
			script.onload = this.handleInitEcharts.bind(this)
			document.head.appendChild(script)
		}
	},
	methods: {
		handleInitEcharts() {
      console.log("Web3=",Web3.version);
      console.log(Web3)
      console.log(Web3.utils.toWei('1', 'ether'));
       const web3 = new Web3("https://goerli.infura.io/v3/b8456dc7fd6f4816bd812aa2edf70d70");
       console.log(web3.eth)
       web3.eth.net.getNetworkType().then(console.log);
      const account = web3.eth.accounts.create("ritual camera snap elite clog ice shop brave hedgehog common suggest script");
      console.log(account)
		},
		updateEcharts(newValue, oldValue, ownerInstance, instance) {
			// 监听 service 层数据变更
			myChart.setOption(newValue)
		},
		onClick(event, ownerInstance) {
			// 调用 service 层的方法
			console.log(ownerInstance,"=====")
			ownerInstance.callMethod('onViewClick', {
				test: 'test'
			})
		}
	}
}
</script>
<template>
  <view>
    <view>web3</view>
  </view>
</template>
