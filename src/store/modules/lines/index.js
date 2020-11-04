import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state () {
    return {
      lines: [
        {
          id: 1,
          name: '2A',
          description: 'Gorzów-Kłodawa-Santocko-Kłodawa-Gorzów'
        },
        {
          id: 2,
          name: '2B',
          description: 'Gorzów-Kłodawa-Santocko-Kłodawa-Gorzów'
        },
        {
          id: 3,
          name: '2C',
          description: 'Gorzów-Kłodawa-Santocko-Kłodawa-Gorzów'
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}
