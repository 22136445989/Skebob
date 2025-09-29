"use client";
import { ToastContainer, toast } from "react-toastify";
export default function store() {
  const magazine = ["финики", "тыквенные семечки", "медовая вода"];

  function handleClick(productName: string) {
    toast(`Вы купили ${productName}`);
  }

  return (
    <div>
      <div className="container bg-amber-500">
        <h1>магазин</h1>
        <div>
          {magazine.map((item) => {
            return (
              <div key={item}>
                <button
                  onClick={() => handleClick(item)}
                  value={item}
                  className="btn"
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
