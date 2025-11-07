# Lystio Search Test

This project is a web application for searching properties using a dynamic search bar. It allows users to filter properties by location, category, and price range, and provides a seamless user experience with responsive design and smooth animations.

## Features

- **Dynamic Search Bar**: Users can enter a location, select a category, and set a price range to view matching listings.
- **Responsive Design**: The application is fully responsive, ensuring a great experience on desktop, tablet, and mobile devices.
- **Filters**: Users can filter results based on popular cities, districts, and predefined categories.
- **Price Histogram**: Visual representation of price data to help users understand market trends.
- **Recent Searches**: Displays a list of recent searches for quick access.

## Tech Stack

- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Mapbox**: Used for address autocomplete and displaying maps.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd lystio-search-test
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Mapbox token:

   ```
   MAPBOX_TOKEN=your_mapbox_token_here
   NEXT_PUBLIC_MAPBOX_SEARHCBOX_URL=https://api.mapbox.com/search/searchbox/v1
   API_BASE_URL=https://api.lystio.co
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.
