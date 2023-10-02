import React from 'react';

const CVButton = () => {
  const handleDownloadCV = () => {
    // Define la URL del archivo PDF en la carpeta pública
    const pdfURL = '/Lisi_CV.pdf';

    // Crea un elemento <a> invisible para descargar el archivo PDF
    const link = document.createElement('a');
    link.href = pdfURL;
    link.target = '_blank'; // Abre el enlace en una nueva pestaña/tab
    link.download = 'Lisi_CV.pdf'; // Nombre de archivo de descarga

    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  };

  return (
    <div>
      <button onClick={handleDownloadCV} className="btn btn-warning">
        Download CV
      </button>
    </div>
  );
};

export default CVButton;
