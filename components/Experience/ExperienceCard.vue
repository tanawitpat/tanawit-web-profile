<template>
  <div class="experience-card">
    <h3 class="experience-card__position">{{ title }}</h3>
    <a :href="companyLink" class="experience-card__company-name">{{
      companyName
    }}</a>
    <p class="experience-card__duration">{{ duration }}</p>
    <a :href="companyLink">
      <img
        :src="companyLogoPath"
        :alt="companyName + ' logo'"
        class="experience-card__company-logo"
      />
    </a>
    <p class="experience-card__description">{{ description }}</p>
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
      type: String,
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
  background-color: rgba($color-white, 0.7);
  border-radius: 20px;
  padding: 3rem 5rem;
  transition: all 0.2s;
  font-size: 1.6rem;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0.5rem 1rem 1.5rem rgba($color-black, 0.1);
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
    color: $color-primary;
  }

  &__company-name {
    font-weight: 700;
    color: $color-secondary;
    text-decoration: none;
  }

  &__duration {
    margin-bottom: 10px;
  }

  &__company-logo {
    position: absolute;
    top: 4rem;
    right: 4rem;

    @include respond(tab-medium) {
      display: none;
    }
  }
}
</style>
