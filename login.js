document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value;
        const password = document.getElementById('password').value;
        const confirmpassword = document.getElementById('confirmpassword').value;
        console.log({username:username, password:password, confirmpassword:confirmpassword});

        if((username !== '') && (password !== '') && confirmpassword !== ''){
        console.log('we are okay') 
        if (password === confirmpassword) {
            console.log('we match');
            document.getElementById('passwordVali').classList.add('hidden');
        }
        else{
            console.log('we do not match');
            document.getElementById('passwordValid').classList.remove('hidden');
        }
        }
        else{
            console.log('one of us is not okay')
            if (password =="" && confirmpassword== "") {
                console.log('please enter password')
                document.getElementById('passwordValid').classList.remove('hidden');
            }
            if (username == '') {
                document.getElementById('error').classList.remove('hidden');
                
            }
            if (password == '') {
                document.getElementById('emptyField').classList.remove('hidden');
            }
        }


})

document.getElementById('user').addEventListener('keypress', () => {
    console.log('changing');
    console.log(document.getElementById('user').value);
    document.getElementById('error').classList.add('hidden');
})

document.getElementById('password').addEventListener('keypress', () => {
    console.log('changing');
    console.log(document.getElementById('password').value);
    document.getElementById('emptyField').classList.add('hidden');
})

document.getElementById('confirmpassword').addEventListener('keypress', () =>{
    console.log('changing');
    console.log(document.getElementById('confirmpassword').value);
    document.getElementById('passwordValid').classList.add('hidden');
})