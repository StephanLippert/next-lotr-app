import { volumes } from "../../../lib/data";
import Link from "next/link";
import Image from "next/image";

const volume = volumes.find((volume) => volume.slug === "the-two-towers");

export default function VolumeThree() {
  return (
    <section>
      <Link href="/volumes">Back to Overview</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={volume.cover}
        width={140}
        height={230}
        alt={`Cover of ${volume.title}`}
      />
    </section>
  );
}
