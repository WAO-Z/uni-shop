<template>
	<view>
		<u-swiper :list='slides' img-mode="widthFix" height="320" name="img_url"></u-swiper>
		<view class="u-text-center u-m-t-30">
			<u-tabs :list="sortList" bar-width="100" item-width="160" :current="currentSort" @change="changeSort">
			</u-tabs>
		</view>
		<u-row class="u-skeleton" gutter="16">
			<u-col span="6" v-for="item in goods.length !==0 ? goods : 6">

				<navigator class="goods-item">
					<u-image class="u-skeleton-fillet" width='100%' height="300rpx" :src="item.cover_url">
					</u-image>
					<view class="title u-line-1 u-skeleton-fillet">
						{{item.title ? item.title : "商品名称" }}
					</view>
					<view class="u-flex u-row-between">
						<view class="price u-skeleton-fillet">
							¥ {{item.price}}
						</view>
						<view class="sales u-skeleton-fillet">
							销量：{{item.sales}}
						</view>
					</view>
				</navigator>

			</u-col>

		</u-row>
		<!--引用组件-->
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>

</template>

<script>
	export default {
		data() {
			return {
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
				currentSort: 0,
				slides: [],
				goods: [],
				loading: false
			}
		},

		onLoad() {
			this.getData()

		},
		methods: {
			changeSort(index) {
				console.log(index)
				this.currentSort = index
				//重置商品数据和分页
				this.goods = []
				this.page = 1
				this.getData()
			},
			//获取数据
			async getData() {
				this.loading = true
				const params = {
					page: this.page
				}
				//增加排序条件
				if (this.currentSort == 1) params.sales = 1
				if (this.currentSort == 2) params.recommend = 1
				if (this.currentSort == 3) params.new = 1
				const res = await this.$u.api.index(params)
				this.loading = false
				this.slides = res.slides
				this.goods = [...this.goods, ...res.goods.data]
			}
		},
		onReachBottom() {
			//重新请求数据，带上分页参数
			this.page = this.page + 1
			this.getData()
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
		width: 40%;
	}

	.sales {
		color: #888;
		width: 40%;
	}
</style>
