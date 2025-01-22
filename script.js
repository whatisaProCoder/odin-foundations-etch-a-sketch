function createGrid(numberOfBoxes) {
    if(numberOfBoxes > 100) {
        numberOfBoxes = 100;
    }
    
    const container = document.querySelector(".container");
    container.innerHTML = '';

    const itemSize = 640 / numberOfBoxes;

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, ${itemSize}px)`;
    container.style.gridTemplateRows = `repeat(${numberOfBoxes}, ${itemSize}px)`;

    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.width = `${itemSize}px`;
        item.style.height = `${itemSize}px`;
        container.appendChild(item);

        item.addEventListener("mouseenter", (event) => {
            const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            event.target.style.backgroundColor = randomColor;
        });

        item.addEventListener("mouseleave", (event) => {
            setTimeout(() => {
                event.target.style.backgroundColor = '';
            }, 4000);
        });
    }
}

createGrid(16);

const settings = document.querySelector(".settings");
settings.addEventListener("click", () => {
    const numberOfBoxes = prompt("Enter number of boxes?");
    if (numberOfBoxes.length == 0) {
        numberOfBoxes = 16;
    }
    createGrid(numberOfBoxes);
});
