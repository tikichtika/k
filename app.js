document.addEventListener('DOMContentLoaded', () => {
    const tree = document.querySelector('a-entity[gltf-model]');
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const scaleUpBtn = document.getElementById('scale-up');
    const scaleDownBtn = document.getElementById('scale-down');

    // Rotation controls
    rotateLeftBtn.addEventListener('click', () => {
        const currentRotation = tree.getAttribute('rotation');
        tree.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y + 10,
            z: currentRotation.z
        });
    });

    rotateRightBtn.addEventListener('click', () => {
        const currentRotation = tree.getAttribute('rotation');
        tree.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y - 10,
            z: currentRotation.z
        });
    });

    // Scaling controls
    scaleUpBtn.addEventListener('click', () => {
        const currentScale = tree.getAttribute('scale');
        const newScale = {
            x: currentScale.x * 1.1,
            y: currentScale.y * 1.1,
            z: currentScale.z * 1.1
        };
        tree.setAttribute('scale', newScale);
    });

    scaleDownBtn.addEventListener('click', () => {
        const currentScale = tree.getAttribute('scale');
        const newScale = {
            x: currentScale.x * 0.9,
            y: currentScale.y * 0.9,
            z: currentScale.z * 0.9
        };
        tree.setAttribute('scale', newScale);
    });
});
