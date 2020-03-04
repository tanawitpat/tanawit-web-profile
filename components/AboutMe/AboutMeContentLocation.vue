<template>
  <div class="aboutme-content-location center-vertical">
    <AboutMeLayoutMeaning
      word="Bangkok"
      meaning="A capital city of Thailand and the city where Tanawit grew up and has been
      living."
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentLocation',
  components: {
    AboutMeLayoutMeaning
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-location {
  padding: 0 8rem;
  height: 100%;
  text-align: left;
  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }
}
</style>
