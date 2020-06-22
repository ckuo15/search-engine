export { clientSideAlertHelper };

function clientSideAlertHelper(message) {
  if (typeof window !== "undefined") window.alert(message);
  else console.log("ALERT: ", message);
}
