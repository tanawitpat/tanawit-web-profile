export const state = () => ({
  selectedAboutMeContent: 'name'
})

export const mutations = {
  setSelectedAboutMeContent(state, selectedAboutMeContent) {
    state.selectedAboutMeContent = selectedAboutMeContent
  }
}
