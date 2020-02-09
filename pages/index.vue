<template>
  <div class="container">
    <SectionHome />
    <SectionAboutMe />
    <SectionSkill />
  </div>
</template>

<script>
import SectionHome from '@/components/sections/Home'
import SectionAboutMe from '@/components/sections/AboutMe'
import SectionSkill from '@/components/sections/Skill'

export default {
  components: {
    SectionHome,
    SectionAboutMe,
    SectionSkill
  }
}
</script>
