import './routes.css';
import FunRun from './FunRun';
import Community from './Community';
import HalfMarathon from './HalfMarathon';
import UltraMarathon from './Ultra-Marathon';
import React, { useRef, useState } from 'react';

const MrRoutes = () => {
    const routeSectRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleDragStart = (e) => {
        setDragging(true);
        setStartX(e.pageX || (e.touches && e.touches[0]?.pageX));
        setScrollLeft(routeSectRef.current.scrollLeft);
        routeSectRef.current.classList.add('dragging');
    };

    const handleDragEnd = () => {
        setDragging(false);
        routeSectRef.current.classList.remove('dragging');
    };

    const handleDragMove = (e) => {
        if (!dragging) return;
        const x = e.pageX || (e.touches && e.touches[0]?.pageX);
        const walk = (x - startX) * -1;
        routeSectRef.current.scrollLeft = scrollLeft + walk;
    };

    // Pause animation for all cards on hover or drag
    const handleMouseEnter = () => {
        if (routeSectRef.current) {
            routeSectRef.current.classList.add('pause-anim');
        }
    };
    const handleMouseLeave = () => {
        if (routeSectRef.current) {
            routeSectRef.current.classList.remove('pause-anim');
        }
        handleDragEnd();
    };

    return ( 
        <section
            id='routes'
            className='route-sect'
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDragMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={routeSectRef}
        >
            <FunRun />
            <Community />
            <HalfMarathon />
            <UltraMarathon />
        </section>
     );
}

export default MrRoutes;