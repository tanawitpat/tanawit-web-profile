<template>
  <div class="aboutme-content-dictionary">
    <h1>
      {{ word }}
    </h1>
    <p>
      {{ meaning }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMeLayoutMeaning',
  props: {
    word: {
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
  }
}
</style>
