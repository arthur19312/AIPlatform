<template>
	<view class="container">
		<!-- logo / 标题 -->
		<view class="topbar">
			<text>智慧云创</text>
			<text>💌</text>
		</view>
		
		<!-- 展示栏 -->
		<view class="content">
			
			<view class="tab-cur">
				<image src="../../static/image/1.png" class="tab-img"></image>
			</view>
			<view class="tab">
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.container{
		margin: 0;
		padding: 0 40rpx;
	}
	.topbar{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 120rpx;
		line-height: 120rpx;
		font-size: 40rpx;
		font-weight: bold;
	}
	.content{
		
	}
	
	.tab-cur{
		
	}
	.tab{
		
	}
	.tab-img{
		width: 400rpx;
		height: 400rpx;
		border-radius: 6px;
	}
</style>
