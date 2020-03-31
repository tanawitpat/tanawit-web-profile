<template>
  <section class="section-skill">
    <div class="section-skill__container">
      <div v-if="selectedSkill" class="section-skill__detail__container">
        <div
          :key="skill.name"
          v-for="skill in selectedSkillDetail"
          class="section-skill__detail"
        >
          <img :src="skill.imagePath" :alt="skill.name" rel="preload" />
          <div class="section-skill__detail__name-proficiency">
            <div
              :style="{ 'background-color': skill.levelColor }"
              class="section-skill__level-label"
            />
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.proficiency }}</p>
          </div>
        </div>
      </div>
      <div v-else class="section-skill__default-detail">
        Select a skill on the right to see the skill details
      </div>
      <div>
        <div class="section-skill__navigator section-skill__frontend">
          <h2>Frontend Development</h2>
          <div
            @mouseleave="clearSlectedSkill()"
            class="section-skill__skill-card"
          >
            <SkillCard
              :key="skill.name"
              v-for="skill in frontendSkills"
              :name="skill.name"
              :level-color="skill.levelColor"
            />
          </div>
        </div>
        <div class="section-skill__navigator section-skill__backend">
          <h2>Backend Development</h2>
          <div
            @mouseleave="clearSlectedSkill()"
            class="section-skill__skill-card"
          >
            <SkillCard
              :key="skill.name"
              v-for="skill in backendSkills"
              :name="skill.name"
              :level-color="skill.levelColor"
            />
          </div>
        </div>
        <div class="section-skill__navigator section-skill__devops">
          <h2>DevOps</h2>
          <div
            @mouseleave="clearSlectedSkill()"
            class="section-skill__skill-card"
          >
            <SkillCard
              :key="skill.name"
              v-for="skill in devopsSkills"
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
      skills: skillData.data
    }
  },
  computed: {
    selectedSkill() {
      return this.$store.state.nerd.selectedSkill
    },
    selectedSkillDetail() {
      return this.skills.filter((skill) => skill.name === this.selectedSkill)
    },
    frontendSkills() {
      return this.skills.filter((skill) => skill.category === 'FRONTEND')
    },
    backendSkills() {
      return this.skills.filter((skill) => skill.category === 'BACKEND')
    },
    devopsSkills() {
      return this.skills.filter((skill) => skill.category === 'DEVOPS')
    }
  },
  methods: {
    clearSlectedSkill() {
      this.$store.commit('nerd/setSelectedSkill', '')
    }
  }
}
</script>

<style scoped lang="scss">
.section-skill {
  background-color: $color-grey-dark-1;
  padding: 5rem 20rem 15rem;
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
    grid-gap: 10rem;

    @include respond(tab-large) {
      grid-template-columns: repeat(1, 1fr);
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

    @include respond(tab-large) {
      display: none;
    }
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

    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__name-proficiency {
      margin: auto 0;
    }
  }

  &__navigator {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    h2 {
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

    @include respond(tab-large) {
      justify-content: center;
    }
  }

  &__triangle-footer {
    border-color: transparent transparent $color-grey-dark-0 transparent;
  }
}
</style>
