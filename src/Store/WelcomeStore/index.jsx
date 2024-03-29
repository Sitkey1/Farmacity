export const WelcomeStore = {
  set: (trueOrFalse) => {
    localStorage.setItem("WELCOME", JSON.stringify(trueOrFalse));
  },
  get: () => {
    return JSON.parse(localStorage.getItem("WELCOME"));
  },
};
