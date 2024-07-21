function bionicReading(text) {
  return text.split(' ').map(word => {
    let mid = Math.ceil(word.length / 2);
    return `<span style="font-weight:bold">${word.slice(0, mid)}</span>${word.slice(mid)}`;
  }).join(' ');
}

if (!document.body.classList.contains('bionic-reading')) {
  document.body.classList.add('bionic-reading');
  let textNodes = [];
  function walk(node) {
    if (node.nodeType === 3) {
      textNodes.push(node);
    } else {
      for (let child = node.firstChild; child; child = child.nextSibling) {
        walk(child);
      }
    }
  }
  walk(document.body);
  textNodes.forEach(node => {
    let span = document.createElement('span');
    span.innerHTML = bionicReading(node.nodeValue);
    node.parentNode.replaceChild(span, node);
  });
}
