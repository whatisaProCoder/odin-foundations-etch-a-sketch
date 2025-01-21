const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);

    item.addEventListener("mouseenter", (event) => {
        event.target.classList.add("item-hover");
    })

    item.addEventListener("mouseleave", (event) => {
        setTimeout(() => {
            event.target.classList.remove("item-hover");
        }, 2000);
    })
}