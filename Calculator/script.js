let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            if(string.length != 0){
                if (string.includes('^')){
                    string = string.replace('^','**')
                    string = eval(string);
                    document.querySelector('input').value = string;
                    string='='
                }
                else{
                    string = eval(string);
                    document.querySelector('input').value = string;
                    string = '='
                }
            }
            else{
                string = 'Undefined';
                document.querySelector('input').value = string;
                string = '='
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else{
            if(string == '='){
                if(e.target == '+' || e.target == '-' || e.target == '*' || e.target == '/'){
                    console.log(e.target);
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string
                }
                else{
                    string = ''
                    console.log(e.target);
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string
                }
            }
            else{
                console.log(e.target);
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string
            }
        }
    })
})