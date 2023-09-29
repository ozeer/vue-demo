<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<script>
export default {
	data() {
		return {
			num: 0,
			name: "Tome",
			msg: "<h2>Message</h2>",
		};
	},
	methods: {
		changeName: function () {
			this.name = "Jean";
		},
	},
};
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
		<p>{{ name }}</p>
		<p>{{ num }}</p>
		<p v-once>{{ name }}</p>
		<button @click="changeName">改变名字</button>
		<button @click="num++">num is {{ num }}</button>
		<p v-html="msg"></p>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
