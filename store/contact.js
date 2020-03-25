export const state = () => ({
  isContactModalOpen: false
})

export const mutations = {
  setIsContactModalOpen(state, isContactModalOpen) {
    state.isContactModalOpen = isContactModalOpen
  }
}
