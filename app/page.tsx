import Image from "next/image";
import Link from "next/link";
import { getProjects } from "./components/schemaTypes/sanity-utils";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import Nav from './navbar';
import { Project } from "./components/types/projects";

import { PortableText } from '@portabletext/react'


import project from "./components/schemaTypes/projectSchema";
import { PortableTextInput } from "sanity";
import { useEffect } from "react";


export default async function Home() {
  const projects: Project[] = await getProjects();
  /*Note Kapeche uses a custom gradien to make the H1 look fun. I will need to look into that later. 
  
  
  Kapeche uses a div with styling to surround the different post contents. 
  
  
  I think that I need to add the many different folders to accept Tailwind. I think if I have it added, it'll adjust automatically. 
  
  
  I will also need to find a way to get the speed published. 
  
  For publishing, Kapeche is going to go to the git panel (I am not ready to publish it as an app quite yet). She has it published on an app. Kapeche recommends adding it to Vercel.  That shows the one that we just created. Project name is next-sanity, framework project NextJS, we don't need to change many of the settings. Just click deploy. 
  
  Click on the new project that you just created. You can click there. Just like it looked on local. 
  
  What's cool is that if you're editing the studio loaclly or on the production site, the deployed website can see that you are being in production. Just like in google cloud, you get the real time update since it's backed up by Sanity's content lake. We went from having no NextJS website to creating our own website, and, we have a /admin site to work with and we can work with other websites as we create them. */

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />
      <div className="relative">
        <main className="max-w-7xl mx-auto p-4">
          <section className="projects">

            <h1 className="text-4xl relative font-extrabold text-center mb-4
                  xxs:text-2xl 
                  sm:text-3xl 
                  md:text-4xl 
                  lg:text-5xl 
                  xl:text-6xl 
                  2xl:text-6xl
                   ">Hi! I am Jacob Siegel!</h1>
            <div className="grid relative
                  xxs:grid-cols-1
                  xs:grid-cols-1 
                  sm:grid-cols-1 left-[-4rem]
                  md:grid-cols-1 left-[1.5rem]
                  lg:grid-cols-1 top-[6rem] 
                  xl:grid-cols-2 left-[7vw]
                  2xl: left-[-2%]
                  3xl: left-[2.5rem]
                  5xl: left-[-8rem]

  ">
              {projects.map((project: Project) => (
                <div key={project._id} className="project-card prose prose-md relative">
                  <h2 className="text-2xl extra-bold">{project.title}</h2>
                  <PortableText
                    value={project.content}
                    components={{
                      block: {
                        heading1: ({ children }) => (
                          <h1 className="text-3xl font-extrabold">{children}</h1>
                        ),
                        heading2: ({ children }) => (
                          <h2 className="text-2xl font-extrabold">{children}</h2>
                        ),
                        heading3: ({ children }) => (
                          <h3 className="text-xl font-extrabold">{children}</h3>
                        ),
                        heading4: ({ children }) => (
                          <h4 className="text-lg font-extrabold">{children}</h4>
                        ),
                        normal: ({ children }) => (
                          <p className="text-lg leading-relaxed leading-[2]">{children}</p>
                        ),
                      },
                    }}
                  />

                 <Link
  href={`/projects/${project.slug.current}`}
  target="_blank"
  key={project._id}
  className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition duration-300 ease-in-out"
>
                    {project.image && (
                      <Image
                        src={project.image.asset.url}
                        alt={project.title}
                        width={600} // Added width
                        height={400} // Added height
                        maxHeight={1000}
                        className="rounded-lg object-cover w-full images img-link"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    )}
                  </Link>

                </div>
              ))}

            </div>
          </section>
        </main>
      </div>
    </>
  );
}