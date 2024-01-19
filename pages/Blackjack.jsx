import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PlinkoGame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Matter.js setup code
    const engine = Matter.Engine.create();
    const world = engine.world;

    const render = Matter.Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
      },
    });

    Matter.Render.run(render);

    // Create the ground
    const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, { isStatic: true });
    Matter.World.add(world, ground);

    // Plinko chip creation code
    const createPlinkoChip = (x, y, radius) => {
      const plinkoChip = Matter.Bodies.circle(x, y, radius, { restitution: 1, friction: 0, density: 0.5 });
      Matter.World.add(world, plinkoChip);
    };

    // Handle click event
    const handleMouseClick = (event) => {
      const x = event.pageX;
      const y = event.pageY;

      // Create Plinko chip at the clicked position
      createPlinkoChip(x, y, 10);
    };

    window.addEventListener('click', handleMouseClick);

    // Run the engine using Matter.Runner.run
    Matter.Runner.run(engine);

    return () => {
      window.removeEventListener('click', handleMouseClick);
      Matter.Render.stop(render);
      Matter.Runner.stop(engine);
      Matter.Engine.clear(engine);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <canvas ref={canvasRef} className="plinko-canvas" />;
};

export default PlinkoGame;
