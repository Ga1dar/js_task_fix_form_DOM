document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),t.setAttribute("for",e.id),e.setAttribute("placeholder",t.textContent),e.parentElement.insertBefore(t,e)});
//# sourceMappingURL=index.cf7bf5a3.js.map
