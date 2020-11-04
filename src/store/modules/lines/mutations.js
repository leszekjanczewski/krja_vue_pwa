export default {
  addLine (state, payload) {
    state.lines.push(payload)
  },
  setLines (state, payload) {
    state.lines = payload
  }
}
