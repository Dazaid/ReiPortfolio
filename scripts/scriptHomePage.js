    // ----------------------- move to hovered item, like scroll with hover and add hovered class------------------------------------
    
    
    // Select the container and all items
    const container = document.getElementById('preview-selector-container');
    const items = container.querySelectorAll('.preview-img-container');

    // Add event listeners to each item
    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          
            // Calculate the vertical scroll position
            let scrollTop = item.offsetTop - (container.offsetHeight - item.offsetHeight) / 2;


            // Set the scroll position of the container to center the hovered item vertically
            container.scrollTop = scrollTop;


            // Remove the 'hovered' class from all items
            items.forEach(item => item.classList.remove('hovered'));

            // Add the 'hovered' class to the hovered item
            item.classList.add('hovered');

        });
    });




// ----------------------- Remove hovered class ------------------------------------

        // Add event listener for mouseleave event on the container
    container.addEventListener('mouseleave', () => {
        // Remove the 'hovered' class from all items
    items.forEach(item => item.classList.remove('hovered'));
    });




// ----------------------- Scroll is larger to snap scroll works well ------------------------------------
    
    container.addEventListener('wheel', (event) => {
        // Adjust the scroll distance
        const scrollDistance = 200; // Change this value to adjust the scroll distance
        
        // Calculate the new scroll position
        const newScrollTop = container.scrollTop + (event.deltaY > 0 ? scrollDistance : -scrollDistance);

        // Scroll to the new position
        container.scrollTop = Math.max(0, Math.min(newScrollTop, container.scrollHeight - container.clientHeight));
    });