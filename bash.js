let pwd = require('./pwd')
let ls = require('./ls')

process.stdin.on('data', function(data){
    let cmd = data.toString().trim();
    process.stdout.write(`You typed: ${cmd}\n`);
    if(cmd === 'pwd'){
        pwd();
    }
    else if(cmd === 'ls'){
        ls();
    }
    process.stdout.write('\nprompt > ');
});
process.stdout.write('prompt > ');



