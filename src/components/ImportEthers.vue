<script module="ethers" lang="renderjs">
let tronWeb
export default {
	mounted() {
		if (typeof window.ethers === 'function') {
			this.handleInitEthers()
		} else {
			// 动态引入较大类库避免影响页面展示
			const script = document.createElement('script')
			// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			script.src = 'static/ethers/ethers.umd.min.js'
    //  script.type="text/plain"
			script.onload = this.handleInitEthers.bind(this)
			document.head.appendChild(script)
		}
	},
	methods: {
		handleInitEthers() {
      console.log("ethers=",ethers.version);
			const masterNode =  ethers.utils.HDNode.fromSeed(
   ethers.utils.mnemonicToSeed(
    'ritual camera snap elite clog ice shop brave hedgehog common suggest script'
  )
);
// const masterNode = utils.HDNode.fromMnemonic(seed);
const standardEthereum = masterNode.derivePath(`m/44'/60'/0'/0/${0}`);
const privateHex = standardEthereum.privateKey.replace('0x', '');
console.log(privateHex);
const privateKey = "d2c553d2db7f270a3a8c2c6b7dd908600b76c21468150a23061f10e8442c9799";
console.log(privateKey === privateHex)
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
    <view>Ethers</view>
  </view>
</template>
