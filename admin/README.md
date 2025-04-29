#  Admin Panel - MakeMyTrip Clone

This is the admin dashboard for the MakeMyTrip MERN Stack Booking System. The admin panel allows only authenticated **admin users** to access full details of users, rooms, and hotel bookings, with full **control over CRUD operations**.

---

##  Admin-Only Access

- Only users with the role `"admin"` can:
  - View **all user data**
  - View **all room and hotel details**
  - Perform **Delete**, **Update**, or **Add** actions
  - Access protected admin routes via authentication

---

##  Admin Features

- ✅ View complete list of users with ID, email, role, etc.
- ✅ View hotel & room listings with booking details
- ✅ Delete or update room and user records
- ✅ All endpoints are **secured with JWT** and role-based middleware
- ✅ Admin dashboard is **hidden from normal users**

---

## UI Preview

![image](https://github.com/user-attachments/assets/354a2b93-08ec-4ecb-a5db-f925987e5fa7)
![image](https://github.com/user-attachments/assets/cdb7d2a4-ffbd-41c2-af1a-31b871734e2e)
![image](https://github.com/user-attachments/assets/886d95e1-4244-4031-8248-5bb43c6dd28e)


---

## Tech Features 

- **JWT Token-Based Authentication**
- **Role-Based Access Control** (`isAdmin` check)
- **Secure Admin Routes** via middleware
- **React Protected Routes** for frontend admin dashboard

