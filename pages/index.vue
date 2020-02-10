<template>
  <div class="container">
    <SectionHome />
    <SectionAboutMe />
    <SectionSkill />
  </div>
</template>

<script>
import SectionHome from '@/components/Home'
import SectionAboutMe from '@/components/AboutMe'
import SectionSkill from '@/components/Skill'

export default {
  components: {
    SectionHome,
    SectionAboutMe,
    SectionSkill
  }
}
</script>
