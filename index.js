const toggleFaq = (() => {
  const toggleElement = [
    "toggleIcon1",
    "toggleIcon2",
    "toggleIcon3",
    "toggleIcon4",
    "toggleTitle1",
    "toggleTitle2",
    "toggleTitle3",
    "toggleTitle4",
  ];

  const mainContent = {
    main: document.querySelector("main"),
  };

  const contentToDisplay = {
    content1: document.querySelector("#content1"),
    content2: document.querySelector("#content2"),
    content3: document.querySelector("#content3"),
    content4: document.querySelector("#content4"),

    img1: document.querySelector("#toggleIcon1"),
    img2: document.querySelector("#toggleIcon2"),
    img3: document.querySelector("#toggleIcon3"),
    img4: document.querySelector("#toggleIcon4"),
  };

  const getIconNumber = (target) => {
    const number = target.slice(-1);
    return number;
  };

  mainContent.main.addEventListener("click", (event) => {
    let targetID;
    toggleElement.includes(event.target.id)
      ? (targetID = event.target.id)
      : (targetID = "");
    const number = getIconNumber(targetID);
    const content = `content${number}`;
    const currentImg = `img${number}`;

    contentToDisplay[content].classList.toggle("hidden");

    contentToDisplay[content].classList.contains("hidden")
      ? (contentToDisplay[currentImg].src = "./assets/images/icon-plus.svg")
      : (contentToDisplay[currentImg].src = "./assets/images/icon-minus.svg");
  });
})();
