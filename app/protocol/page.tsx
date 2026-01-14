"use client";
import React, { useState } from 'react';

const ProtocolPage = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  const renderContent = () => {
    switch (activeTab) {
      case 'introduction':
        return <Introduction />;
      case 'frameFormats':
        return <FrameFormats />;
      case 'dataTypes':
        return <DataTypes />;
      case 'communicationParameters':
        return <CommunicationParameters />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          IEC 60870-5-104 Protocol
        </h1>

        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 mb-4">
          <button
            className={`py-2 px-4 text-lg font-medium ${activeTab === 'introduction' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
            onClick={() => setActiveTab('introduction')}
          >
            Introduction
          </button>
          <button
            className={`py-2 px-4 text-lg font-medium ${activeTab === 'frameFormats' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
            onClick={() => setActiveTab('frameFormats')}
          >
            Frame Formats
          </button>
          <button
            className={`py-2 px-4 text-lg font-medium ${activeTab === 'dataTypes' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
            onClick={() => setActiveTab('dataTypes')}
          >
            Data Types
          </button>
          <button
            className={`py-2 px-4 text-lg font-medium ${activeTab === 'communicationParameters' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
            onClick={() => setActiveTab('communicationParameters')}
          >
            Communication Parameters
          </button>
        </div>

        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

const Introduction = () => (
  <div className="space-y-6 text-lg">
    <section>
      <h2 className="text-2xl font-semibold mb-2">Introduction to IEC 104</h2>
      <p>
        IEC 60870-5-104 (IEC 104) is a standard for telecontrol, teleprotection, and associated telecommunications for electric power systems. It defines a network-access for IEC 60870-5-101 using a complete TCP/IP based interface. This protocol is used for monitoring and controlling geographically widespread processes.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Based on TCP/IP, which ensures reliable, connection-oriented data transmission.</li>
        <li>Supports both balanced (master-master) and unbalanced (master-slave) transmission.</li>
        <li>Provides mechanisms for time synchronization.</li>
        <li>Uses a standardized format for data, ensuring interoperability between devices from different vendors.</li>
      </ul>
    </section>
  </div>
);

const FrameFormats = () => (
  <div className="space-y-6 text-lg">
    <section>
      <h2 className="text-2xl font-semibold mb-2">Frame Formats (APCI and ASDU)</h2>
      <p>
        The data is transmitted in Application Protocol Data Units (APDUs). An APDU consists of Application Protocol Control Information (APCI) and, for I-format frames, an Application Service Data Unit (ASDU).
      </p>
    </section>
    <CollapsibleSection title="APCI (Application Protocol Control Information)">
      <p>The APCI is 6 bytes long and contains control information for the data link layer.</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm">
  Byte 1: Start Character (0x68)
  Byte 2: APDU Length (max 253)
  Bytes 3-6: Control Fields
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="I-Format (Information Format)">
      <p>Used for numbered information transfer, carrying user data in an ASDU. Includes send and receive sequence numbers (N(S) and N(R)) for reliable data exchange.</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm">
        APCI(Application protocol control information) + ASDU(Application service data unit)
    {/* +-----------------------------------------------------------+
    | APCI (Application Protocol Control Information)           |
    +-----------------------------------------------------------+
    | ASDU (Application Application Service Data Unit)          |
    +-----------------------------------------------------------+ */}
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="S-Format (Supervisory Format)">
      <p>Used for numbered supervisory functions, like acknowledging received I-format frames. Contains a receive sequence number (N(R)).</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm">
      APCI (Application Protocol Control Information)
    {/* +-----------------------------------------------------------+
    | APCI (Application Protocol Control Information)           |
    +-----------------------------------------------------------+ */}
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="U-Format (Unnumbered Format)">
      <p>Used for unnumbered link layer control functions, such as STARTDT, STOPDT, and TESTFR.</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm">
      APCI (Application Protocol Control Information )
    {/* +----------------------------------------------------------+
    | APCI (Application Protocol Control Information)           |
    +-----------------------------------------------------------+ */}
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="ASDU (Application Service Data Unit)">
        <p>The ASDU carries the actual user data and consists of a Data Unit Identifier and one or multiple Information Objects.</p>
        <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Type Identification (Type ID):</strong> Specifies the type of information (e.g., measured value, command).</li>
            <li><strong>Variable Structure Qualifier (VSQ):</strong> Indicates the number of information objects.</li>
            <li><strong>Cause of Transmission (COT):</strong> Specifies the reason for sending the ASDU (e.g., spontaneous, cyclic).</li>
            <li><strong>Common Address of ASDU (CA):</strong> Identifies the station address.</li>
            <li><strong>Information Object Address (IOA):</strong> Identifies the specific data point.</li>
        </ul>
    </CollapsibleSection>
  </div>
);

const DataTypes = () => (
  <div className="space-y-6 text-lg">
    <section>
      <h2 className="text-2xl font-semibold mb-2">Common Data Types (ASDU Types)</h2>
      <p>IEC 104 defines a set of standardized data types, known as Application Service Data Unit (ASDU) types or Type Identification, to represent information from the field. These types are identified by a decimal value.</p>
    </section>

    <CollapsibleSection title="Process Information (Monitoring Direction)">
      <p>Data sent from the controlled station (slave) to the controlling station (master).</p>
      <table className="w-full text-left border-collapse mt-4">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type ID</th>
            <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">1 (M_SP_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Single-point information</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">3 (M_DP_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Double-point information</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">9 (M_ME_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Measured value, normalized value</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">11 (M_ME_NB_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Measured value, scaled value</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">13 (M_ME_NC_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Measured value, short floating point number</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">15 (M_IT_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Integrated totals (counters)</td></tr>
        </tbody>
      </table>
    </CollapsibleSection>

    <CollapsibleSection title="Process Information (Control Direction)">
      <p>Data sent from the controlling station (master) to the controlled station (slave).</p>
      <table className="w-full text-left border-collapse mt-4">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type ID</th>
            <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">45 (C_SC_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Single command</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">46 (C_DC_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Double command</td></tr>
          <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">48 (C_SE_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Set point command, normalized value</td></tr>
        </tbody>
      </table>
    </CollapsibleSection>

    <CollapsibleSection title="System Information">
        <table className="w-full text-left border-collapse mt-4">
            <thead>
                <tr>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type ID</th>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">70 (M_EI_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">End of initialization</td></tr>
                <tr><td className="border-b border-gray-200 dark:border-gray-700 p-2">100 (C_IC_NA_1)</td><td className="border-b border-gray-200 dark:border-gray-700 p-2">Interrogation command</td></tr>
            </tbody>
        </table>
    </CollapsibleSection>
  </div>
);

const CommunicationParameters = () => (
    <div className="space-y-6 text-lg">
        <section>
            <h2 className="text-2xl font-semibold mb-2">Communication Parameters (t0, t1, t2, t3, k, w)</h2>
            <p>
                The IEC 60870-5-104 protocol utilizes several communication parameters to manage data transmission and connection integrity. These parameters include various timeouts and window sizes, crucial for reliable operation in telecontrol systems.
            </p>
        </section>

        <CollapsibleSection title="t0 (Connection Establishment Timeout)">
            <p>
                Defines the maximum acceptable time (in seconds) for a TCP/IP connection attempt. If a connection is not established within this time, the driver typically closes the connection and attempts another.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Typical Value:</strong> 30 seconds</li>
                <li><strong>Range:</strong> 1 to 255 seconds</li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="t1 (APDU Timeout / Send or Test APDU Timeout)">
            <p>
                Specifies the maximum amount of time a master station waits for an acknowledgment (ACK) to a transmitted Application Protocol Data Unit (APDU). If no confirmation is received within this period, the master assumes data loss and may retransmit.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Typical Value:</strong> 15 seconds</li>
                <li><strong>Range:</strong> 1 to 255 seconds</li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="t2 (APDU Acknowledge Timeout / RX Timeout)">
            <p>
                Defines the maximum idle time after receiving an APDU before the slave outstation must send a response to the master to confirm successful reception. It's also described as the time to wait before sending a supervisory APDU ACK.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Constraint:</strong> t2 must be less than t1.</li>
                <li><strong>Typical Value:</strong> 10 seconds</li>
                <li><strong>Range:</strong> 1 ms to 60 s</li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="t3 (Idle Timeout / Test Interval)">
            <p>
                Sets the maximum waiting time for any information to arrive (in case of an established TCP/IP connection) before a test frame (TEST-FR) is sent. It's used to detect device connectivity during periods of inactivity.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Constraint:</strong> t0 must be higher than t3 to supervise communication status when there is no data.</li>
                <li><strong>Typical Value:</strong> 20 seconds</li>
                <li><strong>Range:</strong> 1 second to 48 hours</li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="k (Maximum Transmitted APDUs / Maximum Unacknowledged Transmitted APDUs)">
            <p>
                Specifies the maximum number of unconfirmed APDUs that can be transmitted by a station before it must wait for an acknowledgment from the receiving station. It ensures flow control and prevents the sender from overwhelming the receiver.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Typical Value:</strong> 12 APDUs</li>
                <li><strong>Range:</strong> 1 to 32767 APDUs</li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="w (Maximum Received APDUs / Latest Acknowledge APDUs)">
            <p>
                Defines the maximum number of APDUs a station can receive before it sends a confirmation (acknowledgment) back to the sender. It works in conjunction with t2 to manage acknowledgments.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Constraint:</strong> w should be at most two-thirds of k.</li>
                <li><strong>Typical Value:</strong> 8 APDUs</li>
                <li><strong>Range:</strong> 1 to 32767 APDUs</li>
            </ul>
        </CollapsibleSection>
    </div>
);


const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:bg-gray-900 text-black dark:text-white rounded-md">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProtocolPage;