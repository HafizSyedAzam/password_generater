(function () {
    const result = document.getElementById('generatedPwd');
    const lengthInput = document.getElementById('pwdLength');
    const lengthVal = document.getElementById('lengthVal');
    const copyBtn = document.getElementById('copyPwd');
    const generateBtn = document.getElementById('generatePwd');
    const opts = {
        lower: document.getElementById('chkLower'),
        upper: document.getElementById('chkUpper'),
        number: document.getElementById('chkNumbers'),
        symbol: document.getElementById('chkSymbols'),
    };
    const symChars = '!@#$%^&*()_+~[]{}|;:,.<>?';

    function generatePassword() {
        const length = +lengthInput.value;
        let charPool = '';
        if (opts.lower.checked) charPool += 'abcdefghijklmnopqrstuvwxyz';
        if (opts.upper.checked) charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (opts.number.checked) charPool += '0123456789';
        if (opts.symbol.checked) charPool += symChars;
        if (!charPool) return '';
        let pwd = '';
        for (let i = 0; i < length; i++) {
            pwd += charPool[Math.floor(Math.random() * charPool.length)];
        }
        return pwd;
    }

    lengthInput.addEventListener('input', () => {
        lengthVal.textContent = lengthInput.value;
    });

    generateBtn.addEventListener('click', () => {
        result.value = generatePassword();
    });

    copyBtn.addEventListener('click', async () => {
        if (!result.value) return;
        try {
            await navigator.clipboard.writeText(result.value);
            copyBtn.textContent = 'Copied!';
            setTimeout(() => copyBtn.textContent = 'Copy', 1000);
        } catch (err) {
            alert('Copy failed');
        }
    });
})();