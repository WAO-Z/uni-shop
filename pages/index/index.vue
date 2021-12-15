<template>
	<view>
		<u-swiper :list='slides' img-mode="widthFix" height="320" name="img_url"></u-swiper>
		<view class="u-text-center u-m-t-30">
			<u-tabs :list="sortList" bar-width="100" item-width="160" :current="currentSort" @change="changeSort">
			</u-tabs>
		</view>
		<u-row class="u-skeleton" gutter="16">
			<u-col span="6" v-for="goods in goodsList.length !==0 ? goodsList : [{},{},{},{}]">

				<goods-card :goods="goods"></goods-card>

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
				goodsList: [],
				loading: false
			}
		},

		onLoad() {
			this.$u.utils.isLogin()
			this.getData()

		},
		methods: {
			changeSort(index) {
				console.log(index)
				this.currentSort = index
				//重置商品数据和分页
				this.goodsList = []
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
				this.goodsList = [...this.goodsList, ...res.goods.data]
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
</style>
