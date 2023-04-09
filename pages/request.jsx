import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const dbInstance = collection(database, "requests");
export default function Request() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Movies");
  const [year, setYear] = useState("");

  const addRequest = () => {
    addDoc(dbInstance, {
      name: name,
      category: category,
      year: year,
    }).then(() => {
      toast.success("Request added");
      setName("");
      setCategory("Movies");
      setYear("");
    }).catch((error) => {
      toast.error("Request failed");
    });
  };

  return (
    <div className="isolate bg-white h-screen px-6 py-24 -z-10 sm:py-32 lg:px-8">
      <Toaster />
      <div
        className="absolute inset-x-10 top-[110rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Request a Movie or Series
        </h2>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name of the Movie or Series
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Category
                </label>
                <select
                  id="country"
                  name="country"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>Movie</option>
                  <option>Serie</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Release Year
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div
            onClick={addRequest}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            REQUEST
          </div>
        </div>
      </form>
    </div>
  );
}
