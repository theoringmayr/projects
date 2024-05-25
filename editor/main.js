// Resize textarea
document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll('textarea');

    textareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
    });

    function autoResize() {
        this.style.height = 'auto'; // Reset the height
        this.style.height = (this.scrollHeight) + 'px'; // Set the height to the scroll height
    }
});