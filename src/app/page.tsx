"use client";
export default function Home() {
  const magazine = ["тыквенные семечки", "финики", "медовая вода"];

  function handleClick() {
    console.log("click");
  }
  return (
    <div className="container bg-amber-500">
      <h1>магазин</h1>
      <div>
        {magazine.map((item) => {
          return (
            <div key={item}>
              <button onClick={handleClick} className="btn" type="button">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
