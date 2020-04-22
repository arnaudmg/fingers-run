function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 const cloud = Array.from(document.querySelectorAll('.home .homapageCloud'))

window.addEventListener('mousemove', (event) =>
{
    const cursorX = event.clientX
    const cursorY = event.clientY

    for(const homepageCloud of cloud)
    {
        const bounding = homepageCloud.getBoundingClientRect()
        const centerX = bounding.x + bounding.width / 2
        const centerY = bounding.y + bounding.height / 2
        const deltaX = cursorX - centerX
        const deltaY = cursorY - centerY
        const angle = Math.atan2(deltaY,deltaX)
        const radius = Math.min(Math.hypot(deltaX, deltaY) * 0.2, 70)
        const x = Math.cos(angle)*50
        const y = Math.sin(angle)*50
        const cloude = homepageCloud.children[0]
        cloud.style.top = `${y}px`
        cloud.style.left = `${x}px`     
    }
})