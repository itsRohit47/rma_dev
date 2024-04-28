import GridCard from "./GridCard";
import Button from "./Button";
import { createClient } from "contentful";

export default async function FeaturedProjects() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });

  const data = await client.getEntries({ content_type: "project" });
  const filteredProjects = data.items.filter(
    (project) => project.fields.featured === true
  );

  return (
    <div className="p-24">
      <div className="grid grid-cols-2">
        <div className="">
          <div className="font-bold tracking-widest text-blue-500">
            PROJECTS
          </div>
          <br></br>
          <div className="font-Rma text-6xl tracking-wider">
            OUR LATEST PROJECTS
          </div>
        </div>
        <div className="">
          <div>
            Our projects demonstrate expertise in infrastructure solutions. From
            earthworks to drainage, roads to rail, and recreation facilities to
            electrical infrastructure, we build foundations for growth and
            connect communities. With a focus on safety, sustainability, and
            efficiency, our projects make a lasting impact.
          </div>
          <br></br>
          <Button to="/projects" title="VIEW ALL"></Button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="relative">
        <div className="grid lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => {
            return (
              <GridCard
                key={project.sys.id}
                title={project.fields.title}
                img={project.fields.thumbnail.fields.file.url}
                to={`/projects/${project.fields.slug}`}
                loc={project.fields.location}
              ></GridCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
