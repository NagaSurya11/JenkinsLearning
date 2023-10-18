const {exec} = require('pkg');
const process = require('process');

async function pack(target){
    await exec(['package.json', '--target', `${target}`, '--output', 'executable']);
}
pack(process.argv[2]);

