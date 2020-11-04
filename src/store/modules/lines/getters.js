export default {
  lines (state) {
    return state.lines
  },
  hasLines (state) {
    return state.lines && state.lines.length > 0
  },
  lineId (state) {
    const lines = state.lines
    return lines.length + 1
  }
}
