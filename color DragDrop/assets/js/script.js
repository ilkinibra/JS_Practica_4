const dropArea = document.querySelector(".drop-area");
const colorItems = document.querySelectorAll(".color-item");

dropArea.addEventListener("dragover", (e) => e.preventDefault());

colorItems.forEach((colorItem) => {
  colorItem.addEventListener("dragstart", (e) => {
    const { target, dataTransfer } = e;
    const red = target.dataset.red;
    const green = target.dataset.green;
    const blue = target.dataset.blue;

    let color = `${red},${green},${blue}`;

    dataTransfer.setData("text", color);
  });
});

dropArea.addEventListener("drop", (e) => {
  const { dataTransfer } = e;
  let givenColors = dataTransfer.getData("text").split(",");

  const [red, green, blue] = givenColors;

  dropArea.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
