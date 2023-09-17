// Get the textarea element
const textarea = document.getElementById('autosave-textarea');

// Check if there's saved content in localStorage and populate the textarea
if (localStorage.getItem('autosave-content')) {
    textarea.value = localStorage.getItem('autosave-content');
}

// Add an event listener to the textarea to save its content on every change
textarea.addEventListener('input', function() {
    const content = textarea.value;
    localStorage.setItem('autosave-content', content);
});
