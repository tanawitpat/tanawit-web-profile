<template>
  <div class="aboutme-content-dictionary">
    <h3>
      {{ title }}
    </h3>
    <p class="aboutme-content-dictionary__meaning">
      {{ description }}
    </p>
    <nuxt-link
      v-if="link"
      :to="link.path"
      class="aboutme-content-dictionary__technical-skill"
    >
      {{ link.label }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'AboutMeLayoutMeaning',
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
.aboutme-content-dictionary {
  h3 {
    font-size: 2.8rem;
    text-transform: uppercase;
    color: $color-primary;
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
