import { ALERT_TYPE, Dialog } from "react-native-alert-notification";

export function AlertCorrect(selected, capital, country, onHideHandle) {
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: `${selected} Is Correct!`,
    textBody: `The Capital of ${country} is ${capital}`,
    button: "Next",
    closeOnOverlayTap: false,
    onHide: () => {
      onHideHandle();
    },
  });
}

export function AlertIncorrect(selected, capital, country, onHideHandle) {
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: `${selected} Is Incorrect`,
    textBody: `The Capital of ${country} is ${capital}`,
    button: "Next",
    closeOnOverlayTap: false,
    onHide: () => {
      onHideHandle();
    },
  });
}
