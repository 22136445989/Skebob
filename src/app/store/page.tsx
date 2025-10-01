"use client";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
export default function store() {
  const magazine = ["финики", "тыквенные семечки", "медовая вода", "скебоб"];

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
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvOof9agtMsk3Ty0I1vzixA1w9omqg8fl9Q&s"
            alt="store"
          />
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvOof9agtMsk3Ty0I1vzixA1w9omqg8fl9Q&s"
            alt="store"
          />
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvOof9agtMsk3Ty0I1vzixA1w9omqg8fl9Q&s"
            alt="store"
          />
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvOof9agtMsk3Ty0I1vzixA1w9omqg8fl9Q&s"
            alt="store"
          />
          {magazine.map((item) => {
            return (
              <div key={item}>
                <button
                  onClick={() => handleClick(item)}
                  value={item}
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
