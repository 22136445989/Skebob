"use client";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { cards } from "./const.store";
import { ICard } from "@/share/types/StoreCard.intarface.js";
export default function store() {
  function handleClick(productName: string) {
    toast(`Вы купили ${productName}`);
  }

  return (
    <div>
      <div className="container mx-auto position">
        <div className="text-center text-3xl flex justify-between">
          <h1 className="text-center text-3xl font-bold">магазин</h1>
          <Link href="/cart">Корзина</Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {cards.map((item) => {
            return (
              <div key={item}>
                <Image className="w-full h-full" src={item.image} alt="store" />
                <button
                  onClick={() => handleClick(item)}
                  value={item.name}
                  className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                  type="button"
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
