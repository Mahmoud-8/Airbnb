import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import { SafeUser } from "./types";

interface HomeProps {
  searchParams: IListingsParams;
  listings: any[]; // Adjust the type as needed
  currentUser: SafeUser | null;
}

const Home = ({ listings, currentUser }: HomeProps) => {
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export async function getServerSideProps(context: any) {
  const searchParams: IListingsParams = {
    userId: context.query.userId,
    guestCount: context.query.guestCount,
    // Add other parameters based on your needs...
  };

  try {
    const listings = await getListings(searchParams);
    const currentUser: SafeUser | null = await getCurrentUser();

    return {
      props: {
        searchParams,
        listings,
        currentUser,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        searchParams,
        listings: [],
        currentUser: null,
      },
    };
  }
}

export default Home;
