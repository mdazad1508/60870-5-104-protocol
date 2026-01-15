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
      <div className="max-w-6xl mx-auto text-center">
       <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 text-transparent bg-clip-text">
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
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm whitespace-pre-wrap break-words">
  Byte 1: Start Character (0x68)
  Byte 2: APDU Length (max 253)
  Bytes 3-6: Control Fields
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="I-Format (Information Format)">
      <p>Used for numbered information transfer, carrying user data in an ASDU. Includes send and receive sequence numbers (N(S) and N(R)) for reliable data exchange.</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm whitespace-pre-wrap break-words">
        <p>
        APCI(Application protocol control information) + ASDU(Application service data unit)
        </p>
    {/* +-----------------------------------------------------------+
    | APCI (Application Protocol Control Information)           |
    +-----------------------------------------------------------+
    | ASDU (Application Application Service Data Unit)          |
    +-----------------------------------------------------------+ */}
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="S-Format (Supervisory Format)">
      <p>Used for numbered supervisory functions, like acknowledging received I-format frames. Contains a receive sequence number (N(R)).</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm whitespace-pre-wrap break-words">
      APCI (Application Protocol Control Information)
    {/* +-----------------------------------------------------------+
    | APCI (Application Protocol Control Information)           |
    +-----------------------------------------------------------+ */}
      </pre>
    </CollapsibleSection>
    <CollapsibleSection title="U-Format (Unnumbered Format)">
      <p>Used for unnumbered link layer control functions, such as STARTDT, STOPDT, and TESTFR.</p>
      <pre className="bg-gray-800 p-4 rounded-md mt-4 text-sm whitespace-pre-wrap break-words">
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

const DataTypes = () => {
  const monitoringDirection = [
    { type: 'M_SP_NA_1', dec: '1', description: 'Single-point information' },
    { type: 'M_SP_TA_1', dec: '2', description: 'Single-point information with time tag' },
    { type: 'M_DP_NA_1', dec: '3', description: 'Double-point information' },
    { type: 'M_DP_TA_1', dec: '4', description: 'Double-point information with time tag' },
    { type: 'M_ST_NA_1', dec: '5', description: 'Step position information' },
    { type: 'M_ST_TA_1', dec: '6', description: 'Step position information with time tag' },
    { type: 'M_BO_NA_1', dec: '7', description: 'Bitstring of 32 bit' },
    { type: 'M_BO_TA_1', dec: '8', description: 'Bitstring of 32 bit with time tag' },
    { type: 'M_ME_NA_1', dec: '9', description: 'Measured value, normalised value' },
    { type: 'M_ME_TA_1', dec: '10', description: 'Measured value, normalized value with time tag' },
    { type: 'M_ME_NB_1', dec: '11', description: 'Measured value, scaled value' },
    { type: 'M_ME_TB_1', dec: '12', description: 'Measured value, scaled value wit time tag' },
    { type: 'M_ME_NC_1', dec: '13', description: 'Measured value, short floating point number' },
    { type: 'M_ME_TC_1', dec: '14', description: 'Measured value, short floating point number with time tag' },
    { type: 'M_IT_NA_1', dec: '15', description: 'Integrated totals' },
    { type: 'M_IT_TA_1', dec: '16', description: 'Integrated totals with time tag' },
    { type: 'M_EP_TA_1', dec: '17', description: 'Event of protection equipment with time tag' },
    { type: 'M_EP_TB_1', dec: '18', description: 'Packed start events of protection equipment with time tag' },
    { type: 'M_EP_TC_1', dec: '19', description: 'Packed output circuit information of protection equipment with time tag' },
    { type: 'M_PS_NA_1', dec: '20', description: 'Packed single point information with status change detection' },
    { type: 'M_ME_ND_1', dec: '21', description: 'Measured value, normalized value without quality descriptor' },
];

const monitoringDirectionCP56Time2a = [
    { type: 'M_SP_TB_1', dec: '30', description: 'Single-point information with time tag CP56Time2a' },
    { type: 'M_DP_TB_1', dec: '31', description: 'Double-point information with time tag CP56Time2a' },
    { type: 'M_ST_TB_1', dec: '32', description: 'Step position information with time tag CP56Time2a' },
    { type: 'M_BO_TB_1', dec: '33', description: 'Bitstring of 32 bit with time tag CP56Time2a' },
    { type: 'M_ME_TD_1', dec: '34', description: 'Measured value, normalised value with time tag CP56Time2a' },
    { type: 'M_ME_TE_1', dec: '35', description: 'Measured value, scaled value with time tag CP56Time2a' },
    { type: 'M_ME_TF_1', dec: '36', description: 'Measured value, short floating point number with time tag CP56Time2a' },
    { type: 'M_IT_TB_1', dec: '37', description: 'Integrated totals with time tag CP56Time2a' },
    { type: 'M_EP_TD_1', dec: '38', description: 'Event of protection equipment with time tag CP56Time2a' },
    { type: 'M_EP_TE_1', dec: '39', description: 'Packed start events of protection equipment with time tag CP56Time2a' },
    { type: 'M_EP_TF_1', dec: '40', description: 'Packed output circuit information of protection equipment with time tag CP56Time2a' },
];

const controlDirection = [
    { type: 'C_SC_NA_1', dec: '45', description: 'Single command' },
    { type: 'C_DC_NA_1', dec: '46', description: 'Double command' },
    { type: 'C_RC_NA_1', dec: '47', description: 'Regulating step command' },
    { type: 'C_SE_NA_1', dec: '48', description: 'Set-point Command, normalised value' },
    { type: 'C_SE_NB_1', dec: '49', description: 'Set-point Command, scaled value' },
    { type: 'C_SE_NC_1', dec: '50', description: 'Set-point Command, short floating point number' },
    { type: 'C_BO_NA_1', dec: '51', description: 'Bitstring 32 bit command' },
];

const controlDirectionCP56Time2a = [
    { type: 'C_SC_TA_1', dec: '58', description: 'Single command with time tag CP56Time2a' },
    { type: 'C_DC_TA_1', dec: '59', description: 'Double command with time tag CP56Time2a' },
    { type: 'C_RC_TA_1', dec: '60', description: 'Regulating step command with time tag CP56Time2a' },
    { type: 'C_SE_TA_1', dec: '61', description: 'Measured value, normalised value command with time tag CP56Time2a' },
    { type: 'C_SE_TB_1', dec: '62', description: 'Measured value, scaled value command with time tag CP56Time2a' },
    { type: 'C_SE_TC_1', dec: '63', description: 'Measured value, short floating point number command with time tag CP56Time2a' },
    { type: 'C_BO_TA_1', dec: '64', description: 'Bitstring of 32 bit command with time tag CP56Time2a' },
];

const systemInformation = [
    { type: 'M_EI_NA_1', dec: '70', description: 'End of Initialisation' },
    { type: 'C_IC_NA_1', dec: '100', description: 'Interrogation command' },
    { type: 'C_CI_NA_1', dec: '101', description: 'Counter interrogation command' },
    { type: 'C_RD_NA_1', dec: '102', description: 'Read command' },
    { type: 'C_CS_NA_1', dec: '103', description: 'Clock synchronisation command' },
    { type: 'C_TS_NA_1', dec: '104', description: 'Test command' },
    { type: 'C_RP_NA_1', dec: '105', description: 'Reset process command' },
    { type: 'C_CD_NA_1', dec: '106', description: 'Delay acquisition command' },
    { type: 'C_TS_TA_1', dec: '107', description: 'Test command with time tag CP56Time2a' },
];

const parameterCommands = [
    { type: 'P_ME_NA_1', dec: '110', description: 'Parameter of measured values, normalized value' },
    { type: 'P_ME_NB_1', dec: '111', description: 'Parameter of measured values, scaled value' },
    { type: 'P_ME_NC_1', dec: '112', description: 'Parameter of measured values, short floating point number' },
    { type: 'P_AC_NA_1', dec: '113', description: 'Parameter activation' },
];

const fileTransfer = [
    { type: 'F_FR_NA_1', dec: '120', description: 'File ready' },
    { type: 'F_SR_NA_1', dec: '121', description: 'Section ready' },
    { type: 'F_SC_NA_1', dec: '122', description: 'Call directory, select file, call file, call section' },
    { type: 'F_LS_NA_1', dec: '123', description: 'Last section, last segment' },
    { type: 'F_FA_NA_1', dec: '124', description: 'ACK file, ACK section' },
    { type: 'F_SG_NA_1', dec: '125', description: 'Segment' },
    { type: 'F_DR_TA_1', dec: '126', description: 'Directory' },
];

const reservedTypes = [
    { type: 'ASDU_TYPEUNDEF', dec: '0', description: 'Not used' },
    { type: 'ASDU_TYPE_22..29', dec: '22..29', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_41..44', dec: '41..44', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_52..57', dec: '52..57', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_65..69', dec: '65..69', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_71..99', dec: '71..99', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_108..109', dec: '108..109', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_114..119', dec: '114..119', description: 'Reserved (standard area)' },
    { type: 'ASDU_TYPE_127..255', dec: '127..255', description: 'Reserved (user area)' },
];
  
  return (
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
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>

              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {monitoringDirection.map(item => (
              <tr key={item.type}>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>

                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CollapsibleSection>
  
      <CollapsibleSection title="Process Information (Monitoring Direction with Time Tag CP56Time2a)">
        <p>Data sent from the controlled station (slave) to the controlling station (master).</p>
        <table className="w-full text-left border-collapse mt-4">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>

              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {monitoringDirectionCP56Time2a.map(item => (
              <tr key={item.type}>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>

                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="Process Information (Control Direction)">
        <p>Data sent from the controlling station (master) to the controlled station (slave).</p>
        <table className="w-full text-left border-collapse mt-4">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>

              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {controlDirection.map(item => (
              <tr key={item.type}>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>

                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="Process Information (Control Direction with Time Tag CP56Time2a)">
        <p>Data sent from the controlling station (master) to the controlled station (slave).</p>
        <table className="w-full text-left border-collapse mt-4">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>

              <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {controlDirectionCP56Time2a.map(item => (
              <tr key={item.type}>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>

                <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="System Information">
        <table className="w-full text-left border-collapse mt-4">
            <thead>
                <tr>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>
      
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
                </tr>
            </thead>
            <tbody>
                {systemInformation.map(item => (
                    <tr key={item.type}>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>
        
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="Parameter Commands">
        <table className="w-full text-left border-collapse mt-4">
            <thead>
                <tr>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>
      
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
                </tr>
            </thead>
            <tbody>
                {parameterCommands.map(item => (
                    <tr key={item.type}>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>
        
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="File Transfer">
        <table className="w-full text-left border-collapse mt-4">
            <thead>
                <tr>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>
      
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
                </tr>
            </thead>
            <tbody>
                {fileTransfer.map(item => (
                    <tr key={item.type}>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>
        
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </CollapsibleSection>

      <CollapsibleSection title="Reserved Types">
        <table className="w-full text-left border-collapse mt-4">
            <thead>
                <tr>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Type</th>
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Dec</th>
      
                    <th className="border-b-2 border-gray-200 dark:border-gray-700 p-2">Description</th>
                </tr>
            </thead>
            <tbody>
                {reservedTypes.map(item => (
                    <tr key={item.type}>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.type}</td>
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.dec}</td>
        
                        <td className="border-b border-gray-200 dark:border-gray-700 p-2">{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </CollapsibleSection>
    </div>
  );
}

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

type CollapsibleSectionProps = {
  title: string;
  children: React.ReactNode;
};


const CollapsibleSection = ({ title, children }:CollapsibleSectionProps) => {
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