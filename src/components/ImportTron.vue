<script module="tronWeb" lang="renderjs">
let tronWeb
export default {
	mounted() {
		if (typeof window.TronWeb === 'function') {
			this.initEcharts()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			script.src = 'static/tronweb/tronWeb.js'
			script.onload = this.handleInitTronWeb.bind(this)
			document.head.appendChild(script)
		}
	},
	methods: {
		handleInitTronWeb() {
       console.log("TronWeb=",TronWeb.version);
			const nileex = 'https://nile.trongrid.io';
const privateKey =
  '93d3aaf6ba22e7e02362e8d6839e0e8d810681895075b2f4bf4ff2ab4958c03b';
tronWeb = new TronWeb({
  fullHost: nileex,
  headers: { 'TRON-PRO-API-KEY': 'dd37e972-5ae9-4c31-8b77-76b96ac0d42a' },
  privateKey
});
// base58
const address = tronWeb.address.fromPrivateKey(privateKey);
console.log(address);
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
  <view>Tron</view>
</template>
