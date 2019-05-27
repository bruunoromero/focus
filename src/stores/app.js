import { Record } from "immutable";

import { createStore, createEvent } from "effector";

export const hidden = createEvent();
export const visible = createEvent();
export const wakeUp = createEvent();
export const sleep = createEvent();

const AppStoreFactory = Record({ hidden: false, wokeUp: false });

export const appStore = createStore(AppStoreFactory())
  .on(hidden, state => state.set("hidden", true))
  .on(visible, state => state.set("hidden", false))
  .on(wakeUp, state => state.set("wokeUp", true))
  .on(sleep, state => state.set("wokeUp", false));
