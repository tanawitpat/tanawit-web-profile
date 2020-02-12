<template>
  <div class="container">
    <SectionHome />
    <SectionAboutMe />
    <SectionSkill />
    <SectionExperience />
    <SectionActivity />
    <SectionEducation />
  </div>
</template>

<script>
import SectionHome from '@/components/Home'
import SectionAboutMe from '@/components/AboutMe'
import SectionSkill from '@/components/Skill'
import SectionExperience from '@/components/Experience'
import SectionActivity from '@/components/Activity'
import SectionEducation from '@/components/Education'

export default {
  components: {
    SectionHome,
    SectionAboutMe,
    SectionSkill,
    SectionExperience,
    SectionActivity,
    SectionEducation
  }
}
</script>
