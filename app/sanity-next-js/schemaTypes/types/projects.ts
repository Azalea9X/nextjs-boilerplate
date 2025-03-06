import { PortableTextBlock } from "next-sanity";

/**
 * Author type definition
 */
export type Author = {
  /**
   * Author's name
   */
  name: string;
  /**
   * Author's slug
   */
  slug: string;
  /**
   * Author's bio
   */
  bio: string;
};

/**
 * Project type definition
 */
export type Project = {
  /**
   * Unique project ID
   */
  _id: string;
  /**
   * Project creation date
   */
  _createdAt: string;
  /**
   * Project title
   */
  title: string;
  /**
   * Project author
   */
  author: Author;
  /**
   * Project slug
   */
  slug: {
    current: string;
  };
  /**
   * Project content
   */
  content: PortableTextBlock[] | string, 
 
  /**
   * Project image URL
   */
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt: string;
    title: string;
    description: string;
    size: number;
    width: number;
    height: number;
    aspectRatio: number;
    url: string;
    filename: string;
    format: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
   lqip: string;
  },
  /**
   * Project URL
   */
  url: string;
  /**
   * Project tags
   */
  tags: string[];
};