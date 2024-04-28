import GridCard from "@/components/GridCard";
import { createClient } from "contentful";

export default async function ProjectsHome() {
  // const client = createClient({
  //   space: process.env.SPACE,
  //   accessToken: process.env.TOKEN,
  // });
  // const data = await client.getEntries({ content_type: "project" });
  return (
    <main className="p-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* {data.items.map((project) => {
          return (
            <GridCard
              key={project.sys.id}
              title={project.fields.title}
              img={project.fields.thumbnail.fields.file.url}
              to=""
              loc={project.fields.location}
            ></GridCard>
          );
        })} */}
      </div>
    </main>
  );
}
