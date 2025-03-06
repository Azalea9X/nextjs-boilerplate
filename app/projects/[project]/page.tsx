import { getProject } from "@/app/components/schemaTypes/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Nav from "@/app/navbar";
import "../../projects.css";

type Props = {
  params: {
    project: string;
  };
};

type Project = {
  _id: string;
  title: string;
  content: any; // Ideally, refine this type
  image?: {
    asset: {
      url: string;
    };
  };
};

export default async function Project({ params }: Props) {
  try {
    const slug = params.project;
    const project: Project | null = await getProject(slug);

    if (!project) {
      throw new Error("Project not found");
    }

    return (
      <div className="project-card prose prose-md relative md:left-[25rem] top-[5rem] lg:left-[30rem] top-[15rem] xl:translate">
        <Nav />
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

        {project.image && (
          <Image
            src={project.image.asset.url}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full images"
            layout="responsive"
            unoptimized={false}
          />
        )}
      </div>
    );
  } catch (error: any) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
}