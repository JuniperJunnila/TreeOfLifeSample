import bootstrapStyles from "../../../utils/BootstrapStyles/BootstrapStyles";

const { navButtons } = bootstrapStyles;
const { group, button } = navButtons;

export default function NavButtons({ appState, navButtonsOnOff }) {
  return (
    <div className={group} id="group">
      <button
        className={button}
        type="button"
        id="false"
        onClick={navButtonsOnOff}
        disabled={!appState.navState.adminView}
      >
        User
      </button>
      <button
        className={button}
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
