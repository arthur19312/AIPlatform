<template>
	<view class="container">
		<!-- logo / 标题 -->
		<view class="topbar">
			<text>回忆拼图</text>
			<view>
				<image src="../../static/iconfont/tip.png" class="tip-btn"></image>
			</view>
		</view>
		
		<view class="subbar">
			slogan阿巴阿巴啊啊爸爸啊啊
		</view>

		<!-- 展示栏 -->
		<view class="content">

			<view>
					<u-steps :list="stepList" :current="-1" active-color="#fe708e"  mode="number"></u-steps>
				</view>
				
				<view style="margin-top: 60rpx;">
					<image :src="mainpicExampleSrc" class="mainpic-example" mode="aspectFill"></image>
				</view>
				
				<view class="main-btn-line">
					<button :class="isUploaded?'upload-btn-sm':'upload-btn'" class="main-btn-trans" @click="chooseImg"> {{uploadText}} </button>
					
						<button :class="isUploaded?'next-btn':'next-btn-sm'" class="main-btn-trans" @click="chooseImg"> {{isUploaded?'下一步':''}} </button>
				</view>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				stepList: [{
									name: '上传一张主图'
								}, {
									name: '上传多张素材图'
								}, {
									name: '合成回忆拼图'
								}
							],
				mainpicExampleSrc:'../../static/iconfont/tip.png',
				mainpic:'',
				uploadText:'点击上传主图',
				isUploaded:false,
				
			}
		},
		onLoad() {

		},
		methods: {
			chooseImg: function(){
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success:  (res)=> {
				        console.log(JSON.stringify(res.tempFilePaths));
						this.mainpic =  res.tempFilePaths[0];
						uni.getImageInfo({
						            src: res.tempFilePaths[0],
						            success:  (image)=> {
						                console.log(image.width);
						                console.log(image.height);
										this.mainpicExampleSrc =  res.tempFilePaths[0];
										this.uploadText = '重新上传'
										this.isUploaded = true;
										
										
						            }
						        });
				    }
				});
			}
		}
	}
</script>

<style>
	.container {
		margin: 0;
		padding: 0 40rpx;
	}

	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 36rpx;
		font-weight: bold;
		color: #444;
	}
	
	.subbar{
		height: 40rpx;
		line-height: 40rpx;
		font-size: 26rpx;
		color: #888;
	}

	.content {
		margin-top: 80rpx;
	}
	
	.tip-btn{
		width: 60rpx;height: 60rpx;position: relative;top: 14rpx;
	}

	.mainpic-example{
		width: 100%;
		}
		
		.main-btn-line{
			display: flex;
						flex-direction: row;
						justify-content: space-between;
			position: fixed;
			z-index: 10;
			bottom: 60rpx;
			}
			
			.upload-btn{
				outline: none;
				border: 0;
				background-color: #fa708e;
				color: #fff;
				height: 80rpx;
				width: 675rpx;
				border-radius: 80rpx;
			}
			
			.upload-btn-sm{
				width: 325rpx;
				outline: none;
				border: fa708e;
				background-color: #fff;
				color: #fa708e;
				height: 80rpx;
				border-radius: 80rpx;
				border: 1rpx solid #fa708e;
				margin-right: 40rpx;
			}
			
			.next-btn{
				outline: none;
				border: 0;
				background-color: #fa708e;
				color: #fff;
				width: 325rpx;
				height: 80rpx;
				border-radius: 80rpx;
			}
			
			.next-btn-sm{
				width: 0;
				background: #fff;
				outline: none;
				
				border: 0;
			}
			button::after{
				
				border: 0;
			}
			
			.main-btn-trans{
				transition: width ease 0.6s;
				line-height: 80rpx;
			}
			
</style>
