import { NotificationTypes } from "@/types/notificationTypes";
import * as Notifications from "expo-notifications";

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission for push notifications was denied!");
    return;
  }
}

export async function sendNotification({ items }: NotificationTypes) {
  const [item1, item2, item3] = items;
  await Notifications.presentNotificationAsync({
    title: "Reminder",
    body: `Hey! Don't forget ${item1}, ${item2} and ${item3} before leaving! 📲`,
  });
}

registerForPushNotificationsAsync();
