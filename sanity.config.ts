import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './app/components/schemaTypes/index'


export default defineConfig({
  name: 'default',
  apiVersion: '2025-14-05',
  projectId: 'slqsfm7w',
  dataset: 'production',
  basePath: '/admin123',
  title: 'My Sanity Studio',
   plugins: [
    structureTool(),
    visionTool(),
    
  ],
  schema: {
    types: schemaTypes,
  },
})