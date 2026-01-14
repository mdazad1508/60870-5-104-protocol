"use client";

import { useState } from 'react';

const Iec104Packet = () => {
  const [startChar, setStartChar] = useState('68');
  const [apduLength, setApduLength] = useState('');
  const [controlField1, setControlField1] = useState('');
  const [controlField2, setControlField2] = useState('');
  const [controlField3, setControlField3] = useState('');
  const [controlField4, setControlField4] = useState('');
  const [typeId, setTypeId] = useState('');
  const [vsq, setVsq] = useState('');
  const [cot, setCot] = useState('');
  const [asduAddress, setAsduAddress] = useState('');
  const [ioa, setIoa] = useState('');
  const [informationObject, setInformationObject] = useState('');

  const inputClasses = "w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white text-center";

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">IEC 60870-5-104 Packet</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 text-center">
        <div className="md:col-span-1">
          <label className="block mb-1">Start (1)</label>
          <input type="text" value={startChar} onChange={(e) => setStartChar(e.target.value)} className={inputClasses} readOnly />
        </div>
        <div className="md:col-span-1">
          <label className="block mb-1">Length (1)</label>
          <input type="text" value={apduLength} onChange={(e) => setApduLength(e.target.value)} className={inputClasses} />
        </div>
        <div className="md:col-span-4">
          <label className="block mb-1">Control Fields (4)</label>
          <div className="grid grid-cols-4 gap-2">
            <input type="text" value={controlField1} onChange={(e) => setControlField1(e.target.value)} className={inputClasses} />
            <input type="text" value={controlField2} onChange={(e) => setControlField2(e.target.value)} className={inputClasses} />
            <input type="text" value={controlField3} onChange={(e) => setControlField3(e.target.value)} className={inputClasses} />
            <input type="text" value={controlField4} onChange={(e) => setControlField4(e.target.value)} className={inputClasses} />
          </div>
        </div>
        <div className="md:col-span-6">
            <label className="block mb-1">ASDU</label>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 border-2 border-dashed border-gray-400 dark:border-gray-500 p-2 rounded-md">
                <div>
                    <label className="block mb-1 text-sm">Type ID (1)</label>
                    <input type="text" value={typeId} onChange={(e) => setTypeId(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label className="block mb-1 text-sm">VSQ (1)</label>
                    <input type="text" value={vsq} onChange={(e) => setVsq(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label className="block mb-1 text-sm">COT (1/2)</label>
                    <input type="text" value={cot} onChange={(e) => setCot(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label className="block mb-1 text-sm">ASDU Addr (1/2)</label>
                    <input type="text" value={asduAddress} onChange={(e) => setAsduAddress(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label className="block mb-1 text-sm">IOA (1/2/3)</label>
                    <input type="text" value={ioa} onChange={(e) => setIoa(e.target.value)} className={inputClasses} />
                </div>
                <div className="md:col-span-5">
                    <label className="block mb-1 text-sm">Information Object(s)</label>
                    <textarea value={informationObject} onChange={(e) => setInformationObject(e.target.value)} className={`${inputClasses} h-24`} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Iec104Packet;
