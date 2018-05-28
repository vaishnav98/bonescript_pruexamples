# BoneScript PRU Support Hello_PRU Example

This is an example for demonstrating PRU FirmWare Load Support in BoneScript.
To run the example ,

```
make 
```
```
sudo node Hello_PRU.js
```
The example sets an LED connected to P8_45 pin to blink continously.Run these Commands to set
up TI  PRU Code Generation Tools ,if not already setup.

```
sudo apt-get update

sudo apt-get install ti-pru-cgt-installer

cd /usr/share/ti/cgt-pru/

mkdir bin

cd

ln  -s /usr/bin/clpru /usr/share/ti/cgt-pru/bin/clpru
ln  -s /usr/bin/lnkpru /usr/share/ti/cgt-pru/bin/lnkpru

export PRU_CGT=/usr/share/ti/cgt-pru (run this on every reboot)

```
