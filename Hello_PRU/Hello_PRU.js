var b =require('bonescript');

b.pinMode('P8_45',b.OUTPUT,6); //set P8_45 as pruout

b.modProbe();
b.loadPRUFirmware('./gen/Hello_PRU.out',1);
b.pruReset(1);
