export default {
  async addLine (context, data) {
    const lineId = data.id
    const line = {
      name: data.name,
      description: data.description
    }

    const token = context.rootState.idToken

    const response = await fetch(`https://krja-vue-pwa.firebaseio.com/lines/${lineId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(line)
    })

    // const responseData = await response.json()

    if (!response.ok) {
      // error ..
    }

    context.commit('addLine', {
      ...line,
      id: lineId
    })
  },
  async loadLines (context) {
    const response = await fetch(
      'https://krja-vue-pwa.firebaseio.com/lines.json'
    )

    const responseData = await response.json()

    if (!response.ok) {
      // TODO: error ..
    }

    const lines = []

    for (const key in responseData) {
      const line = {
        id: key,
        name: responseData[key].name,
        description: responseData[key].description
      }
      lines.push(line)
    }

    context.commit('setLines', lines)
  }
}
