"use client";

import { useState } from 'react';

const Popup = ({ content, onClose }: { content: any, onClose: () => void }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
      <h3 className="font-bold text-lg mb-2">{content.title}</h3>
      <p className="mb-2"><span className="font-bold">Description:</span> {content.description}</p>
      <p className="font-mono text-sm mb-2"><span className="font-bold">Size:</span> {content.size} ({content.bits})</p>
      <p className="mb-4"><span className="font-bold">Function:</span> {content.func}</p>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
    </div>
  </div>
);

const Field = ({ title, className = '', color, onClick }: { title: string, className?: string, color: string, onClick: () => void }) => (
    <div className={`p-3 border rounded-md text-white cursor-pointer hover:opacity-90 ${color} ${className}`} onClick={onClick}>
      <div className="font-bold text-sm text-center">{title}</div>
    </div>
  );
  
  const Iec104Packet = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState<any>(null);

    const handleFieldClick = (content: any) => {
        setPopupContent(content);
        setShowPopup(true);
    }

    const colors = {
        apci: 'bg-blue-500',
        asdu: 'bg-green-500',
        control: 'bg-yellow-500',
        address: 'bg-purple-500',
        data: 'bg-red-500',
    }

    const fields = {
        startChar: { title: "Start Character", description: "Always 0x68", size: "1 byte", bits: "8 bits", func: "Marks the beginning of a packet." },
        apduLength: { title: "APDU Length", description: "Length of ASDU + Control Fields", size: "1 byte", bits: "8 bits", func: "Specifies the total length of the APDU." },
        iFormat: { title: "I Format", description: "Send/Receive Sequence Numbers", size: "2 bytes", bits: "16 bits", func: "Used for numbered information transfer." },
        sFormat: { title: "S Format", description: "Receive Sequence Number", size: "2 bytes", bits: "16 bits", func: "Used for numbered supervisory functions." },
        uFormat: { title: "U Format", description: "STARTDT, STOPDT, TESTFR", size: "2 bytes", bits: "16 bits", func: "Used for unnumbered control functions." },
        typeId: { title: "Type ID", description: "Defines the message type", size: "1 byte", bits: "8 bits", func: "Identifies the type of application data." },
        vsq: { title: "VSQ", description: "Variable Structure Qualifier", size: "1 byte", bits: "8 bits", func: "Specifies the number of information objects and the addressing mode." },
        cot: { title: "COT", description: "Cause of Transmission", size: "1/2 bytes", bits: "8/16 bits", func: "Indicates the reason for the data transmission." },
        asduAddr: { title: "ASDU Addr", description: "Common Address of ASDU", size: "1/2 bytes", bits: "8/16 bits", func: "Address of the controlling station." },
        ioa: { title: "IOA", description: "Information Object Address", size: "1/2/3 bytes", bits: "8/16/24 bits", func: "Address of the specific information object." },
        infoObjects: { title: "Info Object(s)", description: "The actual data values", size: "N bytes", bits: "N*8 bits", func: "Contains the actual measurement or control values." },
    }

    return (
      <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white text-center">IEC 60870-5-104 Packet Structure</h2>
        <div className="flex flex-wrap gap-2">
            <Field title={fields.startChar.title} color={colors.apci} onClick={() => handleFieldClick(fields.startChar)} className="flex-grow" />
            <Field title={fields.apduLength.title} color={colors.apci} onClick={() => handleFieldClick(fields.apduLength)} className="flex-grow" />
            
            <div className="w-full border-2 border-dashed border-gray-400 dark:border-gray-500 p-2 rounded-md">
                <div className="font-bold text-sm text-white text-center mb-2">Control Fields</div>
                <div className="flex flex-wrap gap-2">
                    <Field title={fields.iFormat.title} color={colors.control} onClick={() => handleFieldClick(fields.iFormat)} className="flex-grow"/>
                    <Field title={fields.sFormat.title} color={colors.control} onClick={() => handleFieldClick(fields.sFormat)} className="flex-grow"/>
                    <Field title={fields.uFormat.title} color={colors.control} onClick={() => handleFieldClick(fields.uFormat)} className="flex-grow"/>
                </div>
            </div>

            <div className="w-full p-2 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-md">
                <div className="font-bold text-sm text-white text-center mb-2">Application Service Data Unit (ASDU)</div>
                <div className="flex flex-wrap gap-2">
                    <Field title={fields.typeId.title} color={colors.asdu} onClick={() => handleFieldClick(fields.typeId)} className="flex-grow"/>
                    <Field title={fields.vsq.title} color={colors.asdu} onClick={() => handleFieldClick(fields.vsq)} className="flex-grow"/>
                    <Field title={fields.cot.title} color={colors.asdu} onClick={() => handleFieldClick(fields.cot)} className="flex-grow"/>
                    <Field title={fields.asduAddr.title} color={colors.address} onClick={() => handleFieldClick(fields.asduAddr)} className="flex-grow"/>
                    <Field title={fields.ioa.title} color={colors.address} onClick={() => handleFieldClick(fields.ioa)} className="flex-grow"/>
                    <Field title={fields.infoObjects.title} color={colors.data} onClick={() => handleFieldClick(fields.infoObjects)} className="w-full"/>
                </div>
            </div>
        </div>
        {showPopup && <Popup content={popupContent} onClose={() => setShowPopup(false)} />}
      </div>
    );
  };
  
  export default Iec104Packet;
