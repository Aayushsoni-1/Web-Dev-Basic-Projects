# 🌦️ Atmos – React Weather App

**Atmos** is my first **React**! project.It's a dynamic, responsive weather application that fetches real-time weather data using the **OpenWeather API**. Through this project, I explored the fundamentals of component-based architecture in React, learned how to manage state and props, handle API calls, and dynamically update UI and styling based on external data.

---

## 📚 What I Learned

- ✅ **React Fundamentals**: How to build reusable components like `Navbar`, `Main`, and `Footer`.
- ✅ **State Management**: Using `useState` and `useEffect` to manage city input and API data.
- ✅ **Props**: Passing data between parent (`App`) and child components (`Main`, `Navbar`).
- ✅ **API Integration**: Fetched real-time weather using OpenWeatherMap API.
- ✅ **Dynamic Styling**: Used JavaScript logic to toggle background themes for day/night.
- ✅ **Tailwind CSS**: Practiced utility-first CSS for responsive, clean UI design.

---

## 🛠 Tech Stack

- **React (with Vite or CRA)**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **OpenWeatherMap API**
- **HTML & CSS**

---

## 📁 Folder Structure


src/
├── App.jsx               # Main React component handling state
├── App.css               # Custom styles for layout
├── index.css             # Tailwind CSS import
├── components/
│   ├── Navbar.jsx        # Top bar with search input
│   ├── Main.jsx          # Displays weather info, handles API call
│   └── Footer.jsx        # Footer with credits
└── assets/
    └── cloudy.png        # Cloud icon used in Navbar (optional image)
    └── day.jpg           #day background 
    └── night.jpeg        #night background