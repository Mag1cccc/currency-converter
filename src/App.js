import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        setConverted(data.rates[toCurrency]);
        setIsLoading(false);
      }

      if (fromCurrency === toCurrency) return setConverted(amount);

      convert();
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div className="container">
      <Header />
      <Input amount={amount} onChange={setAmount} isLoading={isLoading} />
      <Select
        value={fromCurrency}
        onChange={setFromCurrency}
        isLoading={isLoading}
      />
      <RightArrow />
      <Select
        value={toCurrency}
        onChange={setToCurrency}
        isLoading={isLoading}
      />
      <Output converted={converted} toCurrency={toCurrency} />
    </div>
  );
}

function Header() {
  return <h3> CURRENCY CONVERTER </h3>;
}

function Input({ amount, onChange, isLoading }) {
  return (
    <input
      type="text"
      placeholder="Enter amount here..."
      value={amount}
      onChange={(e) => onChange(Number(e.target.value))}
      disabled={isLoading}
    />
  );
}

function Select({ value, onChange, isLoading }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={isLoading}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

function RightArrow() {
  return <span>➡️</span>;
}

function Output({ converted, toCurrency }) {
  return (
    <p>
      {converted} {toCurrency}
    </p>
  );
}
