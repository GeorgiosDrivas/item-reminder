import * as Notifications from "expo-notifications";

interface Props {
  items: string[];
}

export async function registerForPushNotificationsAsync() {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission for push notifications was denied!");
    return;
  }
}

export async function sendNotification({ items }: Props) {
  const [item1, item2, item3] = items;
  await Notifications.presentNotificationAsync({
    title: "Reminder",
    body: `Hey! Don't forget ${item1}, ${item2} and ${item3} before leaving! 📲`,
  });
}

registerForPushNotificationsAsync();
