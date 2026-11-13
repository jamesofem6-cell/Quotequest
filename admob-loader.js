import { RewardedAd, AdMob, AdMobPlusEvents } from "@capgo/capacitor-admob";
import { Capacitor } from "@capacitor/core";

// Initialize the native Google Mobile Ads SDK once during app startup.
// RewardedAd.load() must not race ahead of SDK initialization.
const admobReady = Capacitor.isNativePlatform()
  ? AdMob.start().then(() => {
      console.log("QuoteQuest AdMob SDK initialized.");
      return true;
    }).catch((error) => {
      console.error("QuoteQuest AdMob SDK initialization failed:", error);
      throw error;
    })
  : Promise.resolve(false);

// Expose the SDK and its initialization promise to the game.
window.qqAdMobModules = {
  RewardedAd,
  AdMob,
  AdMobPlusEvents,
  Capacitor,
  ready: admobReady
};
