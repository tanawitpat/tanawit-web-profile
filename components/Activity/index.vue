<template>
  <section class="section-activity">
    <div class="section-activity__container">
      <h1 class="heading-primary u-margin-bottom-big section-activity__heading">
        Activities
      </h1>
      <div class="section-activity__card">
        <div
          :key="activity.name"
          v-for="(activity, index) in activityData"
          :data-aos-delay="50 + index * 50"
          data-aos="fade-up"
        >
          <ActivityCard
            :title="activity.name"
            :issuer="activity.issuer"
            :previewImagePath="activity.previewImagePath"
            :description="activity.description"
            :year="activity.year"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ActivityCard from '@/components/Activity/ActivityCard'
import activityData from '@/assets/data/activity.json'

export default {
  name: 'SectionActivity',
  components: {
    ActivityCard
  },
  data() {
    return {
      activityData: activityData.data
    }
  }
}
</script>

<style scoped lang="scss">
.section-activity {
  padding: 10rem 5rem 25rem;
  margin-top: -10rem;
  background-color: $color-blue-dark;
  transform: skewY(-7deg);
  & > * {
    transform: skewY(7deg);
  }

  @include respond(tab-small) {
    padding: 10rem 3rem 15rem;
    margin-top: -2rem;
  }

  @include respond(tab-medium) {
    margin-top: -2rem;
  }

  &__container {
    max-width: 120rem;
    margin: auto;
  }

  &__heading {
    color: $color-white;
  }

  &__card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 5rem;

    @include respond(tab-small) {
      grid-gap: 3rem;
    }
  }
}
</style>
