<template>
  <section class="section-activity">
    <div class="section-activity__container">
      <h1 class="heading-primary u-margin-bottom-big section-activity__heading">
        Activities
      </h1>
      <div class="section-activity__card">
        <div
          :key="activity.name"
          v-for="activity in activityData"
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
  padding: 10rem 5rem;
  padding-top: 20rem;
  margin-top: -10rem;
  background-color: $color-blue-dark;

  @include respond(tab-small) {
    padding: 15rem 3rem 10rem;
    margin-top: -5rem;
  }

  @include respond(tab-medium) {
    padding-top: 15rem;
    margin-top: -5rem;
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
