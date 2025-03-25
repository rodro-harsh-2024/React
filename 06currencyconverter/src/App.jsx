import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAMount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAMount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAMount(amount * (currencyInfo[to] || 1));
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat px-4"
      style={{
        backgroundImage: `url('https://png.pngtree.com/background/20211217/original/pngtree-fluid-gradient-dark-blue-background-picture-image_1593596.jpg')`,
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-8 drop-shadow-lg">
        Currency Converter
      </h1>

      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-6 backdrop-blur-lg bg-white/20 shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-3">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full flex justify-center my-3">
            <button
              onClick={swap}
              type="button"
              className="border-2 border-white rounded-full bg-blue-600 text-white px-4 py-2 shadow-md hover:bg-blue-700 transition duration-300"
            >
              Swap
            </button>
          </div>

          <div className="w-full mt-3 mb-5">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisable
              selectCurrency={to}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg font-semibold px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
