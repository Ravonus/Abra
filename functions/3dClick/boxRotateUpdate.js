{

    var socketBall = Phaser.phaserConfig.socketBalls.name;
    xAxis = new Phaser.Math.Vector3(1, 0, 0);
    yAxis = new Phaser.Math.Vector3(0, 1, 0);
    zAxis = new Phaser.Math.Vector3(0, 0, 1);

    if (inputs.left.isDown) {
        if (isPosition) {
            cameras[socketBall].x -= 4;
        }
        else {
            cameras[socketBall].rotate(0.01, xAxis);
        }
    }
    else if (inputs.right.isDown) {
        if (isPosition) {
            cameras[socketBall].x += 4;
        }
        else {
            cameras[socketBall].rotate(-0.01, xAxis);
        }
    }

    if (inputs.up.isDown) {
        if (inputs.shift.isDown) {
            if (isPosition) {
                cameras[socketBall].y += 4;
            }
            else {
                cameras[socketBall].rotate(0.01, yAxis);
            }
        }
        else {
            if (isPosition) {
                cameras[socketBall].z += 4;
            }
            else {
                cameras[socketBall].rotate(0.01, zAxis);
            }
        }
    }
    else if (inputs.down.isDown) {
        if (inputs.shift.isDown) {
            if (isPosition) {
                cameras[socketBall].y -= 4;
            }
            else {
                cameras[socketBall].rotate(-0.01, yAxis);
            }
        }
        else {
            if (isPosition) {
                cameras[socketBall].z -= 4;
            }
            else {
                cameras[socketBall].rotate(-0.01, zAxis);
            }
        }
    }
}
