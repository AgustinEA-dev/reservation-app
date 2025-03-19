document.addEventListener("DOMContentLoaded", () => {
    const stage = document.querySelector(".stage");
    const tableContainer = document.querySelector(".table-container");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
    };

    const stageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                stage.style.transform = "rotateX(10deg) translateX(0)";
                stage.style.opacity = "1";
            }
        });
    }, observerOptions);

    const tableObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                tableContainer.style.transform = "rotateX(10deg) translateY(0)";
                tableContainer.style.opacity = "1";
            }
        });
    }, observerOptions);

    stage.style.transform = "rotateX (60deg)translateX(10%)";
    stage.style.opacity = "0";
    tableContainer.style.transform = "rotateX(60deg) translateY(50px)";
    tableContainer.style.opacity = "0";

    stageObserver.observe(stage);
    tableObserver.observe(tableContainer);
});
