const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content__block");
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
    const items = container.find('.team__content');
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("active");
    items.height(0);
}



$('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team-list'); 
    const elemContainer = $this.closest(".team__item");

    if(elemContainer.hasClass("active")) {
        // закрытие
        closeEveryItem(container);
    }else {
        closeEveryItem(container);
        openItem($this);
    }
})



 
