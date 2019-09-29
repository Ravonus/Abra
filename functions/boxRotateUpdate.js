

{
    if (cursors.left.isDown)
    {
        if (isPosition)
        {
            cameras.blue_ball.x -= 4;
        }
        else
        {
            cameras.blue_ball.rotate(0.01, xAxis);
        }
    }
    else if (cursors.right.isDown)
    {
        if (isPosition)
        {
            cameras.blue_ball.x += 4;
        }
        else
        {
            cameras.blue_ball.rotate(-0.01, xAxis);
        }
    }

    if (cursors.up.isDown)
    {
        if (cursors.shift.isDown)
        {
            if (isPosition)
            {
                cameras.blue_ball.y += 4;
            }
            else
            {
                cameras.blue_ball.rotate(0.01, yAxis);
            }
        }
        else
        {
            if (isPosition)
            {
                cameras.blue_ball.z += 4;
            }
            else
            {
                cameras.blue_ball.rotate(0.01, zAxis);
            }
        }
    }
    else if (cursors.down.isDown)
    {
        if (cursors.shift.isDown)
        {
            if (isPosition)
            {
                cameras.blue_ball.y -= 4;
            }
            else
            {
                cameras.blue_ball.rotate(-0.01, yAxis);
            }
        }
        else
        {
            if (isPosition)
            {
                cameras.blue_ball.z -= 4;
            }
            else
            {
                cameras.blue_ball.rotate(-0.01, zAxis);
            }
        }
    }
  }
