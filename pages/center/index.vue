<template>
	<view class="content">
		个人中心页
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return 
			this.$u.utils.isLogin()
			
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>


</style>
