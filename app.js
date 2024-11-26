document.getElementById('connectBtn').addEventListener('click', async function() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Запрос на подключение MetaMask
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert('MetaMask подключен!');
        } catch (error) {
            alert('Ошибка подключения MetaMask!');
        }
    } else {
        alert('MetaMask не установлен!');
    }
});