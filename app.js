// Select all elements with the class 'box'
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    const button = box.querySelector('button');
    const graph = box.querySelector('.graph')
    const buttonText = button.querySelector('span'); // Select the span inside the button

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Close all other boxes
        boxes.forEach((otherBox) => {
            if (otherBox !== box) {
                otherBox.classList.remove('open');
                const otherGraph = otherBox.querySelector('.graph');
                const otherButtonText = otherBox.querySelector('button span');
                otherGraph.style.display = 'none';
                if (otherButtonText) otherButtonText.textContent = '+';
            }
        });

        // Toggle the 'open' class on the clicked box
        box.classList.toggle('open');

        // Check if the box is open and adjust the visibility of the graph and button text
        if (box.classList.contains('open')) {
            graph.style.display = 'block';
            buttonText.textContent = '-';
        } else {
            graph.style.display = 'none';
            buttonText.textContent = '+';
        }
    });
});
