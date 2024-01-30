import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './xavierportfoliocontent/schemas/index'

export default defineConfig({
  name: 'default',
  title: 'xavierportfoliocontent',

  projectId: 'pucirtyi',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
