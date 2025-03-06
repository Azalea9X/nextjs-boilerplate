import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/schemaTypes/index';



export default defineConfig({
  name: 'default',
  apiVersion: '2025-02-14', // Changed to a valid date format
  projectId: 'slqsfm7w',
  dataset: 'production',
  basePath: '/admin', // Removed the '123' to make it a more standard admin path
  title: 'My Sanity Studio',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  // Added a new property to define the studio's theme
 

})