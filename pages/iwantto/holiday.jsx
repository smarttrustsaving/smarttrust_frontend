import Basic from "../../client/layouts/Basic";
import PrimaryLink from "../../client/layouts/PrimaryLink";

const Holiday = () => {
  return (
    <Basic title="Go on a holiday" image="/i_want_to/holiday.jpg">
      <p className="pb-5">
        There’s a great big world out there just waiting to be explored. And
        whether you are looking to tick off your bucket list destinations, relax
        on a deserted island, or take your family to Disneyland, there’s a lot
        to consider when planning a holiday.
      </p>

      <PrimaryLink>Selecting your destination</PrimaryLink>
      <p>
        Researching and planning your trip can be half the fun. And with so much
        information available online, it has never been easier to find a great
        deal and read reviews before booking your holiday.
      </p>

      <PrimaryLink>Funding your trip</PrimaryLink>
      <p>
        Once you have decided where to go, you might want to set a savings goal,
        make a savings plan or maximise your savings with a bonus saver account
        or term deposit.
      </p>

      <p>
        Alternatively, you might want to seize the day and travel sooner by
        using a personal loan to help cover your travel expenses. To discuss a
        personal loan, contact us, book a Mobile Lender or visit a Service
        Centre.
      </p>

      <PrimaryLink>Spending money</PrimaryLink>
      <p>
        Regardless of where you are travelling, you need to decide how you plan
        to pay for expenses along the way. Even if you pre-book your flights,
        accommodation and tours, you will still need spending money available
        for meals, tips, gifts and activities.
      </p>

      <p>
        You should also consider your destination. Some countries might not
        offer easy or reliable access to ATMs or electronic payment terminals,
        while in others it might be unsafe and impractical to carry around large
        amounts of cash.
      </p>

      <p>
        Given this, we offer a range of solutions including Visa cards and
        foreign currency options, to help take the stress of out your holiday.
      </p>

      <PrimaryLink>Travel Insurance</PrimaryLink>
      <p>
        Holidays don't always go as planned. You may encounter medical expenses,
        trip cancellations or lost luggage. You may even require travel
        insurance to be able to enter certain countries, or travel on some
        cruises or tours.
      </p>
    </Basic>
  );
};

export default Holiday;
