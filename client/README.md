# Client Functionality - MakeMyTrip Clone

This is the user-facing part of the **MERN Stack Hotel & Flight Reservation System**, where users can search for hotels in specific cities, view room availability, and complete reservations by selecting dates and room numbers.


## Client Access Flow

1. **User Login/Register:**
   - Users can sign up or log in via the authentication system.
   - JWT token is generated and stored (e.g., via cookies/localStorage).

2. **Search & View Hotels:**
   - Users can search for hotels based on **city names**.
   - Filter options such as date, price, or type may be available.

3. **Select Room and Date:**
   - After selecting a hotel, users can:
     - View available **room types**
     - Choose **check-in and check-out dates** using the **React Calendar**
     - Select **available room numbers**

4. **Reserve Hotel:**
   - Once room and dates are selected, clicking the **Reserve** button confirms the booking.
   - Booking data is stored in MongoDB.
   - User is shown a confirmation of the reservation.

---

## ✅ Features for Users

- Secure login using JWT
- Browse hotels by city
- Select check-in/check-out dates via date picker
- Choose available rooms
- Book reservations instantly
---

## 📸 Client UI Screenshots
![image](https://github.com/user-attachments/assets/70030b87-7c32-4270-a58a-c70ae2e73018)
![image](https://github.com/user-attachments/assets/ce918eac-d1bf-4c27-ab63-1543fe78b341)
![image](https://github.com/user-attachments/assets/3ef51cfc-3016-40ba-a709-733ce46ed45a)


## Technologies Used

- **React** with React Router
- **Context API** for global state management
- **Axios** for communicating with backend APIs
- **React Calendar** for date selection
- **JWT Auth** for user sessions

