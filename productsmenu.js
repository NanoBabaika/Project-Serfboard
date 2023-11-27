const messureWidth = () => {
    return 500;
}

const openItem = item => {
    const hiddenContent = item.find(".products__menu-content");
    const reqWidth = messureWidth();
}

$(".products__menu-title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products__menu-item");

    openItem(item);
});