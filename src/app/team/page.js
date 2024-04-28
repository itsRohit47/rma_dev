import GridCard from "@/components/GridCard";
import { createClient } from "contentful";

export default async function TeamHome() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.TOKEN,
  });
  const data = await client.getEntries({ content_type: "teamMember" });
  console.log(data.items);

  return (
    <main className="p-24">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3" id="team">
        {data.items.map((member) => {
          return (
            <GridCard
              key={member.sys.id}
              title={member.fields.name}
              img={member.fields.thumbnail.fields.file.url}
              to={`/team/${member.fields.slug}`}
              loc=""
            ></GridCard>
          );
        })}
      </div>
    </main>
  );
}
