<script setup lang="ts">
	import { defineProps } from 'vue'
	import TextFade from './TextFade.vue'
	// import ImageMultiply from './ImageMultiply.vue'

	const props = defineProps({
		text: {
			type: String,
			default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
		},
		title: {
			type: String,
			default: 'Lorem Ipsum'
		},
		id: {
			type: String,
		}
	})

</script>

<template>
	<section class="section section--small--margin" :id=props.id>
		<div class="container">
			<div class="textSection section--small--padding">
				<TextFade :title=props.title :text=props.text />
				<div class="textSection__img" data-animation="parallax-image" data-popup="fade-up">
					<!-- <ImageMultiply src="./src/assets/imgholder.jpg" alt="print image"/> -->
					<img src="../assets/imgholder.jpg" alt="print image">
				</div>
			</div>
		</div>
	</section>
</template>