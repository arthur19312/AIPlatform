<template>
	<view class="container">
		<!-- logo / 标题 -->
		<view class="topbar">
			<view>
				<image src="../../static/logo/1.png" class="logo"></image>
			</view>
			<view class="button-bar">
				<image src="../../static/iconfont/message.png" class="message-btn" ></image>
				
				
				<image src="../../static/iconfont/unfold.png" class="fold-btn" v-show="contentDisplay==='fold'" @click="contentDisplay='unfold'"></image>
				<image src="../../static/iconfont/fold.png"  class="fold-btn" v-show="contentDisplay==='unfold'" @click="contentDisplay='fold'"></image>
			</view>
		</view>

		<!-- 展示栏 -->
		<view class="content">
<view v-show="contentDisplay==='fold'">
	<u-swiper @click="navTo('/pages/puzzle/index')" :list="list" title="true" mode="round" indicator-pos="bottomCenter" effect3d="true" interval="3000" height="800" class="swipper"></u-swiper>
</view>
<view v-show="contentDisplay==='unfold'" style="text-align: center;padding: 0 40rpx;">
	<view v-for="item in list" style="margin-top: 40rpx;"  @click="navTo('/pages/puzzle/index')">
		<image :src="'../../'+item.image" class="unfold-image" mode="aspectFill"></image>
		<view class="unfold-text">{{item.title}}</view>
	</view>
</view>
			
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: [
					{
						image: '../../../static/image/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/2.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/3.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/4.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/5.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/6.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/7.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/8.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../../static/image/9.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					}
					
				],
				contentDisplay: 'fold'
			}
		},
		onLoad() {

		},
		methods: {
			navTo: (url)=>{
				uni.navigateTo({
				    url: url
				});
			}
		}
	}
</script>

<style>
	.container {
		margin: 0;
	}

	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 40rpx;
		font-weight: bold;
		margin-top: 10rpx;
		padding: 0 40rpx 0 30rpx;
	}
	
	.button-bar{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.logo{
		width: 320rpx;height: 60rpx;
	}
	
	.message-btn{
		width: 60rpx;height: 60rpx;position: relative;top: 10rpx;margin-right: 20rpx;
	}
	
	.fold-btn{
		width: 57rpx;height: 57rpx;position: relative;top: 11rpx;
	}

	.content {
		margin-top: 40rpx;
	}
	
	.swipper{
		position: absolute;z-index:5;top:50%;transform: translateY(-50%);width: 100%;
	}
	
	.unfold-image{
		width: 100%;border-radius: 16rpx;
	}
	
	.unfold-text{
		height: 60rpx;line-height: 60rpx;
	}

	.tab-cur {}

	.tab {}

	.tab-img {
		width: 400rpx;
		height: 400rpx;
		border-radius: 6px;
	}
</style>
