# Item Reminder App

Item Reminder is a React Native application designed to help users manage their to-do items and set location-based reminders. The app integrates mapping functionality and push notifications to ensure users never forget their important tasks.

![Screenshot_2025-04-03-12-37-14-036_host exp exponent](https://github.com/user-attachments/assets/199b4dcc-91b3-472e-945f-f68006717e3e)
![Screenshot_2025-04-03-12-37-08-129_host exp exponent](https://github.com/user-attachments/assets/814bd125-f2ff-4187-8054-aaaed746d497)

## Features

- **Interactive Map**: Select and save locations using an interactive map powered by `react-native-maps`.
- **Location-Based Reminders**: Add reminders tied to specific locations.
- **Item Management**: Add, view, and clear a list of items.
- **Push Notifications**: Receive notifications reminding you of your items.
- **Offline Storage**: Save and retrieve items locally using `AsyncStorage`.

## Screens

1. **Home Screen**:

   - Displays a map where users can select a location.
   - Allows users to finalize or clear their selected location.

2. **Items List**:
   - Displays a list of items added by the user.
   - Provides controls to add new items or clear the list.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/item-reminder.git
   cd item-reminder

   ```

2. Install dependencies:

3. Start the app:

4. Run on your desired platform:

- For Android: npm run android
- For iOS: npm run ios (requires macOS)
- For Web: Open the Expo development server in your browser.

## Usage

Open the app and grant location permissions.
Use the map to select a location and save it.
Add items to your list in the "Items List" screen.
Receive notifications reminding you of your items when near the saved location.

## Technologies Used

- React Native: Framework for building the app.
- Expo: Development platform for React Native.
- react-native-maps: Map integration.
- expo-notifications: Push notification support.
- AsyncStorage: Local storage for items.

## File Structure

app/: Contains the main screens and styles.
components/: Reusable components for the map and list functionalities.
constants/: Stores app constants like initial map coordinates.
types/: TypeScript type definitions for props and interfaces.

## Contributing

Contributions are welcome! Please follow these steps:

## Fork the repository.

- Create a new branch: git checkout -b feature-name.
- Commit your changes: git commit -m "Add feature-name".
- Push to the branch: git push origin feature-name.
- Open a pull request.
