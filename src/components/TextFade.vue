<script setup lang="ts">
	import { defineProps } from 'vue'
	
	defineProps({
		text: {
			type: String,
			default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
		},
		title: {
			type: String,
			default: 'Lorem Ipsum'
		}
	})

</script>

<template>
	<div class="textFade__container">
		<h2 class="textFade textFade__title" data-animation='text-reveal'>{{ title }}</h2>
		<p class="textFade textFade__text" data-animation="text-fade" data-bg-color="#cccccc" data-fg-color="#25205F">
			{{ text }}
		</p>
	</div>
</template>