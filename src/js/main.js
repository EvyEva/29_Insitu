const languages = document.querySelectorAll(".language");

languages.forEach((lang) => {
  lang.addEventListener("click", () => {
    languages.forEach((el) => el.classList.remove("active"));

    lang.classList.add("active");
  });
});
