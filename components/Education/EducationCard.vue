<template>
  <div class="education-card">
    <h3 class="education-card__school-name">
      <a :href="schoolLink">{{ schoolName }}</a>
    </h3>
    <p class="education-card__degree">{{ degree }}</p>
    <p class="education-card__honors">{{ honor }}</p>
    <p class="education-card__duration">{{ duration }}</p>
    <a :href="schoolLink">
      <img
        :src="require(`@/assets/${schoolLogoPath}`)"
        :alt="schoolName + ' logo'"
        class="education-card__school-logo"
      />
    </a>
    <ul class="education-card__description">
      <li v-for="description in descriptions" v-bind:key="description">
        {{ description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    schoolName: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    honor: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    schoolLogoPath: {
      type: String,
      required: true
    },
    schoolLink: {
      type: String,
      required: true
    },
    descriptions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.education-card {
  position: relative;
  background-color: rgba($color-white, 0.7);
  border-radius: 20px;
  padding: 3rem 5rem;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0.5rem 1rem 1.5rem rgba(black, 0.1);
  }

  @include respond(medium) {
    padding: 2rem 3rem;
    border-radius: 15px;
  }

  &__position {
    color: $color-primary;
  }

  &__school-name {
    color: $color-primary;
    & > * {
      text-decoration: none;
      color: $color-primary;
    }
  }

  &__degree {
    font-weight: 700;
    color: $color-secondary;
  }

  &__honors {
    font-weight: 700;
    color: $color-grey-dark-2;
  }

  &__duration {
    margin-bottom: 10px;
  }

  &__school-logo {
    position: absolute;
    top: 3rem;
    right: 4rem;

    @include respond(medium) {
      display: none;
    }
  }

  &__description {
    margin-left: 3rem;

    @include respond(small) {
      margin-left: 2rem;
    }
  }
}
</style>
