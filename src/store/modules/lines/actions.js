export default {
  async addLine (context, data) {
    const lineId = data.id
    const line = {
      name: data.name,
      description: data.description
    }

    const response = await fetch(`https://krja-vue-pwa.firebaseio.com/lines/${lineId}.json`, {
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
  }
}
