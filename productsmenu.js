const messureWidth = () => {
    return 500;
}

const closeEveryItemInContainer = container => {
    const items = container.find(".products__menu");

    const content = container.find(".products__menu-content");

    items.removeClass("active");
    content.width(0);
}

const openprodItem = item => {
    const hiddenContent = item.find(".products__menu-content");
    const reqWidth = messureWidth();

    item.addClass("active");
    hiddenContent.width(reqWidth);
}

$(".products__menu-title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products__menu-item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products__menu");

    if(itemOpened){
        closeEveryItemInContainer()
    }else{
        openprodItem(item);
    }

  
});