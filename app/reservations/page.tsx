import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();
    
    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You must be signed in to view your trips"
                    subtitle="Please login"
                />
            </ClientOnly>
        );
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (!reservations.length) {
        return (
            <ClientOnly>
                <EmptyState
                    title="You have no reservations"
                    subtitle="Try booking a trip"
                />
            </ClientOnly>
        );
        }


    return (
        <ClientOnly>
            <ReservationsClient 
            reservations={reservations}
            currentUser={currentUser}
            />
        </ClientOnly>
    )
}
export default ReservationsPage;