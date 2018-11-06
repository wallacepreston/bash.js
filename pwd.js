module.export()

process.stdin.on('data',(data) => {
    let cmd = data.toString().trim();
    process.stdout.write(`You typed: ${cmd}\n`);
    if(cmd === 'pwd'){
        process.stdout.write(__dirname)
    }
    process.stdout.write('\nprompt > ');
});