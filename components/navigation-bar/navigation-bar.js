Component({
  options: {
    multipleSlots: true, // Enable multi-slot support in the options when defining the component.
  },
  /**
   * Component property list
   */
  properties: {
    extClass: {
      type: String,
      value: "",
    },
    title: {
      type: String,
      value: "",
    },
    background: {
      type: String,
      value: "",
    },
    color: {
      type: String,
      value: "",
    },
    back: {
      type: Boolean,
      value: true,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    homeButton: {
      type: Boolean,
      value: false,
    },
    animated: {
      // Opacity animation effect when showing/hiding
      type: Boolean,
      value: true,
    },
    show: {
      // Showing/hiding the navigation bar, even when hidden, the navigation bar still retains its height.
      type: Boolean,
      value: true,
      observer: "_showChange",
    },
    // When `back` is true, the returned page depth
    delta: {
      type: Number,
      value: 1,
    },
  },
  /**
   * Initial data of the component
   */
  data: {
    displayStyle: "",
  },
  lifetimes: {
    attached() {
      const rect = wx.getMenuButtonBoundingClientRect();
      const platform = (wx.getDeviceInfo() || wx.getSystemInfoSync()).platform;
      const isAndroid = platform === "android";
      const isDevtools = platform === "devtools";
      const { windowWidth, safeArea: { top = 0, bottom = 0 } = {} } =
        wx.getWindowInfo() || wx.getSystemInfoSync();
      this.setData({
        ios: !isAndroid,
        innerPaddingRight: `padding-right: ${windowWidth - rect.left}px`,
        leftWidth: `width: ${windowWidth - rect.left}px`,
        safeAreaTop:
          isDevtools || isAndroid
            ? `height: calc(var(--height) + ${top}px); padding-top: ${top}px`
            : ``,
      });
    },
  },
  /**
   * Component method list
   */
  methods: {
    _showChange(show) {
      const animated = this.data.animated;
      let displayStyle = "";
      if (animated) {
        displayStyle = `opacity: ${show ? "1" : "0"};transition:opacity 0.5s;`;
      } else {
        displayStyle = `display: ${show ? "" : "none"}`;
      }
      this.setData({
        displayStyle,
      });
    },
    back() {
      const data = this.data;
      if (data.delta) {
        wx.navigateBack({
          delta: data.delta,
        });
      }
      this.triggerEvent(
        "back",
        {
          delta: data.delta,
        },
        {}
      );
    },
  },
});
