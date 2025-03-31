"use client";

import { useReservation } from "@/app/_components/ReservationContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";

function ReservationReminder() {
    const { range, resetRange } = useReservation();

    if (!range.from || !range.to) return null;

    return (
        <div className="fixed flex items-center gap-8 px-8 py-5 font-semibold -translate-x-1/2 rounded-full shadow-xl bottom-6 left-1/2 bg-accent-500 text-primary-800 text shadow-slate-900">
            <p>
                <span>👋</span> Don&apos;f forget to reserve your dates <br />{" "}
                from {format(new Date(range.from), "MMM dd yyyy")} to{" "}
                {format(new Date(range.to), "MMM dd yyyy")}
            </p>
            <button
                className="p-1 transition-all rounded-full hover:bg-accent-600"
                onClick={resetRange}
            >
                <XMarkIcon className="w-5 h-5" />
            </button>
        </div>
    );
}

export default ReservationReminder;
