<template>
	<div>
	 <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
		<h2>{{msg}}</h2><hr>
		<h2>{{$store.state.a.count}}</h2><hr>
		<h3>{{count}}</h3><hr>
		<h3>{{$route.params.name}}</h3><hr>
		<p>
			<button @click="$store.commit('add',10)">+</button>	
			<button @click="reduce(10)">-</button>	
		</p>
		<p>
			<button @click="addAction">+</button>	
			<button @click="reduceAction">-</button>	
		</p>
	</div>
</template>
<script>
	import store from '@/vuex/store';
	import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
	export default {
		data(){
			return{
				msg:'hello Vuex'
			}
		},
		computed:{
			...mapState(['count']),
			...mapGetters(['count']),
			// count(){
			// 	return this.$store.getters.count;
			// }
		},
		methods:{
			...mapMutations(['add','reduce']),
			...mapActions(['addAction','reduceAction']),
		},
		store
	}
</script>