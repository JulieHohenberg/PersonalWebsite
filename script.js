// Tooltips animation
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', function() {
            const tooltiptext = this.querySelector('.tooltiptext');
            if (tooltiptext) {
                tooltiptext.style.opacity = '0';
                tooltiptext.style.transition = 'opacity 1.2s ease-in-out';
                setTimeout(() => {
                    tooltiptext.style.opacity = '1';
                }, 50); // Small delay to trigger the transition
            }
        });

        tooltip.addEventListener('mouseout', function() {
            const tooltiptext = this.querySelector('.tooltiptext');
            if (tooltiptext) {
                tooltiptext.style.opacity = '0';
            }
        });
    });

