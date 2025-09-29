"use client";
import { ToastContainer, toast } from "react-toastify";
export default function store() {
  const magazine = ["финики", "тыквенные семечки", "медовая вода"];

  function handleClick(productName: string) {
    toast(`Вы купили ${productName}`);
  }

  return (
    <div>
      <div className="container mx-auto ">
        <h1 className="text-center text-3xl font-bold">магазин</h1>
        <div>
          {magazine.map((item) => {
            return (
              <div key={item}>
                <button
                  onClick={() => handleClick(item)}
                  value={item}
                  className="btn btn-primary m-2 w-1/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
