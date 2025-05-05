import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyChangeMessage, setCurrencyChangeMessage] = useState('');

  const currencyInfo = useCurrencyInfo(from);
  const Options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    setCurrencyChangeMessage(`Converted ${amount} ${from.toUpperCase()} to ${convertedAmount.toFixed(2)} ${to.toUpperCase()}`);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg')`
      }}>
      <div className='flex w-full max-w-6xl mx-auto p-5'>
        {/* Left Card for Knowledge Inspiration */}
        <div className='flex-1 bg-white/30 backdrop-blur-sm border border-gray-60 rounded-lg p-5 m-2 shadow-lg neon-card'>
          <h2 className='text-2xl font-bold text-center text-slate-900 mb-4'>Learn About Currency</h2>
          <img src='https://avatars.githubusercontent.com/u/179910508?s=400&u=9987b18b4a1e0b56dd5cd7c9cccbe20cea5beda2&v=4' alt='Developer' className='rounded-full mx-auto w-12 mb-4' />
          <p className='text-center text-gray-700'>
            Understanding currency exchange rates is essential for making informed financial decisions. 
            Stay updated and enhance your knowledge!
          </p>
        </div>

        {/* Right Side Currency Converter */}
        <div className='flex-1 bg-white/30 backdrop-blur-sm border border-gray-60 rounded-lg p-5 m-2 shadow-lg'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}>
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
                label='To'
                amount={convertedAmount}
                currencyOptions={Options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

      {/* Dynamic Bulletin for Currency Changes */}
      <div className="w-full text-center mt-4 shadow-2xl">
  <p className="text-lg font-bold text-gray-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  px-4 py-2 rounded-lg shadow-2xl animate-bounce translate-x-9 ">
    {currencyChangeMessage}
  </p>
</div>
    </div>
  );
}

export default App;
