<template>
  <section class="section-skill">
    <div class="section-skill__container">
      <div class="section-skill__container--left">
        <div v-if="selectedSkill">
          <div :key="selectedSkill.name" class="section-skill__detail">
            <img
              :src="selectedSkill.imagePath"
              :alt="selectedSkill.name"
              rel="preload"
            />
            <div class="section-skill__detail__name-proficiency">
              <div
                :style="{ 'background-color': selectedSkill.levelColor }"
                class="section-skill__level-label"
              />
              <h3>{{ selectedSkill.name }}</h3>
              <p>{{ selectedSkill.proficiency }}</p>
            </div>
          </div>
        </div>
        <div v-else class="section-skill__default-detail">
          Select options on the right to view skill details
        </div>
      </div>
      <div class="section-skill__container--right">
        <div
          :key="skillCategory.name"
          v-for="skillCategory in skillCategories"
          class="section-skill__navigator section-skill__frontend"
        >
          <h3>{{ skillCategory.category }}</h3>
          <div
            @mouseleave="clearSlectedSkill()"
            class="section-skill__skill-card"
          >
            <SkillCard
              :key="skill.name"
              v-for="skill in skillCategory.skills"
              :name="skill.name"
              :level-color="skill.levelColor"
            />
          </div>
        </div>
      </div>
    </div>
    <TriangleFooter class="section-skill__triangle-footer" />
  </section>
</template>

<script>
import TriangleFooter from '@/components/TriangleFooter'
import SkillCard from '@/components/Nerd/Skill/SkillCard'
import skillData from '@/assets/data/skills.json'

export default {
  components: {
    TriangleFooter,
    SkillCard
  },
  data() {
    return {
      skillCategories: skillData.data,
      skills: skillData.data.reduce(
        (accumulator, currentValue) => [...accumulator, ...currentValue.skills],
        []
      )
    }
  },
  computed: {
    selectedSkillName() {
      return this.$store.state.nerd.selectedSkill
    },
    selectedSkill() {
      return this.skills.find((skill) => skill.name === this.selectedSkillName)
    }
  },
  mounted() {
    this.preloadSkillImages()
  },
  methods: {
    clearSlectedSkill() {
      this.$store.commit('nerd/setSelectedSkill', '')
    },
    preloadSkillImages() {
      this.skills.forEach((skill) => {
        if (skill.imagePath) {
          const img = new Image()
          img.src = skill.imagePath
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.section-skill {
  background-color: $color-grey-dark-2;
  padding: 5rem 7.5rem 15rem;
  position: relative;

  @include respond(tab-large) {
    padding: 5rem 10rem 15rem;
  }

  @include respond(tab-small) {
    padding: 5rem 3rem 10rem;
  }

  &__container {
    margin: auto;
    max-width: $max-width;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;

    @include respond(tab-large) {
      grid-template-columns: repeat(1, 1fr);
    }

    &--left {
      display: flex;
      justify-content: center;
      align-items: center;

      @include respond(tab-large) {
        display: none;
      }
    }
  }

  &__level-label {
    height: 1rem;
    width: 4rem;
    background-color: orange;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  &__default-detail {
    color: $color-grey-light-1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__detail {
    margin: auto;
    display: grid;
    grid-template-columns: 100px minmax(210px, 1fr);
    grid-gap: 3rem;
    color: $color-white;

    img {
      background-color: $color-white;
      border-radius: 2rem;
      width: 100%;
    }

    h3 {
      font-size: 2.4rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 0;
    }

    &__name-proficiency {
      margin: auto 0;
    }
  }

  &__navigator {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    h3 {
      font-size: 2.8rem;
      background-image: $color-gradient-primary;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    @include respond(tab-large) {
      text-align: center;
    }
  }

  &__skill-card {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.6rem;

    @include respond(tab-large) {
      justify-content: center;
    }
  }

  &__triangle-footer {
    border-color: transparent transparent $color-grey-dark-1 transparent;
  }
}
</style>
