import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "topic-banners",

  initialize() {
    withPluginApi("0.8", (api) => {
      api.decorateWidget("topic-banners:after", (helper) => {
        helper.widget.appEvents.on("page:changed", () => {
          helper.widget.scheduleRerender();
        });
      });
    });
  },
};
