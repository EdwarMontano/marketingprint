import React, { useState, useEffect } from "react";

const GetRequestHooks = () => {
  // function GetRequestHooks() {
  const [totalReactPackages, setTotalReactPackages] = useState(null);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      "https://api.countapi.xyz/update/marketingprint.com.co/15marketingprint15/?amount=1"
    )
      .then((response) => response.json())
      .then((data) => setTotalReactPackages(data.value));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <div>
      <a
        href="#"
        className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-500"
      >
        {totalReactPackages}
      </a>
    </div>
  );
};

export default GetRequestHooks;
