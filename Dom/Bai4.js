function getAttributes() {
  const w3r = document.getElementById("w3r");
  let w3rType = w3r.attributes.type.value;
  let w3rHref = w3r.attributes.href.value;
  let w3rHreflang = w3r.attributes.hreflang.value;
  let w3rTarget = w3r.attributes.target.value;
  console.log(w3rHref, w3rHreflang, w3rTarget, w3rType);
}
