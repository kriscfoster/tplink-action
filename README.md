# tplink-action

NOTE: We haven't released v1.0 yet so this is currently not available as an action. ETA: December 2021.

This action controls TP-Link smart devices from GitHub workflows. Right now, this only supports turning on & off the TP-Link HS100 smart plug. If you'd like to see more devices being supported, please create an issue/pull-request. This GitHub action is mainly a wrapper around [tplink-cloud-api](https://www.npmjs.com/package/tplink-cloud-api). We used that library because it was the only supported one which doesn't require access to the same network the device is connected to.

## Inputs

## `email`

**Required** Email address used to authenticate TP-Link account.

## `password`

**Required** Password used to authenticate TP-Link account.

## `deviceType`

**Required** Device type. Currently supported: `HS100`.

## `deviceId`

**Required** Device id/alias e.g. `714597GH64602FE04FBB370T6F73FD111ED5H52A` or `Kettle Plug`.

## `operation`

**Required** Operation you want to perform on device. Currently supported: `powerOn`, `powerOff`, `listDevices` (does not require valid `deviceType`/`deviceId`).

## Outputs

## `result`

The result of the TP-Link request.

## Example usage
```
uses: kriscfoster/tplink-action@v1.0
with:
  email: ${{ secrets.TPLINK_EMAIL }}
  password: ${{ secrets.TPLINK_PASSWORD }}
  deviceType: "HS100" # currently supported: "HS100"
  deviceId: "Kettle Plug" # this can be the id/alias of the device
  operation: "powerOn" # currently supported: "powerOn", "powerOff", "listDevices"
```
