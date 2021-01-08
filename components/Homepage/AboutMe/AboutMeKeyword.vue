<template>
  <div class="aboutme-keyword">
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ description }}
    </p>
    <div v-if="link" class="aboutme-keyword__technical-skill">
      <nuxt-link v-if="link.isInternalPath" :to="link.path">
        {{ link.label }}
      </nuxt-link>
      <a v-if="!link.isInternalPath" :href="link.path">
        {{ link.label }}
      </a>
    </div>
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
    a {
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
}
</style>
