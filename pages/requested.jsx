import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { database } from "../firebaseConfig";

const colRef = collection(database, "requests");
export default function Requests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      await getDocs(colRef)
        .then((data) => {
          const request = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setRequests(request);
          console.log(request);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };
    getRequests();
  }, []);

  return (
    <div className="h-screen bg-black">
      <h1 className="mx-2 md:mx-4 mt-6 mb-9 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-sky-500 to-emerald-500  ">
        Requested Films and Series
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {requests.map((request) => (
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
              <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <dt class="text-md font-medium text-gray-300">
                    Release Year: {request.year}
                  </dt>
                </div>
              </dl>
            </div>

            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
