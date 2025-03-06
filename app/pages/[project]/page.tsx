import { getPage } from "@/app/sanity-next-js/schemaTypes/schemaTypes/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Nav from "@/app/navbar"
import "../../projects.css";
type Props = {
  params: {
    project: string;
  };
};

type Project = {
  _id: string;
  title: string;
  content: any;
  image: {
    asset: {
      url: string;
    };
  };
};

export default async function Project({ params }: Props) {
  try {
    const slug = await params.project;
    const page = await getPage(slug);

    if (!page) {
      throw new Error("Project not found");
    }

    return (
      <div className="project-card prose prose-md relative
xs:min-w-[400px] max-w-[450px] 
left-[-3vw]
sm: left:-[-2rem]


      ">
        <Nav />
        <h2 className="text-2xl extra-bold">{page.title}</h2>
        <PortableText
          value={page.content}
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

        {page.image && (
          <Image
            src={page.image.asset.url}
            alt={page.title}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full images"
            layout="responsive"
          />
        )}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
}

