const messureWidth = item => {
    let reqItemWidth = 0;
    const creenWidth = $(window).width();
    const container =item.closest(".products__menu")
    const titleBlocks = container.find(".products__menu-title")
    const titleWidth = titleBlocks.width() * titleBlocks.length;

    const textContainer = item.find(".products__menu-container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));
    
    const isMobile = window.matchMedia("(max-width:768px)").matches;

    if(isMobile) {
        reqItemWidth = creenWidth - titleWidth;
    } else {
        reqItemWidth = 500;
    }

    return{
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
 };

const closeEveryItemInContainer = container => {
    const items = container.find(".products__menu-item");

    const content = container.find(".products__menu-content");

    items.removeClass("active");
    content.width(0);
}

const openprodItem = item => {
    const hiddenContent = item.find(".products__menu-content");
    const reqWidth = messureWidth(item);
    const textBlock = item.find(".products__menu-container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
}

$(".products__menu-title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products__menu-item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products__menu");

    if(itemOpened){
        closeEveryItemInContainer(container);
    }else{
        closeEveryItemInContainer(container);
        openprodItem(item);
    }

});


$(".products__menu-close").on("click", e => {
    e.preventDefault();

    closeEveryItemInContainer($('.products__menu'));
})