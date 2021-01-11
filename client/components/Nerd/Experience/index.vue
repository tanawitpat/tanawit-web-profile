<template>
  <section id="section-experience" class="section-experience">
    <h2 class="section-experience__heading heading-primary u-margin-bottom-big">
      My Software Development Experience
    </h2>
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
    <TriangleFooter class="section-experience__triangle-footer" />
  </section>
</template>

<script>
import TriangleFooter from '@/components/TriangleFooter'
import ExperienceCard from '@/components/Nerd/Experience/ExperienceCard'
import experienceData from '@/assets/data/dev-experience.json'

export default {
  name: 'SectionExperience',
  components: {
    TriangleFooter,
    ExperienceCard
  },
  data () {
    return {
      experienceData: experienceData.data
    }
  }
}
</script>

<style scoped lang="scss">
.section-experience {
  padding: 7.5rem 10rem 15rem;
  position: relative;
  background-color: $color-grey-dark-1;

  display: grid;
  grid-template-columns: 1fr minmax(30%, 75rem) 1fr;

  @include respond(tab-medium) {
    padding: 7.5rem 5rem 15rem;
  }

  @include respond(tab-small) {
    padding: 5rem 3rem 15rem;
  }

  &__heading {
    grid-column: 1 / -1;
    background-image: $color-gradient-primary;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: auto;
    margin-bottom: 1.2rem;
  }

  &__card {
    grid-column: 2 / 3;

    > * {
      &:not(:last-child) {
        margin-bottom: 3rem;
      }
    }
  }

  &__triangle-footer {
    border-color: transparent transparent $color-grey-dark-2 transparent;
  }
}
</style>
