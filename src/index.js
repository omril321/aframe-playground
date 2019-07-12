import "aframe";
import "aframe-physics-system";

AFRAME.registerComponent('initial-force', {
    schema: {type: "vec3"},
    init: function() {
        const {x, y, z} = this.data;
        this.el.addEventListener('body-loaded', (e) => {
            debugger;
            e.detail.body.applyForce(new CANNON.Vec3(x, y, z),new CANNON.Vec3(0, 0, 0));
        });


    },
})