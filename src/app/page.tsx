import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center text-3xl mt-1.5">
      <Link href="/store">Нажми для перехода в магазин</Link>
    </div>
  );
}
