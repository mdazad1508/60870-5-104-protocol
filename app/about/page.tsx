const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 text-transparent bg-clip-text">
          About IEC 60870-5-104 Convertor
        </h1>

        <div className="space-y-6 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-2">What is this project?</h2>
            <p>
              The 104 Convertor is a web-based tool designed to help developers, engineers, and students understand the
              IEC 60870-5-104 protocol, a standard for telecontrol and remote monitoring in power systems. This
              interactive application provides a visual representation of the protocol's data structures and allows
              for easy conversion between different address formats used in the protocol.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How is it useful?</h2>
            <p>
              <strong>Address Conversion:</strong> The ability to convert between ASDU (Application Service Data Unit)
                addresses and their corresponding CASDU1/CASDU2 formats, as well as between IOA (Information Object
                Address) and IOA1/2/3 formats. This is a common source of confusion and errors when working with the
                protocol.
             
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Visual Packet Structure:</strong> A clear and interactive diagram of the IEC 104 data packet,
                making it easy to understand the different fields and their functions.
              </li>
              <li>
              The IEC 104 protocol can be complex and difficult to grasp, especially for newcomers. This tool aims to
              simplify the learning process by providing:
              </li>
              <li>
                <strong>Educational Resource:</strong> A valuable resource for students and professionals who are new to
                the IEC 104 protocol, helping them to quickly get up to speed with its intricacies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
            <p>
              This project is built with modern web technologies, including:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Next.js (React framework)</li>
              <li>Tailwind CSS (for styling)</li>
              <li>TypeScript</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
