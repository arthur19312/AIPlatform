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
					<u-steps :list="stepList" :current="nowStep" active-color="#fe708e"  mode="number"></u-steps>
				</view>
				<view v-if="nowStep === -1">
					<view style="margin-top: 60rpx;">
						<image :src="mainpicExampleSrc" class="mainpic-example" mode="aspectFill"></image>
					</view>
					
					<view class="main-btn-line">
						<button :class="isUploaded?'upload-btn-sm':'upload-btn'" class="main-btn-trans" @click="chooseImg"> {{uploadText}} </button>
						
							<button :class="isUploaded?'next-btn':'next-btn-sm'" class="main-btn-trans" @click="nextStep"> {{isUploaded?'下一步':''}} </button>
					</view>
				</view>
				
				<view v-if="nowStep === 0">
					<view style="margin-top: 60rpx;">
						<u-upload ref="uUpload" :action="action" :file-list="fileList" :max-size="5 * 1024 * 1024" max-count="30" :auto-upload="false"></u-upload>
					</view>
					<view class=".main-btn-line-column">
						<button class="main-btn" @click="submitMaterial"> 提交素材图 </button>
						
							<button class="main-btn-sub" @click="lastStep"> 返回上一步 </button>
					</view>
				</view>
				
				<view v-if="nowStep === 1">
					<view style="margin-top: 60rpx;">
						<u-line-progress active-color="#fa708e" :percent="70" :striped="true" :striped-active="true" :show-percent="true" :round="true"></u-line-progress>
					</view>
					<view class=".main-btn-line-column">
						<button class="main-btn" @click="submitMaterial"> 提交素材图 </button>
						
							<button class="main-btn-sub" @click="lastStep"> 返回上一步 </button>
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
				nowStep: -1,
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
				action: 'http://www.example.com/upload',
				materialPicList:[]
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
						                console.log(image);
										this.mainpicExampleSrc =  res.tempFilePaths[0];
										this.uploadText = '重新上传'
										this.isUploaded = true;
										
										
						            }
						        });
				    }
				});
			},
			
			nextStep: function(){
				if(this.nowStep<4){
					
					this.nowStep++;
				}
			},
			lastStep: function(){
				if(this.nowStep>-1){
					
					this.nowStep--;
				}
			},
			submitMaterial: function(){
								// 通过filter，筛选出上传进度为100的文件(因为某些上传失败的文件，进度值不为100，这个是可选的操作)
								this.materialPicList = this.$refs.uUpload.lists.filter(val => {
									return val.progress == 100;
								})
								
								
								console.log(this.materialPicList)
							//this.$refs.uUpload.upload();
							
							this.nowStep++;
						},
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
		margin-top: 40rpx;
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
			
			.main-btn-line-column{
				display: flex;
							flex-direction: column;
							margin-top: 20rpx;
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
			
			.main-btn{
				
				border: 0;
				background-color: #fa708e;
				color: #fff;
			}
			.main-btn-sub{
				border: fa708e;
				background-color: #fff;
				color: #fa708e;
				border: 1rpx solid #fa708e;
				margin-top: 20rpx;
			}
			
			.main-btn,.main-btn-sub{
				outline: none;
				width: 675rpx;
				height: 80rpx;
				border-radius: 80rpx;
				line-height: 80rpx;
			}
</style>
