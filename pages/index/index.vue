<template>
	<view class="content">
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		async onLoad() {
			const res =  await this.$u.get('/api/index')
			// console.log(res)
			// console.log("111")
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
