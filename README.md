# BoneScript PRU Support Examples

## Introduction

This is a collection of examples to demonstrate the PRU Support in BoneScript. Each example folder includes a README with detailed instructions for getting up and running with the particular example.

## Functions Documentation

###  modProbe(mod,probe)

Loads/Unloads a kernel Module.

* `mod`: (string)the name of the Kernel Module to be loaded(default is pru_rproc).
* `probe`: (boolean)Specify whether to probe/unprobe the module(default is true(probe)).

### pruEnable(pruno, enable)

Enables/Disables the specified PRU Core(0 or 1).

* `pruno`: (number)The number corresponding to the pru core(0 or 1).
* `enable`: (string)Specify whether to enable/disable the pru core (default is true(enable)).

### pruReset(pruno)

Resets the specified PRU Core(0 or 1).

* `pruno`: (number)The number corresponding to the pru core(0 or 1).

### loadPRUFirmware(filepath, pruno)
Loads the given firmware to the corresponding PRU Core

* `filepath`: (string)Path corresponding to the PRU firmware file.
* `pruno`: (number)The number corresponding to the pru core(0 or 1).



## Example Usage

```

var b =require('bonescript');
b.modprobe();
b.loadPRUFirmware('./Hello_PRU/gen/Hello_PRU.out',1);
b.pruReset(1);

```
