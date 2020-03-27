<template>
  <div class="aboutme-keyword">
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ description }}
    </p>
    <nuxt-link
      v-if="link"
      :to="link.path"
      class="aboutme-keyword__technical-skill"
    >
      {{ link.label }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AboutMeKeyword',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.aboutme-keyword {
  h3 {
    font-size: 2.8rem;
    text-transform: uppercase;
    color: $color-primary;
  }

  p {
    font-size: 1.8rem;
  }

  &__technical-skill {
    text-decoration: none;
    display: inline-block;
    margin-top: 2rem;
    color: $color-secondary;
    font-weight: 800;
    font-size: 1.6rem;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      border-bottom: 1px dotted;
    }
  }
}
</style>
