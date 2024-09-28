    
    
    const back_to_top = document.getElementById("back-to-top");

    back_to_top.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
