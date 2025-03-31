"use client";

import ReservationCard from "@/app/_components/ReservationCard";
import { deleteBooking } from "@/app/_lib/actions";
import { useOptimistic } from "react";

function ReservationList({ bookings, onDelete }) {
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (curBookings, bookingId) => {
            return curBookings.filter((booking) => booking.id !== bookingId);
        }
    );

    async function handleDelete(bookingId) {
        optimisticDelete(bookingId);
        await deleteBooking(bookingId);
    }

    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard
                    booking={booking}
                    onDelete={handleDelete}
                    key={booking.id}
                />
            ))}
        </ul>
    );
}

export default ReservationList;
