function searchError(api, temtemNumber, temtemCard, tempediaText) {
  if (api != `https://temtem-api.mael.tech/api/temtems/${temtemNumber}`) {
    errorSearch.textContent = `Temtem "${temtemSearch.value}" is not available!`;
    temtemCard.classList.remove("active");
    tempediaText.classList.add("active");
  }
}

export default searchError;
