import { useEffect, useRef } from 'react';

export function PhasePlaneBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const spacing = 40; // Space between vector points
    let cols = Math.floor(width / spacing) + 1;
    let rows = Math.floor(height / spacing) + 1;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.002; // Extremely slow time evolution so it's not distracting

      // Smooth mouse follow (easing)
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          // Scale coordinates to create a mathematical looking field
          const nx = (x / width) * 2 - 1;
          const ny = (y / height) * 2 - 1;
          
          // A smooth, flowing vector field representing a dynamical system (e.g., FitzHugh-Nagumo nullcline space)
          const angleBase = Math.sin(nx * 3 + time) + Math.cos(ny * 3 + time);
          
          // Mouse interaction
          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let angle = angleBase;
          let opacity = 0.08; // More visible base opacity

          if (dist < 250) {
            const mouseAngle = Math.atan2(dy, dx);
            const influence = Math.pow(1 - (dist / 250), 2); // Ease out influence
            
            // Gently blend the base angle with the angle pointing away from mouse (repulsion)
            const pushAngle = mouseAngle + Math.PI; 
            
            angle = angleBase * (1 - influence) + pushAngle * influence;
            opacity += influence * 0.15; // Brighter near mouse
          }

          const length = 12; // Longer dashes for better visibility
          const endX = x + Math.cos(angle) * length;
          const endY = y + Math.sin(angle) * length;

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          // Use green-deep for a subtle, academic look
          ctx.strokeStyle = `rgba(36, 87, 56, ${opacity})`; 
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / spacing) + 1;
      rows = Math.floor(height / spacing) + 1;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
