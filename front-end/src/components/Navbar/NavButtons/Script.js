import "./Style.css";

export default function NavButtons({ appState, NavButtonsOn, NavButtonsOff }) {

  return (
    <div className="btn-group">
      <button
        className="btn btn-primary"
        type="button"
        onClick={NavButtonsOff}
        disabled={!appState.navState.adminView}
      >
        User
      </button>
      <button
        className="btn btn-primary"
        type="button"
        onClick={NavButtonsOn}
        disabled={appState.navState.adminView}
      >
        Admin
      </button>
    </div>
  );
}
