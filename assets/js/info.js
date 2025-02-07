const scrollDiv = document.getElementById("partnerContainer");

function autoScroll() {
    let scrollAmount = 0;
    const scrollSpeed = 0.1;
    const scrollInterval = 1;
    const maxScroll = scrollDiv.scrollHeight - scrollDiv.clientHeight + 50;
    let direction = 1;

    function scrollStep() {
        if (direction === 1 && scrollAmount < maxScroll) {
            scrollAmount += scrollSpeed;
        } else if (direction === -1 && scrollAmount > 0) {
            scrollAmount -= scrollSpeed;

        } else {
            direction *= -1; // Reverse direction
            setTimeout(scrollStep, scrollInterval*1000);
            return;
        }

        scrollDiv.scrollTop = scrollAmount;
        setTimeout(scrollStep, scrollInterval);
    }

    scrollStep();
}

autoScroll();