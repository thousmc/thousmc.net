document.addEventListener('DOMContentLoaded', () => {
  const allCopyButtons = document.querySelectorAll('.copy-button');

  allCopyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const address = button.dataset.address;
      
      navigator.clipboard.writeText(address).then(() => {
        // success
        const originalText = button.textContent;
        button.textContent = 'copied!';
        
        // "copied!" timeout
        setTimeout(() => {
          button.textContent = originalText;
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});