import html2pdf from "html2pdf.js";

export const descargarCV = () => {
  const element = document.getElementById("homepage");
  var opt = {
    margin: 0,
    filename: "curriculum-vitae.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: "in", format: "a3", orientation: "landscape" },
  };
  html2pdf().from(element).set(opt).save();
  html2pdf(element, opt);
};
