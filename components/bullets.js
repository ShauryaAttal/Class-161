AFRAME.registerComponent("bullets", {
  init: function () {
    this.showBullet();
  },

  showBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");
        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.3,
        });
        bullet.setAttribute("material", {
          color: "black",
        });

        var camera = document.querySelector("#camera");
        var scene = document.querySelector("#scene");
        position = camera.getAttribute("position");
        bullet.setAttribute("position", {
          x: position.x,
          y: position.y,
          z: position.z,
        });
        /*bullet.setAttribute("velocity", {
            x: 0,
            y: 0,
            z: -5
        })*/
        //console.log(bullet);

        // set three.js

        var newCamera = document.querySelector("#camera").object3D
        var direction = new THREE.Vector3()

        newCamera.getWorldDirection(direction)

        bullet.setAttribute("velocity", direction.multiplyScalar(-20))

        scene.appendChild(bullet)

        console.log(camera)
        console.log(newCamera)
      }
    });
  },
});
