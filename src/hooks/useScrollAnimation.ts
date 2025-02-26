import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create the Intersection Observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add animation class when element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Once animated, no need to observe anymore
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
      rootMargin: '50px' // Start animation slightly before the element comes into view
    });

    // Add fade-up class and observe sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-up');
      observerRef.current?.observe(section);
    });

    // Add fade-up class and observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.add('fade-up');
      observerRef.current?.observe(card);
    });

    // Add fade-up class and observe contact section elements
    document.querySelectorAll('#contact .details-container').forEach(container => {
      container.classList.add('fade-up');
      observerRef.current?.observe(container);
    });

    // Cleanup function
    return () => {
      observerRef.current?.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once on mount
};

export default useScrollAnimation; 