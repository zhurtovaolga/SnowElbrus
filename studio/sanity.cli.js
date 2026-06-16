import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'quyyrld9',
    dataset: 'production'
  },
  deployment: {
    appId: 'g9dhyvhacbvoxwtwmd63t51s',
    autoUpdates: true,
  }
})
