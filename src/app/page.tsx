import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl">
      <Link href="/store">Нажми для перехода в магазин</Link>
    </div>
  );
}
