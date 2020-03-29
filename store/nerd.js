export const state = () => ({
  selectedSkill: ''
})

export const mutations = {
  setSelectedSkill(state, selectedSkill) {
    state.selectedSkill = selectedSkill
  }
}
