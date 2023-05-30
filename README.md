# Song Sift

Song Sift is a web application that leverages machine learning, data processing, and APIs to provide powerful song analysis and recommendation features. It is designed to cater to music enthusiasts who are looking for personalized song recommendations and detailed insights into their favorite tracks.

## File Structure

```
.
└── SongSift
│   ├── public
│   │   └── logo.jpg
│   │   
│   ├── src
│   │   ├── assets
│   │   │   └── ...
│   │   ├── config
│   │   │   └── ...
│   │   ├── pages
│   │   │   └── components
│   │   │       └── ...
│   │   ├── styles
│   │   │   └── ...
│   │   └── ...
│   │   
│   ├── Backend
│   │   ├── main.py
│   │   ├── app
│   │   │   └── ...
│   │   └── ...
│   │   
│   ├── index.html
│   ├── package.json
│   ├── README.MD
│   ├── vite.config.js
│   ├── .eslintrc.cjs
│   ├── .hintrc
│   └── ...
└── ...
```

## Features

- **Trending-based Recommendations**: Utilizing the Shazam Core API, Song Sift offers trending-based song recommendations. By analyzing the latest music trends, users can discover popular tracks and stay up-to-date with the current music scene.

- **Machine Learning-based Similarity Recommendation**: With the help of scikit-learn, Song Sift employs machine learning techniques to provide personalized song recommendations based on user preferences. By training a model on a curated dataset of songs and their features, the application suggests songs that align with the user's musical taste.

- **Bard API Integration with Slash Commands**: Song Sift integrates the Bard API, offering a variety of slash commands that allow users to generate lyrics, obtain song information, and explore related songs and artists. These features enhance the overall music discovery experience and provide users with quick access to relevant information.

- **Google Login**: The application incorporates Google Login functionality, enabling users to securely authenticate using their Google accounts. This feature enhances user convenience and facilitates a seamless sign-in experience.

- **Music Searching and Music Player**: Song Sift provides a comprehensive music searching feature that allows users to search for songs, artists, or albums. Once a song is selected, users can enjoy their favorite tracks using the built-in music player.


## Tech Stacks Used

- **React**: A JavaScript library for building user interfaces. It is used in this project to create the frontend of the Song Sift application.

- **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python. It is used to create the backend API for the Song Sift application.


- **Python**: A high-level programming language, used extensively in this project for machine learning model training, data processing, and backend development.

- **Machine Learning Training Model**: The project includes a trained machine learning model for song analysis and recommendation.


- **Scikit-learn**: A popular machine learning library in Python, used for building and training machine learning models for song analysis.

- **Pandas**: A Python library used for data manipulation and analysis. It is used in this project for handling datasets.

- **Intel OneAPI**: A set of tools and frameworks for developing high-performance, cross-architecture applications. It is used in this project for optimized machine learning computations.

- **Vite**: A fast build tool for modern web applications. It is used in this project for fast development and building of the frontend.

- **Firebase**: A mobile and web application development platform. It is used in this project for authentication, hosting, and database services.

- **SCSS**: A popular extension of CSS, used in this project for styling the user interface.

- **ShazamCoreAPI**: An API for integrating Shazam music recognition functionality into applications.

- **BardAPI**: An API that provides access to a vast music library, allowing developers to retrieve information about songs, artists, albums, and more.

