<template>
	<view>
		<u-swiper :list='imgList' img-mode="widthFix" height=""></u-swiper>
		<view class="u-text-center u-m-t-30">
			<u-tabs :list="sortList" bar-width="100" item-width="160" :current="currentSort" @change="changeSort">
			</u-tabs>
		</view>
		<u-row gutter="16">
			<u-col span="6" v-for="i in 12">

				<navigator class="goods-item">
					<u-image width='100%' height="300rpx"
						src="https://oss.shop.eduwork.cn//ad/2020-0820-5f3dfe7756215.png">
					</u-image>
					<view class="title">
						区块链
					</view>
					<view class="u-flex u-row-between">
						<view class="price">
							¥ 99
						</view>
						<view class="sales">
							销量：10
						</view>
					</view>
				</navigator>

			</u-col>

		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [
					'https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/feed-admin/27be9cbc8de68388612913cf84f976c1dbbf2c54.jpg@336w_190h_1c.jpg',
					'https://images.weserv.nl/?url=https://i1.hdslb.com/bfs/archive/b6e0daf6fb725ad2e010ce27c11d818ed0c10e79.png@336w_190h_1c.png'
				],
				sortList: [{
						name: '默认'
					},
					{
						name: '销量'
					},
					{
						name: '推荐'
					},
					{
						name: '最新'
					}
				],
				currentSort: 0
			}
		},

		async onLoad() {
			const data = {
				email: 'test@a.com',
				password: '123123'
			}
			// const res = this.$u.api.authLogin(data)
			// console.log(res)
			// console.log(this.vuex_version)
			// this.$u.vuex('vuex_name', 'Tom')
			// console.log(this.vuex_name)
		},
		methods: {
			changeSort(index) {
				this.currentSort = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		padding: 40rpx;
		margin-top: 30rpx;
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, .1);
	}

	.title {
		margin: 10rpx 0;
		font-weight: 500;
		font-size: 32rpx;
	}

	.price {
		color: red;
	}

	.sales {
		color: #888;
	}
</style>
