<script setup lang="ts">
	// import ImageMultiply from './ImageMultiply.vue'
</script>

<template>
	<section class="section section--small--padding" id="services">
		<div class="container">
			<div class="services">
				<div class="services__left" data-animation="parallax-image" data-popup="popup">
					<!-- <ImageMultiply src="./src/assets/imgholder.jpg" alt="print image"/> -->
					<img src="../assets/imgholder.webp" alt="print image">
				</div>
				<div class="services__content">
					<h2 class="services__content__title" data-animation='text-reveal'>Nos Services </h2>
					<div class="services__content__container">
						<div class="services__content__container__service">
							<h3 class="services__content__container__service__title" data-delay="" data-animation='button'><span><span>Impression Numérique</span></span></h3>
							<p class="services__content__container__service__desc" data-animation='text-reveal'>De la carte de visite à l'affiche grand format, en couleur ou noir & blanc, réalisées sur une chaîne d'impression numérique professionnelle.</p>
						</div>
						<div class="services__content__container__service">
							<h3 class="services__content__container__service__title" data-animation='button'><span><span>Conception Graphique / PAO</span></span></h3>
							<p class="services__content__container__service__desc" data-animation='text-reveal'>Création et exécution graphique pour divers supports, y compris têtes de lettres, cartes de visite, enveloppes, flyers, affiches, brochures, etc.</p>
						</div>
						<div class="services__content__container__service">
							<h3 class="services__content__container__service__title" data-animation='button'><span><span>Traitement de Fichiers</span></span></h3>
							<p class="services__content__container__service__desc" data-animation='text-reveal'>Assemblage, dédoublonnage, mise aux normes postales.</p>
						</div>
						<div class="services__content__container__service">
							<h3 class="services__content__container__service__title" data-animation='button'><span><span>Mise Sous Film/Enveloppe</span></span></h3>
							<p  data-animation='text-reveal' class="services__content__container__service__desc">Emboîtage des documents dans du film ou des enveloppes.</p>
						</div>
						<div class="services__content__container__service">
							<h3 class="services__content__container__service__title" data-animation='button'><span><span>Façonnage</span></span></h3>
							<p class="services__content__container__service__desc" data-animation='text-reveal'>Incluant tous types de pliages, piqûre métal, dos carré-collé, etc.</p>
						</div>
						<div class="services__content__container__service">
							<h3 class="services__content__container__service__title" data-animation='button'><span><span>Dépôt Postal</span></span></h3>
							<p class="services__content__container__service__desc" data-animation='text-reveal'>Gestion de l'envoi des documents.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>