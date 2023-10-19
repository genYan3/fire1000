import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const CoreDataModeles = {
  state: {
    data: {
      AlgorithmPlatform: {
        title: "算法平台",
        data: [
          {
            //展示的图标
            icon: "",
            title: "极星",
            describe: "算法推理部署平台"
          }
        ]
      },
      SmartTerminal: {
        title: "智能终端",
        data: [
          {
            // 展示的图标
            icon: "",
            title: "AI盒子",
            describe: "AI边缘算法盒子"
          }
        ]
      },
      AlgorithmTools: {
        title: "算法工具",
        data: [{
          // 展示的图标
          icon: "",
          title: "数据标注管理平台",
          describe: "专为政企标注团队打造"
        }
        ]
      },
      ArtificialIntelligence: {
        title: "人工智能",
        data: [
          {
            // 展示的图标
            icon: "",
            title: "ChatAI",
            describe: "ChatAI是人工智能语言对话"
          },
          {
            // 展示的图标
            icon: "",
            title: "Stable DiffusionAI绘画",
            describe: "新一代智能绘画技术"
          }
        ]
      },
      IindustrialVision: {
        title: "工业视觉",
        data: [
          {
            // 展示的图标
            icon: "",
            title: "2D视觉",
            describe: "2D视觉传递"
          },
          {
            // 展示的图标
            icon: "",
            title: "3D视觉",
            describe: "3D视觉传递"
          }
        ]
      }
    }

  },
  getters: {
    getAll(state) {
      return state.data
    }
  },
  mutations: {

  },
  actions: {
    // 请求初始化数据
    async getData(state) {
      // 请求数据接口
      let questsData = await axios.get()
      state.data = questsData
    }
  },
  modules: {}
}
export default new Vuex.Store({
  state: {
    index: "1",
    isRemove:true
  },
  getters: {
  },
  mutations: {
    setIndex(state, value) {
      state.index = value
    },
    setIsRemover(state,value){
      state.isRemove = value
    }
  },
  actions: {
  },
  modules: {
    CoreData: CoreDataModeles
  }
})
