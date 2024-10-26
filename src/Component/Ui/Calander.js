import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Calander({ confirm, setConfirm }) {
  return (
    <>
      <section className="fixed z-50 inset-0 overflow-hidden duration-300 ease-in-out">
        <div className="flex items-center justify-center min-h-screen text-center sm:block">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block mx-auto w-full bg-white rounded-lg space-y-4 p-4  text-left overflow-hidden shadow-xl transform transition-all sm:align-middle max-w-xl md:max-w-3xl">
            <div className="relative space-y-4 w-full flex flex-col items-center rounded-xl p-4 overflow-hidden text-slate-700 bg-white  bg-clip-border">
              <div className="w-full flex items-center text-nowrap">
                <p className="text-md w-full font-semibold text-slate-900 uppercase">
                  Start Date
                </p>
                <p className="text-md w-full font-semibold text-slate-900 uppercase">
                  End Date
                </p>
              </div>
              <div className="flex items-center  justify-around border-t border-gray-600 w-full py-4">
                <div className="border border-gray-400 rounded-lg p-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      onClick={setConfirm}
                      data-modal-toggle="deleteModal"
                      type="button"
                      className="py-2 px-4 w-full text-md font-medium text-gray-500 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={setConfirm}
                      className="py-2 px-4 w-full text-md font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-900"
                    >
                      Choose Time
                    </button>
                  </div>
                </div>
                <div className="border border-gray-400 rounded-lg p-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      onClick={setConfirm}
                      data-modal-toggle="deleteModal"
                      type="button"
                      className="py-2 px-4 w-full text-md font-medium text-gray-500 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={setConfirm}
                      className="py-2 px-4 w-full text-md font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-900"
                    >
                      Choose Time
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
