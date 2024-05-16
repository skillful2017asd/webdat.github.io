const handleScroll = () => {
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 600) {
            backTop.classList.add("backTop-show");
        } else {
            backTop.classList.remove("backTop-show");
        }
    });

    backTop.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
};

handleScroll()