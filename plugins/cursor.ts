import { onBeforeUnmount } from 'vue';

export default () => {
  if (import.meta.client) { 
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const updateCursorPosition = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    window.addEventListener('mousemove', updateCursorPosition);

    onBeforeUnmount(() => {
      window.removeEventListener('mousemove', updateCursorPosition);
    });
  }
};
