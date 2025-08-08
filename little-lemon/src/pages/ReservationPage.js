export default function ReservationPage() {
    return (
      <section className="reservation">
        <div className="restaurant-info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Monday - 8:30 am to 9 pm</p>
          <p>Tuesday - 8:30 am to 9 pm</p>
          <p>Wednesday - 8:30 am to 9 pm</p>
          <p>Thursday - 8:30 am to 9 pm</p>
          <p>Friday - 8:30 am to 7 pm</p>
          <p>Saturday - 8:30 am to 7 pm</p>
          <p>Sunday - Closed</p>
          <p>301 W Lake St, Chicago, IL</p>
        </div>
  
        <form className="booking-form">
          <label>Full Name *</label>
          <input type="text" placeholder="i.e John Doe" required />
  
          <label>Email *</label>
          <input type="email" placeholder="i.e johndoe@gmail.com" required />
  
          <label>Phone</label>
          <input type="tel" placeholder="i.e +1 --- --- 582" />
  
          <label>Date *</label>
          <input type="date" required />
  
          <label>Time *</label>
          <input type="time" required />
  
          <label>Number of diners *</label>
          <select required>
            <option value="">Select Value</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
  
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>
    );
  }
  