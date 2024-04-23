import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";

export default async function TeamHome() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });
  const data = await client.getEntries({ content_type: "teamMember" });
  console.log(data.items);

  return (
    <main className="p-2">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {data.items.map((member) => {
          // console.log(member.fields.thumbnail.fields.file.url);
          return (
            <Link
              href={`/team/${member.fields.slug}`}
              key={member.sys.id}
              className="group hover:shadow-md rounded-lg hover:cursor-pointer relative overflow-hidden"
            >
              <Image
                src={"https:" + member.fields.thumbnail.fields.file.url}
                alt=""
                width={2000}
                height={2000}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
              ></Image>
              <div className="absolute h-full w-full bg-black inset-0 opacity-50 group-hover:bg-blue-500 transition duration-300 z-0"></div>{" "}
              <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="font-semibold">{member.fields.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
