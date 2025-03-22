import * as Notifications from "expo-notifications";

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission for push notifications was denied!");
    return;
  }
}

export async function sendNotification() {
  await Notifications.presentNotificationAsync({
    title: "Reminder",
    body: "Hey! Time to check your app! 📲",
  });
}

registerForPushNotificationsAsync();
