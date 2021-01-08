<template>
  <section id="section-experience" class="section-experience">
    <div class="section-experience__heading u-margin-bottom-big">
      <h2 class="heading-primary">
        My Work Experience
      </h2>
      <p>
        From a business intern to a software developer
      </p>
    </div>
    <div class="section-experience__card">
      <div
        v-for="item in experienceData"
        :key="item.duration"
        data-aos="fade-up"
      >
        <ExperienceCard
          :title="item.title"
          :company-name="item.companyName"
          :duration="item.duration"
          :company-link="item.companyLink"
          :description="item.description"
          :company-logo-path="item.companyLogoPath"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ExperienceCard from '@/components/Homepage/Experience/ExperienceCard'
import experienceData from '@/assets/data/experience.json'

export default {
  name: 'SectionExperience',
  components: {
    ExperienceCard
  },
  data() {
    return {
      experienceData: experienceData.data
    }
  }
}
</script>

<style scoped lang="scss">
.section-experience {
  padding: 7.5rem 10rem;
  position: relative;
  background-color: $color-grey-light-2;

  display: grid;
  grid-template-columns: 1fr minmax(30%, 75rem) 1fr;

  @include respond(tab-medium) {
    padding: 7.5rem 5rem;
  }

  @include respond(tab-small) {
    padding: 7.5rem 3rem;
  }

  &__heading {
    grid-column: 1 / -1;

    h2 {
      color: $color-primary;
      margin: auto;
      margin-bottom: 1.2rem;
    }

    p {
      color: $color-grey-dark-3;
      font-size: 1.8rem;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  &__card {
    grid-column: 2 / 3;

    > * {
      &:not(:last-child) {
        margin-bottom: 3rem;
      }
    }
  }
}
</style>
