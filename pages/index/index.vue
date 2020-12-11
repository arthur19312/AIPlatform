<template>
	<view class="container">
		<!-- logo / 标题 -->
		<view class="topbar">
			<text>智慧云创</text>
			<text>💌</text>
		</view>

		<!-- 展示栏 -->
		<view class="content">

			<u-swiper :list="list" mode="round" indicator-pos="bottomCenter" effect3d="true" interval="3000" height="800"></u-swiper>

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
						image: '../../static/image/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/2.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/3.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/4.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/5.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/6.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/7.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/8.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/9.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/image/10.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					}
					
				],
			}
		},
		onLoad() {

		},
		methods: {

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
		height: 300rpx;
		line-height: 300rpx;
		font-size: 40rpx;
		font-weight: bold;
		
		padding: 0 40rpx;
	}

	.content {
		margin-top: 60rpx;
	}

	.tab-cur {}

	.tab {}

	.tab-img {
		width: 400rpx;
		height: 400rpx;
		border-radius: 6px;
	}
</style>
