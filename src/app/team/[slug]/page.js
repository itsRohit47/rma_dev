import Image from "next/image";
import { createClient } from "contentful";

export default async function Project({ params }) {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });
  const data = await client.getEntries({ content_type: "teamMember" });

  const filteredMember = data.items.filter(
    (project) => project.fields.slug === params.slug
  );

  return (
    <div>
      <div>
        {filteredMember.map((member) => {
          return (
            <div
              key={member.sys.id}
              className="p-4 grid grid-cols-3 gap-10 lg:px-24 lg:p-16"
            >
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-5xl font-normal">{member.fields.name}</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2 text-gray-700">
                    SOCIALS
                  </p>
                  {/* <p className="font-normal">{member.fields.client}</p> */}
                </div>
              </div>
              <div className="col-span-2">
                <Image
                  src={"https:" + member.fields.thumbnail.fields.file.url}
                  alt=""
                  width={2000}
                  height={2000}
                  className="h-96 w-full object-cover"
                ></Image>
                <br></br>
                <div>
                  {" "}
                  {/* <p className="font-normal text-sm text-gray-600">
                    {member.fields.description}
                  </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
