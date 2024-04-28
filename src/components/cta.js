import Link from "next/link";
import Button from "./Button";
export default function Cta() {
  return (
    <main className="bg-gray-100 p-4 md:p-24">
      <div className="tracking-wider font-Rma text-5xl">
        Interested in how RMA can help you?
      </div>
      <br></br>
      <Button to="" title="GET IN TOUCH"></Button>
    </main>
  );
}
