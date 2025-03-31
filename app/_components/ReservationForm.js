"use client";

import { useReservation } from "@/app/_components/ReservationContext";
import SubmitButton from "@/app/_components/SubmitButton";
import { createBooking } from "@/app/_lib/actions";
import { differenceInBusinessDays } from "date-fns";

function ReservationForm({ cabin, user }) {
    const { range, resetRange } = useReservation();
    const { maxCapacity, regularPrice, discount, id } = cabin;

    const startDate = range.from;
    const endDate = range.to;

    const numNights = differenceInBusinessDays(endDate, startDate);
    const cabinPrice = numNights * (regularPrice - discount);

    const bookingData = {
        startDate,
        endDate,
        numNights,
        cabinPrice,
        cabinId: id,
    };

    const createBookingWithData = createBooking.bind(null, bookingData);

    return (
        <div className="scale-[1.01]">
            <div className="flex items-center justify-between px-16 py-2 bg-primary-800 text-primary-300">
                <p>Logged in as</p>

                <div className="flex items-center gap-4">
                    <img
                        // Important to display google profile images
                        referrerPolicy="no-referrer"
                        className="h-8 rounded-full"
                        src={user.image}
                        alt={user.name}
                    />
                    <p>{user.name}</p>
                </div>
            </div>

            <form
                // action={createBookingWithData}
                action={async (formData) => {
                    await createBookingWithData(formData);
                    resetRange();
                }}
                className="flex flex-col gap-5 px-16 py-10 text-lg bg-primary-900"
            >
                <div className="space-y-2">
                    <label htmlFor="numGuests">How many guests?</label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
                        required
                    >
                        <option value="" key="">
                            Select number of guests...
                        </option>
                        {Array.from(
                            { length: maxCapacity },
                            (_, i) => i + 1
                        ).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="observations">
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        name="observations"
                        id="observations"
                        className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
                        placeholder="Any pets, allergies, special requirements, etc.?"
                    />
                </div>

                <div className="flex items-center justify-end gap-6">
                    {!(startDate && endDate) ? (
                        <p className="text-base text-primary-300">
                            Start by selecting dates
                        </p>
                    ) : (
                        <SubmitButton pendingLabel="Reserving...">
                            Reserve now
                        </SubmitButton>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;
