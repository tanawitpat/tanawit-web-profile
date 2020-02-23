<template>
  <div class="aboutme-content-dictionary">
    <h1>
      {{ word }}<span>({{ partOfSpeech }})</span>
    </h1>
    <p>
      {{ meaning }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMeContentDictionary',
  props: {
    word: {
      type: String,
      required: true
    },
    partOfSpeech: {
      type: String,
      required: true
    },
    meaning: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.aboutme-content-dictionary {
  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
    span {
      margin-left: 1rem;
      font-size: 2rem;
    }
  }
}
</style>
