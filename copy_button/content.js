// Function to run your script logic
function runScript() {

  setTimeout(() => {
    console.log("Script running after the page has fully loaded.");
  
    // You can perform any actions you want here
    // For example, changing the background color of the page:
  
    const elements = document.querySelectorAll('content-element-code-snippet');
  
    if (elements) {
      elements.forEach(function (element) {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.addEventListener('click', function () {
          // Get the text content of the element excluding the button text
          const elementText = element.innerText.replace('Copy', '');
          copyToClipboard(elementText);
        });
  
        element.appendChild(copyButton);
      });
  
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text successfully copied to clipboard');
          })
          .catch((err) => {
            console.error('Unable to copy text to clipboard', err);
          });
  
      }
    }
  }, 2000);
}


if(document.readyState === 'complete') {
  document.addEventListener('DOMContentLoaded',afterDOMCompleted);
} else {
  afterDOMCompleted();
}

function afterDOMCompleted(){
  runScript();
}