

export default function NavButtons({ appState, navButtonsOnOff }) {
  return (
    <div className="btn-group">
      <button
        className="btn btn-primary"
        type="button"
        id="false"
        onClick={navButtonsOnOff}
        disabled={!appState.navState.adminView}
      >
        User
      </button>
      <button
        className="btn btn-primary"
        type="button"
        id="true"
        onClick={navButtonsOnOff}
        disabled={appState.navState.adminView}
      >
        Admin
      </button>
    </div>
  );
}
