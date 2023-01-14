<script setup lang="ts">
import { ref } from 'vue';
// import * as ethers from 'ethers';
// import TronWeb from 'tronweb';
// import tronwebUniapp from 'tronweb-uniapp';
// import Web3 from 'web3';
import ImportEthers from '@/components/ImportEthers.vue';
import ImportTron from '@/components/ImportTron.vue';
import ImportWeb3 from '@/components/ImportWeb3.vue';
console.log('========');
const title = ref('Hello');
// console.log('Web3', Web3.version);
// console.log('Web3', Web3);
// console.log('TronWeb=', TronWeb.version);
// console.log('tronwebUniapp=', tronwebUniapp);
// console.log('ethers=', ethers.version);
// console.log(ethers.utils);
// console.log(Web3.utils.toWei('1', 'ether'));
/* console.log(ethers.utils);
const masterNode = ethers.utils.HDNode.fromSeed(
  ethers.utils.mnemonicToSeed(
    'ritual camera snap elite clog ice shop brave hedgehog common suggest script'
  )
);
// const masterNode = utils.HDNode.fromMnemonic(seed);
const standardEthereum = masterNode.derivePath(`m/44'/60'/0'/0/${0}`);
const privateHex = standardEthereum.privateKey.replace('0x', '');
console.log(privateHex); */
</script>
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view>
      <import-ethers></import-ethers>
    </view>
    <view>
      <import-tron></import-tron>
    </view>
    <view>
      <import-web3></import-web3>
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
