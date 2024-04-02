// main.js
async function startCamera() {
    try {
        const constraints = {
            video: true, { facingMode: 'environment' } // 'environment' para la cámara trasera
        };    
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 640;
        canvas.height = 480;

        document.body.appendChild(video);
        //document.body.appendChild(canvas);

        // Escuchar el evento 'loadedmetadata' para asegurarse de que el video esté listo
        video.addEventListener('loadedmetadata', () => {
            setInterval(() => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, canvas.width, canvas.height);
                if (code) {
                    document.getElementById('result').innerText = `Código QR encontrado: ${code.data}`;
                }
            }, 1000); // Escanea cada segundo
        });
    } catch (error) {
        console.error('Error al acceder a la cámara:', error);
    }
}
