export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after finish developing..
  //token:
  //  "BQAwsrJFHNqUtqr5U52WF4z_bzvBuUep6P-EkSoX4-v2bAhbWZ0w-YYOwatj7v7PrFSdhnR7kSkhVRJzhoRS-0Xp_WxwhCR6KlYmnPNKeX7RBKniNKhyMt99F7cUvkbZJRw7kCsO5TygSnCSSzaRvguFXsu9kf9PT5umvlZrn5yNU24q",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
