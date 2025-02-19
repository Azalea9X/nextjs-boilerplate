import { createClient, groq } from "next-sanity";
import { Project } from "../types/projects";

const sanityClient = createClient({
  projectId: 'slqsfm7w',
  dataset: 'production',

});

const projectQuery = groq`*[_type == "project"] {
  _id,
  title,
  content, // Assuming your rich text field is named 'content'
  author -> {
    name
  },
  slug,
  "imageUrl": image.asset->url,  // Correct way to get image URL
  image {  // Make sure you include the whole image object.
    alt,
    asset->{
      _id,
      url
    }
  }
}`;

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch(projectQuery);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Re-throw the error to propagate it up the call stack
  }
}