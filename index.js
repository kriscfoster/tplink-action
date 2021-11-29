const core = require('@actions/core');
const { login } = require('tplink-cloud-api');
const { performOperation } = require('./tplink');

(async () => {
  try {
    const email = core.getInput('email');
    const password = core.getInput('password');
    const deviceType = core.getInput('deviceType');
    const deviceId = core.getInput('deviceId');
    const operation = core.getInput('operation');
    const tplink = await login(email, password);
    const result = await performOperation(tplink, deviceType, deviceId, operation)
    core.setOutput('result', result);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
