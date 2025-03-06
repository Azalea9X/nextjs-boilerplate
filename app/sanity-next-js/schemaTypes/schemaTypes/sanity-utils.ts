import { createClient, groq } from "next-sanity";
import { Project } from "../types/projects";
import { Page } from "../types/pages";

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
  "imageUrl": image.asset->url, // Add image URL to the query
}   `;

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch(projectQuery);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Re-throw the error to propagate it up the call stack
  }
}

export async function getPages(): Promise<Page[]> {
  try {
    const pagesQuery = groq`*[_type == "page"] {
      _id,
      title,
      content,
      author -> {
        name
      },
      slug,
      "imageUrl": image.asset->url,
    }`;
    const pages = await sanityClient.fetch(pagesQuery);
    return pages;
  } catch (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }
}

export async function getPage(slug: string): Promise<Page | null> {
  try {
    const pageQuery = groq`*[_type == "page" && slug.current == $slug] {
      _id,
      title,
      content,
      author -> {
        name
      },
      slug,
      "imageUrl": image.asset->url,
    }`;
    const page = await sanityClient.fetch(pageQuery, { slug });
    return page[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
}