<template>
  <div class="experience-card">
    <h3 class="experience-card__position">{{ title }}</h3>
    <a
      :href="companyLink"
      :aria-label="companyName"
      class="experience-card__company-name"
      >{{ companyName }}</a
    >
    <p class="experience-card__duration">{{ duration }}</p>
    <a :href="companyLink" :aria-label="companyName">
      <img
        :src="companyLogoPath"
        :alt="companyName + ' logo'"
        class="experience-card__company-logo"
      />
    </a>
    <ul class="experience-card__description">
      <li :key="element" v-for="element in description">{{ element }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    companyLink: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    companyLogoPath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.experience-card {
  position: relative;
  background-color: $color-grey-dark-1;
  border-radius: 20px;
  padding: 3rem 5rem;
  transition: all 0.2s;
  font-size: 1.6rem;
  box-shadow: 0.5rem 1rem 1.5rem rgba($color-black, 0.04);

  &:hover {
    transform: scale(1.02);
  }

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  @include respond(tab-medium) {
    padding: 2rem 3rem;
    border-radius: 15px;
  }

  @include respond(mobile) {
    &:hover {
      transform: inherit;
      box-shadow: inherit;
    }
  }

  &__position {
    color: orangered;
  }

  &__company-name {
    font-weight: 700;
    color: $color-white;
    text-decoration: none;
    color: orange;
  }

  &__duration {
    margin-bottom: 10px;
    color: $color-white;
    font-weight: 700;
  }

  &__company-logo {
    position: absolute;
    top: 3.6rem;
    right: 4.5rem;

    @include respond(tab-medium) {
      display: none;
    }
  }

  &__description {
    color: $color-white;
    padding: 0 2rem 0;

    li {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
