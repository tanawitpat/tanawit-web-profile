<template>
  <section id="section-experience" class="section-experience">
    <div class="section-experience__heading u-margin-bottom-big">
      <h2 class="heading-primary">My Software Development Experience</h2>
      <p>
        Frontend Developer | Machine Learning Engineer
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
          :companyName="item.companyName"
          :duration="item.duration"
          :companyLink="item.companyLink"
          :description="item.description"
          :companyLogoPath="item.companyLogoPath"
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
  data() {
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

    h2 {
      background-image: $color-gradient-primary;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: auto;
      margin-bottom: 1.2rem;
    }

    p {
      color: $color-grey-dark-4;
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

  &__triangle-footer {
    border-color: transparent transparent $color-grey-dark-2 transparent;
  }
}
</style>
