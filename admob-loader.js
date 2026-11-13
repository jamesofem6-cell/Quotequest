import { RewardedAd, AdMob, AdMobPlusEvents } from "@capgo/capacitor-admob";
import { Capacitor } from "@capacitor/core";

// Expose the bundled native SDK modules to the existing game script.
window.qqAdMobModules = { RewardedAd, AdMob, AdMobPlusEvents, Capacitor };
