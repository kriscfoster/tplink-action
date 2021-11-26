const HS100 = 'HS100';
const POWER_ON = 'powerOn';
const POWER_OFF = 'powerOff';

const supportedDeviceTypes = [HS100];
const supportedOperations = [POWER_ON, POWER_OFF];

async function performOperation(tplink, deviceType, deviceId, operation) {
  checkValidity(deviceType, operation);
  if (deviceType === HS100) {
    const device = await tplink.getHS100(deviceId);
    if (operation === POWER_ON) {
      await device.powerOn();
    } else if (operation === powerOff) {
      await device.powerOff();
    }
  }
}

function checkValidity(deviceType, operation) {
  if (!supportedDeviceTypes.includes(deviceType)) {
    throw new Error(`Unsupported device, supported devices are: [${supportedDeviceTypes}]`);
  } else if (!supportedOperations.includes(operation)) {
    throw new Error(`Unsupported operation, supported operations are: ${supportedOperations.toString()}`);
  }
}

module.exports = {
  performOperation,
  checkValidity,
}