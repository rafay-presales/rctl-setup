const path = require('path');

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: 'macOS',
    win32: 'windows'
  };
  return mappings[os] || os;
}

function getDownloadObject() {
  const platform = os.platform();
  const filename = `rctl`;
  const extension = platform === 'win32' ? 'zip' : 'tar.gz';
  const binPath = path.join(filename, 'bin');
  const url = `https://s3-us-west-2.amazonaws.com/rafay-prod-cli/publish/rctl-linux-amd64.tar.bz2`;
  //const url = `https://github.com/cli/cli/releases/download/v${ version }/${ filename }.${ extension }`;
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
