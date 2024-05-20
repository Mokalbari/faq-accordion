const toggleFaq = (() => {
  const toggleIcon = [
    "toggleIcon1",
    "toggleIcon2",
    "toggleIcon3",
    "toggleIcon4",
  ];

  const mainContent = {
    main: document.querySelector("main"),
  };

  const contentToDisplay = {
    content1: document.querySelector("#content1"),
    content2: document.querySelector("#content2"),
    content3: document.querySelector("#content3"),
    content4: document.querySelector("#content4"),
  };

  const getIconNumber = (target) => {
    const number = target.slice(-1);
    return number;
  };

  mainContent.main.addEventListener("click", (event) => {
    let targetID;
    toggleIcon.includes(event.target.id)
      ? (targetID = event.target.id)
      : (targetID = "");
    const number = getIconNumber(targetID);
    const content = `content${number}`;
    contentToDisplay[content].classList.toggle("hidden");
  });
})();
