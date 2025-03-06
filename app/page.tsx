import Image from "next/image";
import Link from "next/link";
import { getProjects } from "./components/schemaTypes/sanity-utils";
import Nav from './navbar';
import { Project } from "./components/types/projects";

import { PortableText } from '@portabletext/react'


export default async function Home() {
  const projects: Project[] = await getProjects();
//Test
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
                        width={600}
                        height={400}
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