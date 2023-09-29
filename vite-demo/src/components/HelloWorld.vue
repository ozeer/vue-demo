<script setup>
import { ref } from "vue";

defineProps({
	msg: String,
});

const count = ref(0);
const items = ref([{ message: "Foo" }, { message: "Bar" }]);
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
	</div>

	<li v-for="item in items" :key="item">
		{{ item.message }}
	</li>
</template>
