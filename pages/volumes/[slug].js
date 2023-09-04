import { volumes } from "@/lib/data";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  return (
    <>
      <Head>
        <title>{currentVolume.title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={currentVolume.cover}
        alt="Cover Image"
        width={140}
        height={230}
      ></Image>
    </>
  );
}
