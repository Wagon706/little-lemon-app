export default function ConfirmationPage() {
    return (
      <section className="confirmation">
        <h1>Your booking is confirmed!</h1>
        <div className="confirmation-actions">
          <p>RECEIVE YOUR BOOKING DETAILS!</p>
          <button className="btn-yellow">Receive Email</button>
          <button className="btn-yellow">Receive SMS</button>
          <button className="btn-red">Cancel Booking</button>
          <button className="btn-black">Contact Us!</button>
        </div>
        <footer>Copyright © Little Lemon</footer>
      </section>
    );
  }
  