const findBlockByAlias = (alias) => {
    return   $(".reviews__item").filter((ndx, item) => {
           return $(item).attr("data-linked-with") === alias;
       });
   };
   
   
   $(".intaractive__avatar-link").click(e => {
       e.preventDefault();
   
       const  $this = $(e.currentTarget);
       const target = $this.attr("data-open");
       const  itemToShow = findBlockByAlias(target);
       const curItem = $this.closest(".rewievs__switcher-item");
   
       itemToShow.addClass("active").siblings().removeClass("active");
       curItem.addClass("intaractive-avatar--active").siblings().removeClass("intaractive-avatar--active");
   })