document.getElementById('activate').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ['content.js']
    });
  });
});

document.getElementById('deactivate').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: deactivateBionicReading
    });
  });
});

function deactivateBionicReading() {
  const elements = document.querySelectorAll('span[style*="font-weight:bold"]');
  elements.forEach((element) => {
    const parent = element.parentNode;
    parent.replaceChild(document.createTextNode(element.textContent), element);
    parent.normalize();
  });
  document.body.classList.remove('bionic-reading');
}
