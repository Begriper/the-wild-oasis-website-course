import DeleteReservation from "@/app/_components/DeleteReservation";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
    const {
        id,
        guestId,
        startDate,
        endDate,
        numNights,
        totalPrice,
        numGuests,
        status,
        created_at,
        cabins: { name, image },
    } = booking;

    return (
        <div className="flex border border-primary-800">
            <div className="relative h-32 aspect-square">
                <Image
                    src={image}
                    alt={`Cabin ${name}`}
                    fill
                    className="object-cover border-r border-primary-800"
                />
            </div>

            <div className="flex flex-col flex-grow px-6 py-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                        {numNights} nights in Cabin {name}
                    </h3>
                    {isPast(new Date(startDate)) ? (
                        <span className="flex items-center px-3 text-xs font-bold text-yellow-200 uppercase bg-yellow-800 rounded-sm h-7">
                            past
                        </span>
                    ) : (
                        <span className="flex items-center px-3 text-xs font-bold text-green-200 uppercase bg-green-800 rounded-sm h-7">
                            upcoming
                        </span>
                    )}
                </div>

                <p className="text-lg text-primary-300">
                    {format(new Date(startDate), "EEE, MMM dd yyyy")} (
                    {isToday(new Date(startDate))
                        ? "Today"
                        : formatDistanceFromNow(startDate)}
                    ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
                </p>

                <div className="flex items-baseline gap-5 mt-auto">
                    <p className="text-xl font-semibold text-accent-400">
                        ${totalPrice}
                    </p>
                    <p className="text-primary-300">&bull;</p>
                    <p className="text-lg text-primary-300">
                        {numGuests} guest{numGuests > 1 && "s"}
                    </p>
                    <p className="ml-auto text-sm text-primary-400">
                        Booked{" "}
                        {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
                    </p>
                </div>
            </div>

            <div className="flex flex-col border-l border-primary-800 w-[100px]">
                {!isPast(startDate) ? (
                    <>
                        <Link
                            href={`/account/reservations/edit/${id}`}
                            className="flex items-center flex-grow gap-2 px-3 text-xs font-bold uppercase transition-colors border-b group text-primary-300 border-primary-800 hover:bg-accent-600 hover:text-primary-900"
                        >
                            <PencilSquareIcon className="w-5 h-5 transition-colors text-primary-600 group-hover:text-primary-800" />
                            <span className="mt-1">Edit</span>
                        </Link>
                        <DeleteReservation bookingId={id} onDelete={onDelete} />
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default ReservationCard;
