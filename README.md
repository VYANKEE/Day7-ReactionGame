# Reaction Time Game

Day 7: 45 Days of Code Challenge

A web-based reflex testing application designed to measure user reaction time with millisecond precision. This project demonstrates the implementation of asynchronous logic, state management, and performance timing in React without external libraries.

## LIVE DEMO -: https://day7-reaction-game.vercel.app/

---

## Project Overview

- Project Name: Reaction Time Game
- Application Type: Interactive Game (Single Page Application)
- Core Logic: Randomized timeouts and Date object timestamps.
- Goal: To build a performant state-machine based application to measure human reflexes.

## Key Features

- Precise Timing: Calculates reaction time using the Date.now() method for high accuracy.
- Randomized Delays: Implements random time intervals (1s - 4s) to prevent prediction.
- State Management: Uses a defined state machine (Idle, Waiting, Ready, Finished, Early) to control game flow.
- Performance Tracking: Persists the user's best reaction time using LocalStorage.
- Visual Feedback: Provides clear visual cues (Blue, Red, Green) for different game states.

## Technical Stack

- Frontend Library: React.js (Vite)
- Styling: Pure CSS (CSS Variables, Flexbox)
- Hooks Used: useState, useRef (for mutable timer references)

## Project Structure

- src/components/GameBox.jsx: The main interactive component handling visual states.
- src/components/ScoreBoard.jsx: Component to display current and best scores.
- src/App.jsx: Contains the core game logic, timer handling, and state transitions.

## Installation and Setup

1. Clone the Repository
   git clone https://github.com/VYANKEE/Day7-ReactionGame.git

2. Navigate to the Directory
   cd Day7-ReactionGame

3. Install Dependencies
   npm install

4. Start the Application
   npm run dev

## Learning Outcomes

- Utilizing the useRef hook to store timer IDs and prevent unnecessary re-renders.
- Implementing cleanup logic for asynchronous JavaScript functions (setTimeout).
- Managing complex user interactions and conditional rendering based on game states.

---

Developed by VYANKEE
