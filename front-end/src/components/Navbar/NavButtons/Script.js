import "./Style.css";

export default function NavButtons({ navState, setNavState }) {
  return (
    <div className="btn-group">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          setNavState({ ...navState, adminView: false });
        }}
        disabled={!navState.adminView}
      >
        User
      </button>
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => {
          setNavState({ ...navState, adminView: true });
        }}
        disabled={navState.adminView}
      >
        Admin
      </button>
    </div>
  );
}
