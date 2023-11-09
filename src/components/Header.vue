<script setup lang="ts">
	function g_scroll(section:string) {
		let sectionEl = document.querySelector(section);
		if (sectionEl instanceof Element) { // type guard to ensure sectionEl is not null
			scrollTo({
				top: (sectionEl as HTMLElement).offsetTop,
				behavior: "smooth",
			});
		}
	}
</script>

<template>
	<div class="header container">
		<div class="header__logo col-1--span-1"><img src="../assets/logo.webp" alt="esp routage logo"></div>
		<div class="header__links col-4--span-6">
			<a id="nav-hero" @click="g_scroll('#hero')">
				<p class="header__links__item">Accueil</p>
			</a>
			<a id="nav-service" @click="g_scroll('#services')">
				<p class="header__links__item">Services</p>
			</a>
			<a id="nav-about" @click="g_scroll('#about')">
				<p class="header__links__item">Qui sommes nous</p>
			</a>
			<a id="nav-contact" @click="g_scroll('#contact')">
				<p class="header__links__item">Contact</p>
			</a>
		</div>
		<a href="#" class="button header__button button--dark button--fx col-11--span-2" data-delay="0.5" data-animation="button">
			<span>
				<span>Postuler</span>
			</span>
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M247.539-268.461 220-296l403.231-404H251.538v-40h440.001v440h-40.001v-371.692L247.539-268.461Z"/></svg>
		</a>
	</div>
</template>