// ---- Logout functions Helper
// - Call logout
function callLogout() {
  const pronptMessage = "Deseja permanecer conectado?"
  if (confirm(pronptMessage) == true) {
    setCounterStorage(refreshDefault);
  } else {
    clearStorageAuth();
    window.location.replace("index.html");
  }
}