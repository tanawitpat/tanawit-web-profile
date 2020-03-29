<template>
  <section class="section-skill">
    <div class="section-skill__container">
      <div class="section-skill__detail"></div>
      <div>
        <div class="section-skill__navigator section-skill__frontend">
          <h2>Frontend Development</h2>
          <div class="section-skill__skill-card">
            <SkillCard name="JavaScript" level-color="green" />
            <SkillCard name="HTML" level-color="green" />
            <SkillCard name="SCSS" level-color="green" />
            <SkillCard name="React" level-color="green" />
            <SkillCard name="Vue" level-color="red" />
            <SkillCard name="GraphQL" level-color="orange" />
          </div>
        </div>
        <div class="section-skill__navigator section-skill__backend">
          <h2>Backend Development</h2>
          <div class="section-skill__skill-card">
            <SkillCard name="Go" level-color="orange" />
            <SkillCard name="Python" level-color="orange" />
            <SkillCard name="MySQL" level-color="orange" />
            <SkillCard name="MongoDB" level-color="orange" />
            <SkillCard name="Redis" level-color="orange" />
            <SkillCard name="RabbitMQ" level-color="orange" />
          </div>
        </div>
        <div class="section-skill__navigator section-skill__devops">
          <h2>DevOps</h2>
          <div class="section-skill__skill-card">
            <SkillCard name="Docker" level-color="orange" />
            <SkillCard name="Kubernetes" level-color="orange" />
            <SkillCard name="Jenkins" level-color="orange" />
            <SkillCard name="EC2" level-color="red" />
            <SkillCard name="S3" level-color="red" />
            <SkillCard name="Lambda" level-color="red" />
            <SkillCard name="Route 53" level-color="red" />
            <SkillCard name="Firebase" level-color="red" />
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
export default {
  components: {
    TriangleFooter,
    SkillCard
  }
}
</script>

<style scoped lang="scss">
.section-skill {
  background-color: $color-black;
  padding: 5rem 20rem 15rem;
  position: relative;

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
  }

  &__detail {
    margin: auto;
    display: grid;
    grid-template-columns: 100px minmax(300px, 1fr);
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
    }
  }

  &__navigator {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 3.2rem;
      background-image: $color-gradient-primary;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }
  }

  &__skill-card {
    display: flex;
    flex-wrap: wrap;
  }

  &__triangle-footer {
    border-color: transparent transparent $color-grey-dark-1 transparent;
  }
}
</style>
