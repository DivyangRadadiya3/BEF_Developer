import React from "react";
import { VscSaveAs } from "react-icons/vsc";
import MultipleSelect from "../MultiselectUi/MultiSelection";

export default function EditSubjectSection({ comfirm, setConfirm }) {
  return (
    <>
      <section className="inline-block mx-auto w-full bg-white rounded-lg space-y-6 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle ">
        <div className="text-left">
          <h3 className="mt-5 text-3xl font-semibold text-gray-900">
            Edit Subject Section
          </h3>
          <p className="mt-2 text-md text-gray-600">
            Enter the subject name to create a new subject for the class
            curriculum.
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-2 max-w-xs">
          <label
            htmlFor="subject"
            className="text-xl font-semibold text-gray-800 tracking-wide"
          >
            Subject name
          </label>
          <input
            className="text-base p-2 rounded-md border border-gray-400 focus:outline-none focus:border-indigo-500"
            type="text"
            id="subject"
            placeholder="Enter class name"
          />
        </div>
        <div className="space-y-4 border border-slate-300 rounded-lg p-4">
          <h3 className="mt-5 text-2xl text-left font-semibold text-gray-900">
            Add multiple subtopic
          </h3>
          <div className="max-w-lg">
            <MultipleSelect />
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <button
            className="inline-flex items-center space-x-2 rounded-lg px-2 py-2 text-md text-center uppercase text-white bg-orange-400 hover:bg-opacity-90 "
            // onClick={setConfirm}
          >
            <svg className="font-bold text-white w-4 h-4" viewBox="0 0 16 16">
              <VscSaveAs />
            </svg>
            <p className="font-semibold">save details</p>
          </button>
        </div>
      </section>
    </>
  );
}