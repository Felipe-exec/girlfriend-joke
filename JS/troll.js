document.addEventListener("DOMContentLoaded", function() {
    const naoButton = document.querySelector(".btn-nao");
    
    naoButton.addEventListener("mouseover", function() {
        const newX = Math.random() * (window.innerWidth - 100); // Limitando a posição X para não ficar muito próximo da borda
        const newY = Math.random() * (window.innerHeight - 100); // Limitando a posição Y para não ficar muito próximo da borda

        naoButton.style.position = "absolute";
        naoButton.style.left = newX + "px";
        naoButton.style.top = newY + "px";
    });
});