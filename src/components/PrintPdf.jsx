import { Document, Text, Page, } from "@react-pdf/renderer";



function PrintPdf() {
  return (
    <Document>
      <Page>
       <Text> {/* aqui es que se requiere importar solo texto */}
        Hola Mundo
       </Text>
      </Page>
    </Document>
  );
}

export default PrintPdf;
