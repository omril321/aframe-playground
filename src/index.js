import 'aframe';
import 'aframe-physics-system';

AFRAME.registerComponent('initial-force', {
    schema: {type: 'vec3'},
    init: function () {
        const {x, y, z} = this.data;
        this.el.addEventListener('body-loaded', (e) => {
            e.detail.body.applyForce(new CANNON.Vec3(x, y, z), new CANNON.Vec3(0, 0, 0));
        });


    },
});

AFRAME.registerComponent('pushed-by-looking', {
    schema: {force: {type: 'number', default: 1000}},
    init: function () {
        const force = this.data.force;
        this.el.addEventListener('mouseenter', (e) => {
            const camera = document.querySelector('a-camera');
            const cameraPosition = camera.object3D.position.clone();
            const intersectionPoint = e.detail.intersection.point.clone();

            const pushVector = intersectionPoint.add(cameraPosition.negate());

            const toApply = pushVector.multiplyScalar(force).add(new CANNON.Vec3(0, force, 0));
            e.currentTarget.body.applyForce(toApply, new CANNON.Vec3(0, 0, 0));
        })
    }
})