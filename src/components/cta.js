import Link from "next/link";
export default function Cta() {
  return (
    <main className="bg-gray-100 p-4 md:p-24">
      <div className="font-semibold text-xl">
        Interested in how RMA can help you?
      </div>
      <Link href="/contact" className="hover:underline">
        Enquire Now
      </Link>
    </main>
  );
}
