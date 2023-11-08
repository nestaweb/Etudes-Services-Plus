<script setup lang="ts">
	import { defineProps } from "vue"

	const props = defineProps({
		src: {
			type: String,
			default: './'
		},
		alt: {
			type: String,
			default: 'img holder'
		}
	});
</script>

<template>
	<div class="image-multiply" data-animation='image-multiply'>
		<img :src=props.src :alt=props.alt>
		<img :src=props.src :alt=props.alt>
		<img :src=props.src :alt=props.alt>
		<img :src=props.src :alt=props.alt>
	</div>
</template>