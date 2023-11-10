<script setup lang="ts">
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Service from '../components/Service.vue'
import TextSection from '../components/TextSection.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
</script>

<template>
  <Header />
  <Hero />
  <div data-section="service">
    <TextSection id="service" title="PAO et imprimerie" text="Le Groupe ESP intègre une équipe dédiée à la conception et à l'impression. Qu'il s'agisse de vos besoins en supports de papeterie classique (têtes de lettres, cartes de visite, enveloppes, pochettes et chemises à rabats, etc.) ou de communication plus ciblée (flyers, affiches, dépliants, brochures, calendriers, etc.), nous réalisons tous types de documents, imprimés et façonnés sur notre chaîne d'impression numérique professionnelle." />
    <Service />
  </div>
  <div data-section="about">
    <TextSection id="about" title="Pourquoi nous ?" text="À peine sortis de notre chaîne de fabrication, nous prenons en charge la mise sous pli, sous enveloppe ou sous film des documents destinés à une diffusion par La Poste. Notre équipement couvre l'ensemble de vos besoins, du simple envoi de courrier au routage de maga-zine, tout en réalisant également l'assemblage et/ou l'insertion des documents multiples. Nous assurons ensuite le dépôt en poste pour l'expédition, selon les normes postales en vigueur au tarif préférentiel routeur." />
    <About />
  </div>
  <Contact />
</template>
