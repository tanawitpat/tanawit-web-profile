<template>
  <section id="section-aboutme" class="section-aboutme">
    <h1 class="heading-primary u-margin-bottom-medium section-aboutme__heading">
      About Me
    </h1>
    <div class="section-aboutme__content">
      <div class="section-aboutme__content__image">
        <transition name="fade">
          <AboutMeContentName v-if="selectedAboutMeContent === 'name'" />
          <AboutMeContentLocation
            v-else-if="selectedAboutMeContent === 'location'"
          />
          <AboutMeContentDeveloper
            v-else-if="selectedAboutMeContent === 'developer'"
          />
          <AboutMeContentBirth v-else-if="selectedAboutMeContent === 'birth'" />
          <AboutMeContentEducation
            v-else-if="selectedAboutMeContent === 'education'"
          />
        </transition>
      </div>
      <div class="section-aboutme__content__navigator">
        <AboutMeNavigatorCard
          v-for="aboutme in aboutMeData"
          :key="aboutme.id"
          :title="aboutme.title"
          :content="aboutme.content"
          :id="aboutme.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AboutMeNavigatorCard from '@/components/AboutMe/AboutMeNavigatorCard'
import AboutMeContentName from '@/components/AboutMe/AboutMeContentName'
import AboutMeContentLocation from '@/components/AboutMe/AboutMeContentLocation'
import AboutMeContentDeveloper from '@/components/AboutMe/AboutMeContentDeveloper'
import AboutMeContentEducation from '@/components/AboutMe/AboutMeContentEducation'
import AboutMeContentBirth from '@/components/AboutMe/AboutMeContentBirth'
import aboutMeData from '@/assets/data/aboutme.json'

export default {
  name: 'SectionAboutMe',
  components: {
    AboutMeNavigatorCard,
    AboutMeContentName,
    AboutMeContentLocation,
    AboutMeContentDeveloper,
    AboutMeContentBirth,
    AboutMeContentEducation
  },
  data() {
    return {
      aboutMeData: aboutMeData.data
    }
  },
  computed: {
    selectedAboutMeContent() {
      return this.$store.state.aboutme.selectedAboutMeContent
    }
  },
  methods: {
    setSelectedAboutMeContent(newSelectedAboutMeContent) {
      this.$store.commit(
        'aboutme/setSelectedAboutMeContent',
        newSelectedAboutMeContent
      )
    }
  }
}
</script>

<style scoped lang="scss">
.section-aboutme {
  background-color: $color-blue-dark;
  background-position: right top;
  background-size: cover;
  padding: 10rem 10rem 22.5rem;
  color: $color-white;
  font-size: 1.8rem;

  @include respond(tab-large) {
    font-size: 2rem;
    padding: 10rem 5rem 25rem;
  }

  @include respond(tab-small) {
    font-size: 2rem;
    padding: 10rem 3rem 15rem;
  }

  &__heading {
    color: $color-white;
  }

  &__content {
    text-align: center;
    max-width: 120rem;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @include respond(desktop) {
      grid-template-columns: 1fr;
    }

    .fade-enter-active {
      transition: opacity 1.5s;
    }
    .fade-enter {
      opacity: 0;
    }

    &__image {
      height: 100%;

      @include respond(desktop) {
        display: none;
      }
    }

    &__navigator {
      cursor: default;
      margin: 0 auto;
      padding: 6rem 0;
      display: grid;
      grid-template-columns: max-content;

      > * {
        padding: 1.5rem 0;
      }

      @include respond(tab-small) {
        padding: 0rem 0;
      }
    }
  }
}
</style>
