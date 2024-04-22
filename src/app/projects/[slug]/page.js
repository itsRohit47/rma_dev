import Image from "next/image";
import client from "@/utils/client";
export default async function Project({ params }) {
  const data = await client.getEntries({ content_type: "project" });

  const filteredProjects = data.items.filter(
    (project) => project.fields.slug === params.slug
  );

  return (
    <div>
      <div>
        {filteredProjects.map((project) => {
          return (
            <div
              key={project.sys.id}
              className="p-4 grid grid-cols-3 gap-10 lg:px-24 lg:p-16"
            >
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-5xl font-normal">{project.fields.title}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2 text-gray-700">
                    CLIENT
                  </p>
                  <p className="font-normal">{project.fields.client}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2 text-gray-700">
                    LOCATION
                  </p>
                  <p className="font-normal">{project.fields.location}</p>
                </div>
              </div>
              <div className="col-span-2">
                <Image
                  src={"https:" + project.fields.thumbnail.fields.file.url}
                  alt=""
                  width={2000}
                  height={2000}
                  className="h-96 w-full object-cover"
                ></Image>
                <br></br>
                <div>
                  {" "}
                  <p className="font-normal text-sm text-gray-600">
                    {project.fields.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
