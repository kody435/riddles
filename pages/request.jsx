import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { app, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";

const dbInstance = collection(database, "requests");
export default function Request() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Movies");
  const [year, setYear] = useState("");
  const [imdb, setImdb] = useState("");
  const [fulfilled, setFulfilled] = useState("No");

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const addRequest = (e) => {
    if (name === "") {
      toast.error("Please enter a name");
      return;
    } else if (year === "") {
      toast.error("Please enter a year");
      return;
    } else if (year.length !== 4) {
      toast.error("Please enter a valid year");
      return;
    } else if (year < 1980 || year > 2023) {
      toast.error("Please enter a valid year");
      return;
    } else {
      addDoc(dbInstance, {
        name: name,
        category: category,
        year: year,
        imdb: imdb,
        fulfilled: fulfilled,
      })
        .then(async () => {
          setName("");
          setCategory("Movies");
          setYear("");
          setImdb("");
          toast.success("Request added");
          await sleep(2000);
          router.push("/requested");
        })
    }
  };

  return (
    <div className="isolate bg-black h-screen px-6 py-24 -z-10 sm:py-32 lg:px-8">
      <Toaster />
      <div
        className="absolute inset-x-10 top-[110rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl py-2 ">
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
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              Name of the Movie or Series<span className="text-red-500">*</span>
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
                required
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              Release Year<span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                value={year}
                required
                onChange={(e) => setYear(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-200"
            >
              IMDB Link / ID <span className="text-gray-400">(optional)</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={imdb}
                onChange={(e) => setImdb(e.target.value)}
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
        <div className="text-white text-lg flex justify-center items-center mt-10 flex-col sm:flex-row">
          <div>Check if already requested? &nbsp;</div>
          <Link
            href="/requested"
            className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          >
            REQUESTED ↗
          </Link>
        </div>
      </form>
    </div>
  );
}
