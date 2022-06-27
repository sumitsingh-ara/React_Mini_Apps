export const setLastLanguage = (from, to) => {
  localStorage.setItem("preferredLang", JSON.stringify({ from: from, to: to }));
};
export const getLanguage = () => {
  try {
    let data = localStorage.getItem("preferredLang");
    data = JSON.parse(data);
    console.log(data);
    return data;
  } catch (err) {
    return undefined;
  }
};
