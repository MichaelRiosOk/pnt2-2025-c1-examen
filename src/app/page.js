import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <h1 className="text-3xl font-bold underline">
        Peliculas
      </h1>
      <Link href="/peliculas">Ver Peliculas</Link>
    </div>
    
  );
}
