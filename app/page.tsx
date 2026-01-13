"use client";

import { useState } from 'react';

export default function Home() {
  const [asduAddress, setAsduAddress] = useState('');
  const [casdu1, setCasdu1] = useState('');
  const [casdu2, setCasdu2] = useState('');

  const [ioaAddress, setIoaAddress] = useState('');
  const [ioa1, setIoa1] = useState('');
  const [ioa2, setIoa2] = useState('');
  const [ioa3, setIoa3] = useState('');

  const handleAsduChange = (value: string) => {
    setAsduAddress(value);
    const asdu = parseInt(value, 10);
    if (!isNaN(asdu) && asdu >= 0 && asdu <= 65535) {
      setCasdu1((asdu & 0xff).toString());
      setCasdu2(((asdu >> 8) & 0xff).toString());
    } else {
      setCasdu1('');
      setCasdu2('');
    }
  };

  const handleCasduChange = (c1Value: string, c2Value: string) => {
    setCasdu1(c1Value);
    setCasdu2(c2Value);
    const c1 = parseInt(c1Value, 10);
    const c2 = parseInt(c2Value, 10);
    if (!isNaN(c1) && !isNaN(c2) && c1 >= 0 && c1 <= 255 && c2 >= 0 && c2 <= 255) {
      setAsduAddress(((c2 << 8) | c1).toString());
    }
    else {
      setAsduAddress('');
    }
  };

  const handleIoaChange = (value: string) => {
    setIoaAddress(value);
    const ioa = parseInt(value, 10);
    if (!isNaN(ioa) && ioa >= 0 && ioa <= 16777215) {
      setIoa1((ioa & 0xff).toString());
      setIoa2(((ioa >> 8) & 0xff).toString());
      setIoa3(((ioa >> 16) & 0xff).toString());
    } else {
      setIoa1('');
      setIoa2('');
      setIoa3('');
    }
  };

  const handleIoa123Change = (i1Value: string, i2Value: string, i3Value: string) => {
    setIoa1(i1Value);
    setIoa2(i2Value);
    setIoa3(i3Value);
    const i1 = parseInt(i1Value, 10);
    const i2 = parseInt(i2Value, 10);
    const i3 = parseInt(i3Value, 10);
    if (
      !isNaN(i1) && !isNaN(i2) && !isNaN(i3) &&
      i1 >= 0 && i1 <= 255 &&
      i2 >= 0 && i2 <= 255 &&
      i3 >= 0 && i3 <= 255
    ) {
      setIoaAddress(((i3 << 16) | (i2 << 8) | i1).toString());
    } else {
      setIoaAddress('');
    }
  };

  const inputClasses = "w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white";
  const cardClasses = "bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md";
  const titleClasses = "text-2xl font-bold mb-4 text-white middle-align center";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-black dark:text-white">
      <main className="container mx-auto p-4 sm:p-8 flex items-center justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full center-align">
          
          <div className={cardClasses}>
            <h2 className={titleClasses}>ASDU &lt;=&gt; CASDU</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">ASDU Address</label>
                <input type="text" value={asduAddress} onChange={(e) => handleAsduChange(e.target.value)} className={inputClasses} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">CASDU1</label>
                  <input type="text" value={casdu1} onChange={(e) => handleCasduChange(e.target.value, casdu2)} className={inputClasses} />
                </div>
                <div>
                  <label className="block mb-1">CASDU2</label>
                  <input type="text" value={casdu2} onChange={(e) => handleCasduChange(casdu1, e.target.value)} className={inputClasses} />
                </div>
              </div>
            </div>
          </div>

          <div className={cardClasses}>
            <h2 className={titleClasses}>IOA &lt;=&gt; IOA1/2/3</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">IOA Address</label>
                <input type="text" value={ioaAddress} onChange={(e) => handleIoaChange(e.target.value)} className={inputClasses} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1">IOA1</label>
                  <input type="text" value={ioa1} onChange={(e) => handleIoa123Change(e.target.value, ioa2, ioa3)} className={inputClasses} />
                </div>
                <div>
                  <label className="block mb-1">IOA2</label>
                  <input type="text" value={ioa2} onChange={(e) => handleIoa123Change(ioa1, e.target.value, ioa3)} className={inputClasses} />
                </div>
                <div>
                  <label className="block mb-1">IOA3</label>
                  <input type="text" value={ioa3} onChange={(e) => handleIoa123Change(ioa1, ioa2, e.target.value)} className={inputClasses} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
