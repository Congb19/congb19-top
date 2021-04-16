<template>
	<img alt="logo" width="200" src="../assets/klee.jpeg" />
	<h1>你在烦恼什么</h1>
	<h2>这里是congb19的小站！大家要天天开心</h2>
	<li><a href="https://blog.congb19.top">我的博客</a></li>
	<li><a href="https://docs.congb19.top">我的文档站</a></li>
	<div class="beian">
		<a href="http://beian.miit.gov.cn">浙ICP备20007944号-1</a>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			required: true,
		},
	},
	setup: () => {
		const count = ref(0);
		return { count };
	},
});
</script>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}

.beian {
	position: fixed;
	/* left: 50%; */
	width: 100%;
	bottom: 20px;
}
</style>
