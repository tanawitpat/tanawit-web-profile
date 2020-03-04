<template>
  <div class="aboutme-content-language center-vertical">
    <AboutMeLayoutMeaning
      word="English & Thai"
      meaning="Languages that Tanawit can understand. (He also understands JavaScript and Go.)"
    />
  </div>
</template>

<script>
import AboutMeLayoutMeaning from '@/components/AboutMe/AboutMeLayoutMeaning'

export default {
  name: 'AboutMeContentLanguage',
  components: {
    AboutMeLayoutMeaning
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-language {
  padding: 0 8rem;
  height: 100%;
  text-align: left;
  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }
}
</style>
