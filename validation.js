document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('Form');
    const nameInput = document.querySelector('name');
    const moodInput = document.querySelector('mood');
    const activityInput = document.querySelector('activity');
    const superpowerInput = document.querySelector('superpower');

    form.addEventListener('submit', (event) => {
        let valid = true;

        if (nameInput.value.trim() === ' ') {
            valid = false;
            alert('Name is required');
        }

        if (moodInput.value === ' ') {
            valid = false;
            alert('Please select your mood.')
        }

        if (activityInput.value.trim() === ' ') {
            valid = false;
            alert('Please enter your favorite activity.')
        }

        if (superpowerInput.value.trim() === ' ') {
            valid = false;
            alert('Please enter your desired superpower.')
        }

        if (!valid) {
            event.preventDefault();
        }
    })
    );
});