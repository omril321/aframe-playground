import "aframe";

AFRAME.registerComponent('initial-speed', {
    schema: {type: "vec3"},
    tick: function () {
        const currentPosition = this.el.getAttribute('position');
        currentPosition.x += this.data.x;
        currentPosition.y += this.data.y;
        currentPosition.z += this.data.z;

        this.el.setAttribute('position', currentPosition);
    }
})