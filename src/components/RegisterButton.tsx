const RegisterButton = () => {
    function openForm() {
        setTimeout(() => {
            const url = 'https://www.google.com';
            window.open(url, '_blank');
        }, 300)
    }

    return <button className={'btn-two'}
                   onClick={openForm}
    >REGISTER</button>;
}
export default RegisterButton