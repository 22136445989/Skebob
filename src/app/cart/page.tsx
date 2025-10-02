import Link from "next/link";
export default function cart() {
  return (
    <div>
      <div className="text-center text-3xl">
        <Link href="/store">Нажми для перехода в магазин</Link>
      </div>
      <h1>Корзина</h1>
      <button
        className="btn btn-primary w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        type="button"
      >
        Оформить заказ
      </button>
    </div>
  );
}
