import { ALERT_TYPE, Dialog } from "react-native-alert-notification";

export function AlertCorrect(selected, capital, country, setSelected) {
  Dialog.show({
    type: ALERT_TYPE.SUCCESS,
    title: `${selected} Is Correct!`,
    textBody: `The Capital City of ${country} is ${capital}`,
    autoClose: 2000,
    onHide: () => {
      setSelected(selected);
    },
  });
}

export function AlertIncorrect(selected, capital, country, setSelected) {
  Dialog.show({
    type: ALERT_TYPE.DANGER,
    title: `${selected} Is Incorrect`,
    textBody: `The Capital City of ${country} is ${capital}`,
    autoClose: 2000,
    onHide: () => {
      setSelected(selected);
    },
  });
}
