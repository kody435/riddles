import { collection, getDocs, where, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { database } from "../firebaseConfig";

const colRef1 = collection(database, "requests");
export default function Requests() {
  const [requests1, setRequests1] = useState([]);
  const [requests2, setRequests2] = useState([]);
  
  useEffect(() => {
    const q1 = query(colRef1, where("fulfilled", "==", "No"));
    const getRequests1 = async () => {
      await getDocs(q1)
        .then((data) => {
          const request = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setRequests1(request);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };

    const q2 = query(colRef1, where("fulfilled", "==", "Yes"));
    const getRequests2 = async () => {
      await getDocs(q2)
        .then((data) => {
          const request = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setRequests2(request);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };

    getRequests1();
    getRequests2();
  }, []);

  return (
    <div className="h-screen bg-black">
      <h1 className="mx-2 md:mx-4 mt-6 mb-9 w-fit text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-sky-400 to-emerald-400 py-1 ">
        Requested Films and Series
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {requests1.map((request) => (
          <div
            key={request.id}
            class="relative rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 m-2 md:m-4"
          >
            <div class="flex flex-col">
              <div>
                <h3 class="text-xl font-bold text-gray-100 sm:text-xl">
                  {request.name}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-400">
                  {request.category}
                </p>
              </div>
              <dl class="mt-6 flex flex-col sm:gap-6">
                <div class="flex flex-col">
                  <dt class="text-md font-medium text-gray-300">
                    Release Year: {request.year}
                  </dt>
                  <dt class="text-md font-medium text-gray-300">
                    Fulfilled : {request.fulfilled}
                  </dt>
                </div>
              </dl>
            </div>
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          </div>
        ))}
      </div>

      <h2 className="text-gray-400 text-2xl md:text-3xl lg:text-4xl font-bold mt-16 md:mt-20 lg:mt-28 mx-2 md:mx-4 mb-5 ">
        Fulfilled Requests
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {requests2.map((request) => (
          <div
            key={request.id}
            class="relative rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8 m-2 md:m-4"
          >
            <div class="flex flex-col">
              <div>
                <h3 class="text-xl font-bold text-gray-400 sm:text-xl">
                  {request.name}
                </h3>

                <p class="mt-1 text-xs font-medium text-gray-400">
                  {request.category}
                </p>
              </div>
              <dl class="mt-6 flex flex-col sm:gap-6">
                <div class="flex flex-col">
                  <dt class="text-md font-medium text-gray-400">
                    Release Year: {request.year}
                  </dt>
                  <dt class="text-md font-medium text-gray-400">
                    Fulfilled : {request.fulfilled}
                  </dt>
                </div>
              </dl>
            </div>
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-700"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
