<template>
  <div class="aboutme-content-language center-vertical">
    <AboutMeContentDictionary
      word="English & Thai"
      meaning="Languages that Tanawit can understand. (He also understands JavaScript and Go.)"
    />
  </div>
</template>

<script>
import AboutMeContentDictionary from '@/components/AboutMe/AboutMeContentDictionary'

export default {
  name: 'AboutMeContentLanguage',
  components: {
    AboutMeContentDictionary
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
