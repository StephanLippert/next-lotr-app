import Link from "next/link.js";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings - the App</h1>
      <Link href="/volumes">Go to volumes.</Link>
    </div>
  );
}
