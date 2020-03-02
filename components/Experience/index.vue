<template>
  <section class="section-experience">
    <h1 class="heading-primary u-margin-bottom-big section-experience__heading">
      Experience
    </h1>
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
  </section>
</template>

<script>
import ExperienceCard from '@/components/Experience/ExperienceCard'
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
  padding: 10rem 10rem 25rem;
  position: relative;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-grey-light-1, 0.9),
      rgba($color-white, 0.9)
    ),
    url('/images/experience-bg.jpg');
  background-position: center 35%;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr minmax(30%, 80rem) 1fr;
  transform: skewY(-7deg);
  margin-top: -15rem;

  & > * {
    transform: skewY(7deg);
  }

  @include respond(tab-medium) {
    padding: 10rem 5rem;
  }

  @include respond(tab-small) {
    padding: 10rem 3rem;
    margin-top: -5rem;
  }

  &__heading {
    color: $color-primary;
    grid-column: 1 / -1;
    :hover {
      transform: skewY(7deg);
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
