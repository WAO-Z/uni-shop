const install = (Vue, vm) => {
	/**
	 * 是否登陆
	 */
	const isLogin = () => {
		//如果没有token，跳转到登陆界面
		const token = vm.vuex_token
		if (!token) {
			//来自哪个页面
			const currentPate = getCurrentPages().pop()
			//获取页面路径和请求参数
			const {
				options,
				route
			} = currentPate
			//参数的key
			const optionKeys = Object.keys(options)
			let params = ''
			if (optionKeys.length !== 0) {
				params = optionKeys.reduce((pre, current) => {
					return `${pre}${current}=${options[current]}&`
				}, '?').slice(0, -1)
			}
			//缓存当前页，用于登陆或者注册之后的跳转
			uni.setStorageSync('back_url', route + params)

			vm.$u.toast('请登陆')
			setTimeout(() => {
				vm.$u.route({
					type: 'redirect',
					url: 'pages/auth/login',
				})
			}, 1500)
			return false
		}

		return true
	}
	vm.$u.utils = {
		isLogin
	}
}

export default {
	install
}
