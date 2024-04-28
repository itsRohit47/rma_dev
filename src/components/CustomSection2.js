import Image from "next/image";

export default function CustomSection2(props) {
  const list = props.list.split(",");

  console.log(typeof props.list);
  return (
    <div className="grid grid-cols-2 gap-10 p-24 h-max">
      <div>
        <Image
          src={`/images/${props.img}`}
          alt=""
          width={2000}
          height={2000}
          className="object-cover h-[500px]"
        ></Image>
      </div>
      <div>
        <div className="text-6xl font-Rma text-blue-500">{props.heading}</div>
        <br></br>
        <div className="font-Rma text-4xl">
          {" "}
          <ul>
            {list.map((item, index) => (
              <li key={index} className="mb-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
